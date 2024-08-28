import React, { Component, Suspense, lazy } from "react";
import { Spinner } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";



const Login = lazy(() => import("./user-pages/Login"));
const SignUp = lazy(() => import("./user-pages/SignUp"));
const Dashboard = lazy(() => import("./Dashboard/Dasboard"));
const Alltask = lazy(() => import("./AllTask/Alltask"));
const AddTask = lazy(() => import("./AllTask/AddTask"));
const EditTask = lazy(() => import("./AllTask/EditTask"));
const DevCompleted = lazy(() => import("./DevCompleted/DevCompleted"));
const DevReady = lazy(() => import("./DevReady/DevReady"));
const InProgess = lazy(() => import("./InProgess/Inprogess"));
const MyTask = lazy(() => import("./MyTask/MyTask"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        {/* {localStorage?.getItem("token") ? ( */}
          <Switch>
            {/* <Route exact path="/backoffice/dashboard" component={ Dashboard } /> */}

          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/alltask/alltask-management" component={Alltask} />
          <Route path="/alltask/add-task" component={AddTask} />
          <Route path="/alltask/edit-task" component={EditTask} />
          <Route path="/mytask/mytask-management" component={MyTask} />
          <Route path="/devready/devready-management" component={DevReady} />
          <Route path="/inprogess/inprogess-management" component={InProgess} />
          <Route path="/completed/completed-management" component={DevCompleted} />
         
          </Switch>
          {/* {localStorage?.getItem("token") ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/login" />
            )}
       
        {/* ) : (
          <Redirect to="/login" />
        )} */}
      </Suspense>
    );
  }
}

export default AppRoutes;
