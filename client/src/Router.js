import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//import Customers from "./components/customers/Customers";
import Navbar from "./components/layout/Navbar";
import Applicant from './Applicant'
import CourseG from './CourseG'
import CList  from "./CList";
import CModel from "./CModel";
import CreateS from "./CreateS";
import Viewsg from "./Viewsg";
import ViewS from "./ViewS";
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

            
              <Route path="/Applicant">
              <Applicant/>
            </Route>
            
            
              <Route path="/CourseG">
              <CourseG/>
            </Route>
            
            
              <Route path="/CList">
              <CList/>
            </Route>
            
            <Route path="/CModel">
              <CModel/>
            </Route>
            
            
            <Route path="/CreateS">
              <CreateS/>
            </Route>

            <Route path="/Viewsg">
              <Viewsg/>
            </Route>
            ViewS

            <Route path="/ViewS">
              <ViewS/>
            </Route>
            
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
