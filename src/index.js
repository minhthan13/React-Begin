import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="users" element={<User />} />
      <Route path="admins" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);
