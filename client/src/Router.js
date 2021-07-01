import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//import Customers from "./components/customers/Customers";
import Navbar from "./components/layout/Navbar";

function Router() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
          <Route path="/register">
              <Register />
          </Route>
            <Route path="/login">
               <Login />
            </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
