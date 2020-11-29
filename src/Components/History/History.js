import React, { Fragment } from "react";
import classes from "./../components.module.scss";
// import Filter from "./Filter";
import List from "./List";

const History = () => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem 0px 1rem 0px",
        }}
      >
        {/* <Filter /> */}
        <h3>History</h3>
      </div>
      <div className={"styleScroll " + classes.history}>
        <List />
      </div>
    </Fragment>
  );
};

export default History;
