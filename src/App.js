// const { default: Header } = require("./Components/Header");
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import History from "./Components/History/History";
import InsertExpense from "./Components/InsertExpense";
import TopBar from "./Components/TopBar";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
//     const getName = window.prompt("Please Enter your name", "");
//     setUsername(getName);
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <TopBar username={username} />
        <InsertExpense />
        <History />
      </div>
    </div>
  );
}

export default App;
