import React from "react";
import { useTrackerContext } from "../Context/expenseTrackerContext";
import classes from "./components.module.scss";
import amountStringConverter from "./../Helper/amountStringConverter";

const BalanceWrapper = () => {
  const { currentBalance, incomeTotal, expenseTotal } = useTrackerContext();

  return (
    <div className={classes.balanceWrapper}>
      <h4>Your Balance</h4>
      <h4>{amountStringConverter(currentBalance)}</h4>
      <div className={classes.balanceWrapper__typeBox}>
        <span>Income</span>
        <span>Expense</span>
        <span>{amountStringConverter(incomeTotal)}</span>
        <span>{amountStringConverter(expenseTotal)}</span>
      </div>
    </div>
  );
};

export default BalanceWrapper;
