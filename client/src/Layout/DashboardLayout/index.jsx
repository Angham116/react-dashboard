import React, { Component } from 'react';

import { Layout } from 'antd';

import './style.css';

const { Sider, Header, Content, Footer } = Layout;

export default class DashboardLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider className="dashboard__sider-container">
          sider
        </Sider>
        <Layout>
          <Header className="dashboard__header-container">header</Header>
          <Content className="dashboard__content-container">
            <div className="dashboard__content">
              content
            </div>
          </Content>
          <Footer className="dashboard__footer-container">footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
