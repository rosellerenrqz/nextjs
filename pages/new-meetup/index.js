import React from "react";
import MeetupForm from "@/components/Meetup/MeetupForm";

const NewMeetUpPage = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return (
    <>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetUpPage;
