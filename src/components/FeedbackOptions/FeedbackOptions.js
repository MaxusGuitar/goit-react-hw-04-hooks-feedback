import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <ul className={style.list}>
      {options.map((option, id) => (
        <li key={id}>
          <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ul>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
