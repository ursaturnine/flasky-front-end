import React from "react";
import Dog from "./Dog.js";

const DogList = () => {
  return (
    <ul className="dog-list__list">
      <li>
        <Dog />
        <Dog />
        <Dog />
      </li>
    </ul>
  );
};

export default DogList;
