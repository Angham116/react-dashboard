import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
// import { Link } from 'react-dom';

// import Layout from './Layout/DashboardLayout';
import { Layout, Menu } from 'antd';

import './App.css';

import 'antd/dist/antd.css';

import HOC from './Components/HOC';

import {
  Dashboard,
  Settings,
  Notifications,
} from './Components';

import {
  Dashboard_Url,
  Notifications_Url,
  Settings_Url
} from './routes_url';

const { Sider, Header, Content, Footer } = Layout;

function App() {
  return (
    // <div className="App">
    <Router>
      <Layout>
        <Sider className="dashboard__sider-container">
            <Menu>
              <Menu.Item><Link to='/'>Dashboard</Link></Menu.Item>
              <Menu.Item><Link to={Notifications_Url}>Notifications</Link></Menu.Item>
              <Menu.Item><Link to={Settings_Url}>Settings</Link></Menu.Item>
            </Menu>
        </Sider>
        <Layout>
          <Header className="dashboard__header-container">header</Header>
          <Layout>
            <Content
              className="dashboard__content-container"
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="dashboard__content">
              <Router>
                <Switch>
                  <Route exact path={Dashboard_Url}>
                    <HOC component={Dashboard}/>
                  </Route>
                  <Route exact path={Notifications_Url}>
                    <HOC component={Notifications}/>
                  </Route>
                  <Route exact path={Settings_Url}>
                    <HOC component={Settings}/>
                  </Route>
                </Switch>
              </Router>
              </div>
            </Content>
          </Layout>
          <Footer className="dashboard__footer-container">footer</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
