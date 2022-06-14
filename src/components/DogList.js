import React from "react";
import Dog from "./Dog.js";

const DogList = () => {
  return (
    <ul>
      <li>
        <Dog />
        <Dog />
        <Dog />
      </li>
    </ul>
  );
};

export default DogList;
