import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

const Statistics = ({
  onGoodValue,
  onNeutralValue,
  onBadValue,
  total,
  positive,
}) => (
  <div>
    <ul>
      <li className={(style.list__font, style.green__font)}>
        Good:{onGoodValue}
      </li>
      <li className={(style.list__font, style.yellow__font)}>
        Neutral:{onNeutralValue}
      </li>
      <li className={(style.list__font, style.red__font)}>Bad:{onBadValue}</li>
      <li className={style.list__font}>Total:{total}</li>
      <li className={(style.list__font, style.green__font)}>
        Positive feedback:{positive}%
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  onGoodValue: PropTypes.number,
  onNeutralValue: PropTypes.number,
  onBadValue: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
