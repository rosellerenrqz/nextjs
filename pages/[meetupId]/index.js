import React from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "@/components/Meetup/MeetupDetail";

const MeetupDetailPage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Meetups</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <h1 className="mb-2 text-center text-2xl font-bold uppercase text-white">
        Meetup Detail
      </h1>

      {/*PROPS from meetupdata in getStaticProps*/}
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </React.Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://test:x0AUXfRrMdkdUe14@cluster0.mijxkzw.mongodb.net/meetups?retryWrites=true&w=majority",
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  //first argument is all data, second argument extract field to document
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false, //to display 404 error if there is no such Id
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://test:x0AUXfRrMdkdUe14@cluster0.mijxkzw.mongodb.net/meetups?retryWrites=true&w=majority",
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  //convert meetupid to object id which is in the mongodb
  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  return {
    props: {
      //converts the meetupid to string from objectid
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetailPage;
