import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { Link } from 'react-dom';

// import Layout from './Layout/DashboardLayout';
import { Layout, Menu, Spin } from 'antd';

import './App.css';

import 'antd/dist/antd.css';

import HOC from './Components/HOC';

import {
  Dashboard_Url,
  Notifications_Url,
  Settings_Url
} from './routes_url';

import { connect } from 'react-redux';

import changeContentAction from './store/actions/changeContent';



const { Sider, Header, Content, Footer } = Layout;

class App extends Component {

  handleChangeContent = content => {
    const { changeContentAction : changeContent } = this.props;
    changeContent(content);
  }

  render(){
    const { content, loading } = this.props;
    return (
      <Router>
        <Layout>
          <Sider className="dashboard__sider-container">
              <Menu>
                <Menu.Item
                  onClick={() => this.handleChangeContent('Dashboard')}>
                    <Link to={Dashboard_Url}>Dashboard</Link>
                </Menu.Item>
                <Menu.Item
                  onClick={() => this.handleChangeContent('Notifications')}
                >
                  <Link to={Notifications_Url}>Notifications</Link>
                </Menu.Item>
                <Menu.Item
                  onClick={() => this.handleChangeContent('Settings')}
                >
                  <Link to={Settings_Url}>Settings</Link>
                </Menu.Item>
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
                {loading ? 
                  <Spin /> 
                :
                <Router>
                  {/* <Switch> */}
                      <HOC component={content}/>
                  {/* </Switch> */}
                </Router>
              }
                </div>
              </Content>
            </Layout>
            <Footer className="dashboard__footer-container">footer</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const { content, loading } = state.changeContent;
  return {
    content,
    loading,
  }
}

export default connect(mapStateToProps, { changeContentAction })(App);
