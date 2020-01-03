import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout, Breadcrumb } from 'antd';

import './style.css';

import { HOC, Loading } from '../../Components';
import Sidebar from '../Sider';
import PageHeader from '../../Components/CommonComponents/ContentHeader';



// import P

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
                  <>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>
                        <PageHeader component={content}/>
                      </Breadcrumb.Item>
                    </Breadcrumb>
                    <Breadcrumb>
                      <Breadcrumb.Item>
                        <HOC component={content}/>
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </>
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
