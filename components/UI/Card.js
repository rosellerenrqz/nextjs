import React from "react";

const Card = (props) => {
  return (
    <div className="mx-auto w-[100%] rounded-md bg-[--lightdark-color] shadow-md md:w-[50%] lg:w-[40%]">
      {props.children}
    </div>
  );
};

export default Card;
