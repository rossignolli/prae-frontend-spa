/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent-props */

import React from 'react';

import {Switch} from 'react-router-dom';

import Signin from '../pages/SignIn'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Route from './Route'
const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup"  component={Signup} />
        <Route path="/dashboard"  component={Dashboard} isPrivate />


        {/* <Route path="/repositories/:repository+" component={Repository} /> */}
    </Switch>
);

export default Routes;
