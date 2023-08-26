import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import MeetupForm from "@/components/Meetup/MeetupForm";

//api route is in api file name
//enteredMeetupData stores form object

const NewMeetUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    // console.log(enteredMeetupData);
    setIsLoading(true);
    const response = await fetch("api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
    // console.log(data, "data");

    setIsLoading(false);

    try {
      router.push("/");
    } catch (error) {
      console.error("Error during navigation:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Add your own Meetups" />
      </Head>
      <MeetupForm onAddMeetup={addMeetupHandler} isLoading={isLoading} />
    </>
  );
};

export default NewMeetUpPage;
