import React from "react";
import "../index.css";
const Notification = ({ message, status }) => {
  if (message === null || status === null) {
    return null;
  }


  return <div className={status}>{message}</div>;
};

export default Notification;
