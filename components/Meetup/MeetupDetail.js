import React from "react";
import Card from "../UI/Card";
import Link from "next/link";

const MeetupDetail = (props) => {
  return (
    <React.Fragment>
      <Card>
        <div className="relative h-80 w-full overflow-hidden rounded-l-md rounded-tr-md">
          <img
            src={props.image}
            alt={props.title}
            className="relative h-full w-full object-cover"
          />
          <Link
            href="/"
            className="absolute top-0 rounded-br-lg bg-black px-5 py-2 text-xl font-bold text-white transition-colors hover:bg-[--font-color]"
          >
            X
          </Link>
        </div>
        <div className="py-4 text-center text-[--font-color]">
          <h1 className="text-2xl">{props.title}</h1>
          <address className="text-lg">{props.address}</address>
        </div>
        <div className="mx-7 border-t-2 border-gray-300 py-5 text-center">
          <p className="text-lg text-[--font-color]">{props.description}</p>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default MeetupDetail;
