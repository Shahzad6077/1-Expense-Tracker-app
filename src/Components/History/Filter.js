import React from "react";
import { useTrackerContext } from "../../Context/expenseTrackerContext";
import classes from "./../components.module.scss";

const Filter = () => {
  const { filter, setFilter } = useTrackerContext();

  return (
    <div className={" " + classes.filter}>
      <ul>
        <li data-active={filter === "ALL"} onClick={() => setFilter("ALL")}>
          All
        </li>
        <li
          data-active={filter === "INCOME"}
          onClick={() => setFilter("INCOME")}
        >
          Income
        </li>
        <li
          data-active={filter === "EXPENSE"}
          onClick={() => setFilter("EXPENSE")}
        >
          Expenses
        </li>
      </ul>
    </div>
  );
};

export default Filter;
