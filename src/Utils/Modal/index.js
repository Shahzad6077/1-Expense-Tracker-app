import React from "react";
import classes from "./modal.module.scss";

const Modal = ({ isOpen, onClose, children }) => {
  if (isOpen) {
    return <div className={classes.modalWrapper}>{children}</div>;
  } else {
    return null;
  }
};

export default Modal;
