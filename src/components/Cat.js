import React from "react";
import propTypes from "prop-types";

const Cat = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.caretaker}</h4>
      <h4>Pet Count: {props.petCount}</h4>
      <button>Pet Mario</button>
    </li>
  );
};

Cat.propTypes = {
  name: propTypes.string.isRequired,
  caretaker: propTypes.string,
  petCount: propTypes.number,
};

export default Cat;
