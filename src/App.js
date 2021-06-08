import React from "react";
import { Columns } from "react-bulma-components";
import AllCurrencies from "./components/AllCurrencies.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListOfFav from "./components/ListOfFav";

function App() {
  return (
    <div className="App">
      <Columns>
        <Columns.Column>
          <AllCurrencies />
        </Columns.Column>
        <Columns.Column>
          <ListOfFav />
        </Columns.Column>
      </Columns>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
