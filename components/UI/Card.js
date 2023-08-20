import React from "react";

const Card = (props) => {
  return (
    <div className="mx-auto w-[100%] rounded-md bg-white shadow-md lg:w-[50%]">
      {props.children}
    </div>
  );
};

export default Card;
