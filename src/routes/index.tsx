/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent-props */

import React from "react";

import { Switch } from "react-router-dom";
import Signin from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Equipaments from "../pages/Equipaments/EquipamentList";
import NewEquipaments from "../pages/Equipaments/NewEquipament";
import Category from "../pages/Categories/CategoryList";
import CategoryCreate from "../pages/Categories/NewCategory";

import Route from "./Route";
export default function Supplies() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      {/* <Route path="/signup" component={Signup} /> */}
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/equipaments" exact component={Equipaments} isPrivate />
      <Route path="/equipaments/new" component={NewEquipaments} isPrivate />
      <Route path="/category" exact component={Category} isPrivate />
      <Route path="/category/new" exact component={CategoryCreate} isPrivate />

      {/* <Route path="/preventives" exact component={Preventive} isPrivate />
      <Route
        path="/equipaments/details/:id"
        exact
        component={EquipamentDetails}
        isPrivate
      /> */}
      {/* <Route path="/monitor/:id" exact component={MonitorStart} isPrivate />
      <Route path="/category/new" component={NewCategory} isPrivate />
      <Route path="/supply" exact component={Supply} isPrivate />
      <Route path="/job" exact component={Job} isPrivate /> */}
      {/* <Route path="/repositories/:repository+" component={Repository} /> */}
    </Switch>
  );
}
