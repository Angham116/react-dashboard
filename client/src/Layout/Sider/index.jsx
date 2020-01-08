import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


import {
  Dashboard_Url,
  Notifications_Url,
  Settings_Url,
  Add_New_Product,
  People_Url,
  Meetings_Url,
  Objectives_Url,
  Groups_Url,
  Help_Center_Url
} from '../../routes_url';

import './style.css';
class Sider extends Component {

  render() {
    return (
      <>
        <Menu className="sidebar__container">
          <Menu.Item>
              <Link to={Dashboard_Url}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
              <Link to={Add_New_Product}>Add New Product</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={Objectives_Url}>Objectives</Link>
          </Menu.Item>
          <Menu.Item>
              <Link to={Meetings_Url}>Meetings</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={Notifications_Url}>Notifications</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={People_Url}>People</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={Groups_Url}>Groups</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={Help_Center_Url}>Help Center</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={Settings_Url}>Settings</Link>
          </Menu.Item>
        </Menu>
      </>
    )
  }
}
export default Sider;
