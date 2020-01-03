import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


import {
  Dashboard_Url,
  Notifications_Url,
  Settings_Url,
  ToDos_Url,
  People_Url,
  Meetings_Url,
  Objectives_Url,
  Groups_Url,
  Help_Center_Url
} from '../../routes_url';

import { connect } from 'react-redux';

import changeContentAction from '../../store/actions/changeContent';

import './style.css';
class Sider extends Component {

  handleChangeContent = content => {
    const { changeContentAction : changeContent } = this.props;
    changeContent(content);
  };

  render() {
    return (
      <>
        <Menu className="sidebar__container">
          <Menu.Item
            onClick={() => this.handleChangeContent('Dashboard')}>
              <Link to={Dashboard_Url}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.handleChangeContent('ToDos')}>
              <Link to={ToDos_Url}>ToDos</Link>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.handleChangeContent('Objectives')}>
              <Link to={Objectives_Url}>Objectives</Link>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.handleChangeContent('Meetings')}>
              <Link to={Meetings_Url}>Meetings</Link>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.handleChangeContent('Notifications')}
          >
            <Link to={Notifications_Url}>Notifications</Link>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.handleChangeContent('People')}
          >
            <Link to={People_Url}>People</Link>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.handleChangeContent('Groups')}
          >
            <Link to={Groups_Url}>Groups</Link>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.handleChangeContent('HelpCenter')}
          >
            <Link to={Help_Center_Url}>Help Center</Link>
          </Menu.Item>
          <Menu.Item
            onClick={() => this.handleChangeContent('Settings')}
          >
            <Link to={Settings_Url}>Settings</Link>
          </Menu.Item>
        </Menu>
      </>
    )
  }
}

export default connect(null, { changeContentAction })(Sider);
