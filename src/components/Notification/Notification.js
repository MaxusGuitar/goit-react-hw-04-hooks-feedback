import PropTypes from "prop-types";
import style from "./style.module.css";

const Notification = ({ message }) => {
  return <p className={style.warning}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
