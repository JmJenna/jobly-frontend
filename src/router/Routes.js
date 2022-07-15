import React from 'react';
import {Switch, Route, Redirect } from "react-router-dom";
import Homepage from '../homepage/Homepage'
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import CompanyList from '../companies/CompanyList';
import JobList from '../jobs/JobList';
import CompanyDetail from '../companies/CompanyDetail';
import ProfileForm from '../profile/ProfileForm';
import PrivacyRoute from './PrivacyRoute';


function Routes({login , signup}){
return(
    <div>

        <Switch>

            <Route exact path="/">
                <Homepage />
            </Route>

            <Route exact path="/login">
                <Login login={login}/>
            </Route>

            <Route exact path="/signup">
                <Signup signup={signup}/>
            </Route>

            <PrivacyRoute exact path="/companies">
                <CompanyList />
            </PrivacyRoute>

            <PrivacyRoute exact path="/companies/:handle">
                <CompanyDetail />
            </PrivacyRoute>

            <PrivacyRoute exact path="/jobs">
                <JobList />
            </PrivacyRoute>

            <PrivacyRoute exact path="/profile">
                <ProfileForm />
            </PrivacyRoute>

            <Redirect to="/" />
        </Switch>

    </div>
)
}

export default Routes;