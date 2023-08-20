import React, { useRef } from "react";
import Card from "../UI/Card";

const MeetupForm = (props) => {
  const TitleInputRef = useRef();
  const ImageInputRef = useRef();
  const AddressInputRef = useRef();
  const DescriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = TitleInputRef.current.value;
    const enteredImage = ImageInputRef.current.value;
    const enteredAddress = AddressInputRef.current.value;
    const enteredDescription = DescriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    //to new meetup page
    props.onAddMeetup(meetupData);

    TitleInputRef.current.value = "";
    ImageInputRef.current.value = "";
    AddressInputRef.current.value = "";
    DescriptionInputRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className="p-4 text-[--font-color]">
        <div className="mb-2 uppercase">
          <label htmlFor="title" className="mb-2 block font-bold">
            Meetup Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Meetup Title"
            ref={TitleInputRef}
            required
            className="block w-full rounded-md border border-gray-200 p-1 text-black"
          />
        </div>
        <div className="mb-2 uppercase">
          <label htmlFor="image" className="mb-2 block font-bold">
            Meetup Image
          </label>
          <input
            type="url"
            id="image"
            placeholder="Meetup Image"
            ref={ImageInputRef}
            required
            className="block w-full rounded-md border border-gray-200 p-1 text-black"
          />
        </div>
        <div className="mb-2 uppercase">
          <label htmlFor="address" className="mb-2 block font-bold">
            Meetup Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Meetup Address"
            ref={AddressInputRef}
            required
            className="block w-full rounded-md border border-gray-200 p-1 text-black"
          />
        </div>
        <div className="mb-2 uppercase">
          <label htmlFor="description" className="mb-2 block font-bold">
            Meetup Description
          </label>
          <textarea
            rows="5"
            id="description"
            ref={DescriptionInputRef}
            required
            className="block w-full rounded-md border border-gray-200 text-black"
          />
        </div>
        <div className="text-center">
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white  hover:bg-blue-400 active:bg-blue-300">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
};

export default MeetupForm;
