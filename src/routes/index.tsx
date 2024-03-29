/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent-props */

import React from 'react';

import { Switch } from 'react-router-dom';
import Signin from '../pages/Users/SignIn';
import Dashboard from '../pages/Dashboard';
import RecoverPassword from '../pages/Users/RecoverPassword';
import ResendVerification from '../pages/Users/ResendVerification';
import ForgotPassword from '../pages/Users/RecoverPasswordEmail';
// * EQUIPAMENTS ROUTES */
import Equipaments from '../pages/Equipaments/EquipamentList';
import EquipamentsDetails from '../pages/Equipaments/EquipamentsDetails';
import EquipamentEdit from '../pages/Equipaments/EquipamentEdit';
import EquipamentsDetailsPreventive from '../pages/Equipaments/EquipamentsDetailsPreventive';
import EquipamentsDetailsPreventiveAction from '../pages/Equipaments/EquipamentsActionExecute';
import NewEquipaments from '../pages/Equipaments/NewEquipament';
// * CATEGORY ROUTES */
import Category from '../pages/Categories/CategoryList';
import CategoryCreate from '../pages/Categories/NewCategory';
import CategoryId from '../pages/Categories/EditCategory';
// * SUPPLY ROUTES */
import Supply from '../pages/Supplies/SupplyList';
import SupplyNew from '../pages/Supplies/SupplyNew';
import SupplyEdit from '../pages/Supplies/SupplyEdit';
// * BRANDS ROUTES */
import Brand from '../pages/Brands/BrandsList';
import BrandNew from '../pages/Brands/BrandNew';
import BrandEdit from '../pages/Brands/BrandEdit';
// * jobs ROUTES */
import Jobs from '../pages/Jobs/JobsList';
import JobNew from '../pages/Jobs/JobsNew';
import JobEdit from '../pages/Jobs/JobsEdit';
// * user ROUTES */
import Users from '../pages/Users/UserList';
import Route from './Route';
import SignUpPage from '../pages/Users/SignUp';
import AccountConfirmation from '../pages/Users/AccountConfirmation';

export default function Supplies() {
  return (
    <Switch>
      {/* USERS ROUTES */}
      <Route path="/" exact component={Signin} />
      <Route path="/user" exact component={Users} isPrivate />
      <Route path="/accout/confirmation/:verificationCode" exact component={AccountConfirmation} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/recover/:verificationCode" exact component={RecoverPassword} />
      <Route path="/user/resend" exact component={ResendVerification} />
      <Route path="/forgotmypassword" exact component={ForgotPassword} />
      {/* EQUIPAMENTS ROUTES */}
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/equipaments" exact component={Equipaments} isPrivate />
      <Route path="/equipaments/new" component={NewEquipaments} isPrivate />
      <Route path="/equipaments/edit/:id" component={EquipamentEdit} isPrivate />
      <Route path="/equipaments/details/:id" exact component={EquipamentsDetails} isPrivate />
      <Route path="/equipaments/details/preventive/:id" exact component={EquipamentsDetailsPreventive} isPrivate />
      <Route path="/equipaments/details/actions/new/:id/:equipamentId" exact component={EquipamentsDetailsPreventiveAction} isPrivate />
      {/* CATEGORY ROUTES */}
      <Route path="/category" exact component={Category} isPrivate />
      <Route path="/category/new" exact component={CategoryCreate} isPrivate />
      <Route path="/category/edit/:id" exact component={CategoryId} isPrivate />
      {/* SUPPLY ROUTES */}
      <Route path="/supply" exact component={Supply} isPrivate />
      <Route path="/supply/new" exact component={SupplyNew} isPrivate />
      <Route path="/supply/edit/:id" exact component={SupplyEdit} isPrivate />
      {/* BRAND ROUTES */}
      <Route path="/brands" exact component={Brand} isPrivate />
      <Route path="/brands/new" exact component={BrandNew} isPrivate />
      <Route path="/brands/edit/:id" exact component={BrandEdit} isPrivate />
      {/* JOBS ROUTES */}
      <Route path="/job" exact component={Jobs} isPrivate />
      <Route path="/job/new" exact component={JobNew} isPrivate />
      <Route path="/job/edit/:id" exact component={JobEdit} isPrivate />
    </Switch>
  );
}
