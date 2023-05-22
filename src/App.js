import { useDispatch, useSelector } from "react-redux";
import { inceaseCounter, decreaseCounter } from "./redux/action/counterAction";
import "./sass/App.scss";
import MyComponent from "./components/MyComponent";
import React from "react";

const App = () => {
  return <div className="app-container">hello world</div>;
};

export default App;
