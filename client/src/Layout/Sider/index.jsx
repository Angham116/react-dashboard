import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


import {
  Dashboard_Url,
  Notifications_Url,
  Settings_Url
} from '../../routes_url';

import { connect } from 'react-redux';

import changeContentAction from '../../store/actions/changeContent';

class Sider extends Component {

  handleChangeContent = content => {
    const { changeContentAction : changeContent } = this.props;
    changeContent(content);
  };

  render() {
    return (
      <>
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
      </>
    )
  }
}

export default connect(null, { changeContentAction })(Sider);
