import React from "react";
import { useTrackerContext } from "../Context/expenseTrackerContext";
import classes from "./components.module.scss";

const BalanceWrapper = () => {
  const { currentBalance, incomeTotal, expenseTotal } = useTrackerContext();
  return (
    <div className={classes.balanceWrapper}>
      <h4>Your Balance</h4>
      <h4>${currentBalance}</h4>
      <div className={classes.balanceWrapper__typeBox}>
        <span>Income</span>
        <span>Expense</span>
        <span>${incomeTotal}</span>
        <span>${expenseTotal}</span>
      </div>
    </div>
  );
};

export default BalanceWrapper;
