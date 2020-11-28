import React, { useMemo } from "react";
import { useTrackerContext } from "../../Context/expenseTrackerContext";
import classes from "./../components.module.scss";

import { SimpleItem } from "./Item";

const List = () => {
  const { history, filter } = useTrackerContext();

  const renderList = useMemo(() => {
    return history
      .filter((o) => {
        if (filter === "ALL") {
          return true;
        } else {
          return filter === o.type;
        }
      })
      .map((o, i) => <SimpleItem key={i} {...o} />);
  }, [history, filter]);
  return <div className={classes.itemWrapper}>{renderList}</div>;
};

export default List;
