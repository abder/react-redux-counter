import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./reducer";
import Counter from "./Counter";
import "./style.css";

var destination = document.querySelector("#container");

const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <Counter></Counter>
  </Provider>,
  destination
);
