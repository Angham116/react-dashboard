import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashboardLayout from './Layout/DashboardLayout';
import PrivatePages from './PrivatePages';
import LoggedOutPages from './LoggedOutRoute';

import { Login_Url } from './routes_url';

import { Login } from './LoggedOutPages';
import PageNotFound from './Components/PageNotFound';

import './App.css';

import 'antd/dist/antd.css';

class App extends Component {

  render(){
    return (
      <Router>
        <Switch>
          <LoggedOutPages exact path={Login_Url} component={Login} />
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
