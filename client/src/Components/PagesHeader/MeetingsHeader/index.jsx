import React, { Component } from 'react';
import { Icon, Button } from 'antd';

import './style.css';
import '../commonStyle.css';

export default class MeetingsHeader extends Component {
  render() {
    return (
      <div className="meetings__header-container">
        <div className="meetings__header-left">
          <Icon type="calendar" className="icon" />
          <span className="title">Meetings</span>
        </div>
        <div className="meetings__header-right">
          <Button type="primary" className="btn create__meetings-btn">CREATE MEETING</Button>
        </div>
      </div>
    )
  }
}
