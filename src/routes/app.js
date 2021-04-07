import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ContactForm from "../pages/contact";
import AddContact from "../pages/contact/addContact";

export const AppRoutes = () => {
  return <Switch>
    <Route path="/app" exact>
      <Redirect to={"/app/dashboard"} />
    </Route>
    <Route path="/app/contacts" exact>
      <ContactForm />
    </Route>

    <Route path="/app/add-contacts" exact>
      <AddContact />
    </Route>
  </Switch>
};
