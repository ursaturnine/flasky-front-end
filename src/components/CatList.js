import React from "react";
import Cat from "./Cat.js";
import propTypes from "prop-types";
//create varaible cat coponentts list of cat componnets
//creating a list of objects that map to cat
//cat is the individual object
//we have a list of data that is individual data for an object
//we need to grab instances of cat component

//iterating through list- props.catData-
//turning list of objects to list of components bc JSX can only render components
const CatList = (props) => {
  const catComponents = props.catData.map((cat) => {
    return (
      <Cat name={cat.name} caretaker={cat.caretaker} petCount={cat.petCount} />
    );
  });
  return (
    <section>
      <h2>Cat Count: {props.catData.length}</h2>
      <ul>{catComponents}</ul>
    </section>
  );
};
CatList.propTypes = {
  catData: propTypes.arrayOf(propTypes.object).isRequired,
};

export default CatList;
