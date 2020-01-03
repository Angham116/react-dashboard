import React, { Component } from 'react';

import './style.css';
import '../commonStyle.css';

export default class NotificationsHeader extends Component {
  render() {
    return (
      <div className="Notifications__header-container">
        <span className="title">Notifications</span>
      </div>
    )
  }
}
