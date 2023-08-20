import React from "react";

const MeetupItem = () => {
  return (
    <li className="my-4">
      <Card>
        <div className="h-80 w-full overflow-hidden rounded-l-md rounded-tr-md">
          <img
            src={props.src}
            alt={props.alt}
            className="w-full object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl text-gray-700">{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className="p-6 text-center">
          <button className="pointer rounded-md border border-blue-500 bg-transparent px-6 py-2 text-white">
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
