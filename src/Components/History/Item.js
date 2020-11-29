import React from "react";
import classes from "./../components.module.scss";

import { ReactComponent as BoltIcon } from "./../../Assets/bolt.svg";
import { ReactComponent as TrashIcon } from "./../../Assets/trash-alt.svg";
import { useTrackerContext } from "../../Context/expenseTrackerContext";

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

export const SimpleItem = ({
  id,
  title = "Purchase Shoes",
  amount = 902.4,
  type = "EXPENSE",
}) => {
  const { removeTrackHistory } = useTrackerContext();
  const onDelete = () => removeTrackHistory(id);
  return (
    <div className={classes.simpleItem}>
      <div className={classes.simpleItem__delBtn} onClick={onDelete}>
        <TrashIcon width="20px" height="20px" />
      </div>
      <div className={classes.simpleItem__box} data-type={type}>
        <p>{title}</p>
        <h3>${amount}</h3>
      </div>
    </div>
  );
};

export default Item;
