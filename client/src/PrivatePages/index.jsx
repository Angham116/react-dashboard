import React from 'react';
import { Route } from 'react-router-dom';

import { Layout } from 'antd';

import logo from '../Assets/logo.png';

import {
  Sider,
  Header
} from '../Layout';

import './style.css';

const PrivateRoute = ({
  component: Component,
  rest,
}) => {
  return (
    <Layout>
      <Layout.Sider className="dashboard__sider-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Sider />
      </Layout.Sider>
      <Layout>
        <Header />
        <Layout.Content
          className="dashboard__content-container"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Route component={Component} {...rest}/>
        </Layout.Content>
      </Layout>
    </Layout>
  )
};


export default PrivateRoute;
