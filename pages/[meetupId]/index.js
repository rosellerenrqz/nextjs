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

export default MeetupDetailPage;
