import MeetupDetail from "@/components/Meetup/MeetupDetail";
import React from "react";

const MeetupDetailPage = () => {
  return (
    <React.Fragment>
      <h1 className="mb-2 text-center text-2xl font-bold uppercase text-white">
        Meetup Detail
      </h1>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/c/c0/1_times_square_night_2013.jpg"
        title="First meetup"
        address="some address"
        description="some description"
      />
    </React.Fragment>
  );
};

export const getStaticPaths = () => {
  return {
    fallback: false, //to display 404 error if there is no such Id
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
};

export const getStaticProps = (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c0/1_times_square_night_2013.jpg",
        id: meetupId,
        title: "First meetup",
        address: "some address",
        description: "some description",
      },
    },
  };
};

export default MeetupDetailPage;
