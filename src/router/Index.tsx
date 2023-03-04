import React from "react";
import Login from "../views/login/Login";
import Home from "../views/home/Home";
import { Route, Routes } from "react-router-dom";
import PrivateApp from "./PrivateApp";
import NotFound from "../views/notFound/NotFound";

const Index: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          localStorage.getItem("user") ? (
            <PrivateApp>
              <Home />
            </PrivateApp>
          ) : (
            <Login />
          )
        }
      ></Route>
      <Route
        path="/home"
        element={
          <PrivateApp>
            {" "}
            <Home />
          </PrivateApp>
        }
      ></Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Index;
