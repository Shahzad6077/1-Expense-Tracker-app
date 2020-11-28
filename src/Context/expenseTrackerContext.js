import React, { useContext, createContext, useState, useEffect } from "react";

const trackerContext = createContext();
const { Provider } = trackerContext;

const ARR = [
  { title: "Purchase Shoes", type: "EXPENSE", amount: 30 },
  { title: "PP Project", type: "INCOME", amount: 2200 },
  { title: "Affiliate Sales", type: "INCOME", amount: 340 },
  { title: "Domain & Hosting", type: "EXPENSE", amount: 74 },
];
const TrackerDataGen = () => {
  const [history, setHistory] = useState([...ARR]);
  const [filter, setFilter] = useState("ALL");
  const [currentBalance, setCurrentBalance] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);

  useEffect(() => {
    let incomeTotal = 0;
    let expenseTotal = 0;

    history.forEach(({ type, amount }) => {
      if (type === "INCOME") {
        incomeTotal += amount;
      } else {
        expenseTotal += amount;
      }
    });

    const remainingBalance = incomeTotal - expenseTotal;
    setCurrentBalance(remainingBalance);
    setIncomeTotal(incomeTotal);
    setExpenseTotal(expenseTotal);
  }, [history]);

  const insertTackerHistory = ({ title, type, amount }) => {
    let checker = {
      isValid: true,
      msg: "",
    };
    if (title.length < 1) {
      checker.isValid = false;
      checker.msg += "Title must not be empty.";
    }
    if (type !== "INCOME" || type !== "EXPENSE") {
      checker.isValid = false;
      checker.msg += "Type shoulde be INCOME or EXPENSE.";
    }
    if (amount < 1) {
      checker.isValid = false;
      checker.msg += "Amount must not be empty.";
    }

    if (!checker.isValid) {
      return checker;
    }
    setHistory((p) => [
      ...p,
      {
        title,
        type,
        amount,
      },
    ]);
    return checker;
  };
  return {
    history,
    insertTackerHistory,
    currentBalance,
    filter,
    setFilter,
    incomeTotal,
    expenseTotal,
  };
};

export const TrackerProvider = ({ children }) => {
  const data = TrackerDataGen();
  return <Provider value={data}>{children}</Provider>;
};

export const useTrackerContext = () => useContext(trackerContext);
