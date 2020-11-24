import React from "react";
import { ReactComponent as PlusIcon } from "./../Assets/plus.svg";
import classes from "./components.module.scss";

const InsertExpense = () => {
  return (
    <div className={classes.insertExpense}>
      <div className={classes.insertExpense__addBtn}>
        <PlusIcon width="30px" height="30px" />
      </div>
    </div>
  );
};

export default InsertExpense;
