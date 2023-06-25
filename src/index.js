import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/Home/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import Dashboard from "./components/Admin/Content/Dashboard";
import Login from "./components/Auth/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<User />} />
      </Route>
      <Route path="admins" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path="manage-users" element={<ManageUser />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
