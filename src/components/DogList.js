import React from "react";
import Dog from "./Dog.js";

const DogList = (props) => {
  const dogComponents = props.dogData.map((dog) => {
    return (
      <Dog
        name={dog.name}
        favoriteToy={dog.favoriteToy}
        chipNumber={dog.chipNumber}
      />
    );
  });

  return (
    <ul className="dog-list__list">
      <li>{dogComponents}</li>
    </ul>
  );
};

export default DogList;
