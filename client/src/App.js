import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivatePages from './PrivatePages';
import LoggedOutPages from './LoggedOutRoute';

import {
  Login_Url,
  SignUp_Url,
  Dashboard_Url,
  People_Url,
  Notifications_Url,
  Settings_Url,
  Objectives_Url,
  Meetings_Url,
  Groups_Url,
  Help_Center_Url,
  Add_New_Product,
} from './routes_url';

import {
  Login,
  Signup
} from './LoggedOutPages';
import PageNotFound from './Components/PageNotFound';

import './App.css';

import 'antd/dist/antd.css';

import {
  Dashboard,
  AddNewProduct,
  People,
  Notifications,
  Settings,
  Objectives,
  Meetings,
  Groups,
  HelpCenter,
} from './Components';

class App extends Component {

  render(){
    return (
      <>
      <Router>
        <Switch>
          <LoggedOutPages exact path={Login_Url} component={Login} />
          <LoggedOutPages exact path={SignUp_Url} component={Signup} />
          <PrivatePages exact path={'/'} component={Dashboard} />
          <PrivatePages exact path={Dashboard_Url} component={Dashboard} />
          <PrivatePages exact path={Add_New_Product} component={AddNewProduct} />
          <PrivatePages exact path={People_Url} component={People} />
          <PrivatePages exact path={Notifications_Url} component={Notifications} />
          <PrivatePages exact path={Settings_Url} component={Settings}/>
          <PrivatePages exact path={Objectives_Url} component={Objectives}/>
          <PrivatePages exact path={Groups_Url} component={Groups}/>
          <PrivatePages exact path={Help_Center_Url} component={HelpCenter}/>
          <PrivatePages exact path={Meetings_Url} component={Meetings}/>
          <Route render={() => {
            return <PageNotFound />
          }} />
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
