import React from "react";
import MeetupList from "@/components/Meetup/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Time Square",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/1_times_square_night_2013.jpg",
    address: "Midtown, New York City",
    description:
      "he intersection has one of the highest annual attendance rates of any tourist attraction in the world, estimated at 50 million.",
  },
  {
    id: "m2",
    title: "Sahara Desert",
    description: "lorem",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Maroc_Sahara_caravane.jpg/1280px-Maroc_Sahara_caravane.jpg",
    address: "Africa",
    description: "test description",
  },
  {
    id: "m3",
    title: "Old Town",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Porvoo_Old_Town_%2875%29_%2835876957683%29.jpg/1280px-Porvoo_Old_Town_%2875%29_%2835876957683%29.jpg",
    address: "Town of Porvoo",
    description:
      "Tourists getting acquainted with the structure of the medieval old town",
  },
];

const HomePage = (props) => {
  return (
    <React.Fragment>
      <h1 className="mb-2 text-center text-2xl font-bold uppercase text-white">
        All Meetups
      </h1>
      <MeetupList meetups={props.meetups} />
    </React.Fragment>
  );
};

export const getStaticProps = () => {
  return {
    //used in homepage in passing data
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
};

export default HomePage;
