// const { default: Header } = require("./Components/Header");
import { useEffect } from "react";
import BalanceWrapper from "./Components/BalanceWrapper";
import Header from "./Components/Header";
import History from "./Components/History/History";
import { Layout } from "./Utils";

function App() {
  // const [username] = useState("");

  useEffect(() => {
    //     const getName = window.prompt("Please Enter your name", "");
    //     setUsername(getName);
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* <TopBar username={username} />
        <InsertExpense />
        */}
        <Layout>
          <BalanceWrapper />
          <History />
        </Layout>
      </div>
    </div>
  );
}

export default App;
