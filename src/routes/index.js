import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {App} from "../pages/App/App";

export const MainRoutes = () => {
  return <Switch>
    <Route path="/" exact>
      <Redirect to={"/app/dashboard"}/>
    </Route>
    <Route path="/app">
        <App />
    </Route>
  </Switch>;
};
