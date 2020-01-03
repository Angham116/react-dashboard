import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Layout } from 'antd';

import './style.css';

import { HOC, Loading } from '../../Components';
import Sidebar from '../Sider';

import { connect } from 'react-redux';

const { Sider, Header, Content, Footer } = Layout;

class DashboardLayout extends Component {

  render(){
    const { content, loading } = this.props;
    return (
      <Router>
        <Layout>
          <Sider className="dashboard__sider-container">
            <Sidebar />
          </Sider>
          <Layout>
            <Header className="dashboard__header-container">header</Header>
            <Layout>
              <Content
                className="dashboard__content-container"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <div className="dashboard__content">
                {loading ? 
                  <Loading /> 
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

export default connect(mapStateToProps)(DashboardLayout);
