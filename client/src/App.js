import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashboardLayout from './Layout/DashboardLayout';
import PrivatePages from './PrivatePages';
import LoggedOutPages from './LoggedOutRoute';

import {
  Login_Url,
  SignUp_Url,
} from './routes_url';

import {
  Login,
  Signup
} from './LoggedOutPages';
import PageNotFound from './Components/PageNotFound';

import './App.css';

import 'antd/dist/antd.css';

class App extends Component {

  render(){
    return (
      <Router>
        <Switch>
          <LoggedOutPages exact path={Login_Url} component={Login} />
          <LoggedOutPages exact path={SignUp_Url} component={Signup} />
          <PrivatePages exact path='/' component={DashboardLayout}/>
          <Route render={() => {
            return <PageNotFound />
          }} />
        </Switch>
      </Router>
    );
  }
}

export default App;
