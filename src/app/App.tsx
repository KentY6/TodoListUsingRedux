import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import { Main } from "../screens/Main";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
