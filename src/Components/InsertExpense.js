import React, { Fragment, useState } from "react";
import { ReactComponent as PlusIcon } from "./../Assets/plus.svg";
import classes from "./components.module.scss";
import Modal from "./../Utils/Modal";
import AddonInputField from "./../Utils/AddonInputField/index";
import AddonSelectorField from "./../Utils/AddonSelectorField/index";
import { useTrackerContext } from "../Context/expenseTrackerContext";

const InsertExpense = () => {
  const [isInsertModalOpen, setInsertMdoalOpen] = useState(true);

  const modalHandler = () => setInsertMdoalOpen((p) => !p);
  return (
    <Fragment>
      <div className={classes.insertExpense}>
        <div className={classes.insertExpense__addBtn} onClick={modalHandler}>
          <PlusIcon width="30px" height="30px" />
        </div>
      </div>
      {isInsertModalOpen && <InsertModal modalHandler={modalHandler} />}
    </Fragment>
  );
};
const InsertModal = ({ modalHandler }) => {
  const { insertTackerHistory } = useTrackerContext();
  const [inputObj, setInputObj] = useState({
    title: "",
    type: "",
    amount: "",
  });

  const onChangeInput = (e) => {
    e.stopPropagation();
    const {
      target: { name, value },
    } = e;

    setInputObj((p) => ({ ...p, [name]: value }));
  };

  const onAddData = () => {
    const res = insertTackerHistory(inputObj);
    if (res) {
      modalHandler();
    }
  };
  return (
    <Modal isOpen={true} onClose={modalHandler}>
      <div className={classes.insertionForm}>
        <h4>Add Transaction</h4>

        <AddonInputField
          name="title"
          type="text"
          onChange={onChangeInput}
          value={inputObj.title}
          placeholder="Title"
          required
        />
        <AddonSelectorField
          name="type"
          onChange={onChangeInput}
          value={inputObj["type"]}
          options={[
            { value: "", text: "Please Select type" },
            { value: "INCOME", text: "Income" },
            { value: "EXPENSE", text: "Expense" },
          ]}
          required
          containerStyle={{ marginTop: "1rem" }}
        />
        <AddonInputField
          name="amount"
          type="number"
          onChange={onChangeInput}
          value={inputObj["amount"]}
          required
          placeholder="Amount"
          containerStyle={{ marginTop: "1rem" }}
        />
        <button className={classes.addbtn} type="button" onClick={onAddData}>
          <PlusIcon />
        </button>
      </div>
    </Modal>
  );
};
export default InsertExpense;
