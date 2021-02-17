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
import Supply from '../pages/Supply'
import Job from '../pages/JobsPage'
import EquipamentDetails from '../pages/EquipamentsDetails'
import MonitorStart from '../pages/MonitorStart'






import Route from './Route'
import NewBrand from '../pages/NewBrand';
import Brands from '../pages/Brand';
const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup"  component={Signup} />
        <Route path="/dashboard"  component={Dashboard} isPrivate />
        <Route path="/equipaments" exact  component={Equipaments} isPrivate />
        <Route path="/preventives" exact  component={Preventive} isPrivate />
        <Route path="/equipaments/new"   component={NewEquipaments} isPrivate />
        <Route path="/equipaments/details/:id" exact  component={EquipamentDetails} isPrivate />
        <Route path="/monitor/:id" exact  component={MonitorStart} isPrivate />
        <Route path="/category" exact  component={Category} isPrivate />
        <Route path="/category/new"   component={NewCategory} isPrivate />
        <Route path="/supply" exact  component={Supply} isPrivate />
        <Route path="/job" exact  component={Job} isPrivate />
        <Route path="/brands" exact  component={Brands} isPrivate />




        
        {/* <Route path="/repositories/:repository+" component={Repository} /> */}
    </Switch>
);

export default Routes;
