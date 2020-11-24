import React from "react";
import { useTrackerContext } from "../Context/expenseTrackerContext";
import classes from "./components.module.scss";

const TopBar = ({ username }) => {
  const { currentBalance } = useTrackerContext();
  return (
    <div className={classes.topBar}>
      <div className={classes.topBar__item}>
        <h5>Hello,</h5>
        <h2>{username}</h2>
      </div>
      <div className={classes.topBar__item}>
        <h5>Current balance</h5>
        <h2>${currentBalance.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default TopBar;
