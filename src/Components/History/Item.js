import React from "react";
import classes from "./../components.module.scss";

import { ReactComponent as BoltIcon } from "./../../Assets/bolt.svg";
const Item = ({
  title = "Purchase Shoes",
  amount = 902.4,
  type = "EXPENSE",
}) => {
  return (
    <div className={classes.item}>
      <TypeIcon type={type} />
      <p>{title}</p>
      <p>{type}</p>
      <div className={classes.item__amount}>
        <h4>
          {type === "INCOME" ? "+" : "-"} ${amount}
        </h4>
      </div>
    </div>
  );
};

const TypeIcon = ({ type }) => {
  return (
    <div className={classes.item__type} data-type={type}>
      <BoltIcon width="26px" height="26px" />
    </div>
  );
};

export default Item;
