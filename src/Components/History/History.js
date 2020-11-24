import React from "react";
import classes from "./../components.module.scss";
import Filter from "./Filter";
import Item from "./Item";
import List from "./List";

const History = () => {
  return (
    <div className={" " + classes.history}>
      <Filter />
      <List />
    </div>
  );
};

export default History;
