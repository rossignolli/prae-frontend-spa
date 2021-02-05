/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent-props */

import React from 'react';

import {Switch} from 'react-router-dom';

import Signin from '../pages/SignIn'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Equipaments from '../pages/Equipament'
import NewEquipaments from '../pages/NewEquipament'
import NewCategory from '../pages/NewCategory'
import Category from '../pages/Category'
import Preventive from '../pages/Preventive'



import Route from './Route'
const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup"  component={Signup} />
        <Route path="/dashboard"  component={Dashboard} isPrivate />
        <Route path="/equipaments" exact  component={Equipaments} isPrivate />
        <Route path="/preventives" exact  component={Preventive} isPrivate />
        <Route path="/equipaments/new"   component={NewEquipaments} isPrivate />
        <Route path="/category" exact  component={Category} isPrivate />
        <Route path="/category/new"   component={NewCategory} isPrivate />
        {/* <Route path="/repositories/:repository+" component={Repository} /> */}
    </Switch>
);

export default Routes;
