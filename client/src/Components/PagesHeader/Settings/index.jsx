import React, { Component } from 'react';

import './style.css';
import '../commonStyle.css';

export default class SettingsHeader extends Component {
  render() {
    return (
      <div className="settings__header-container">
        <span className="title">Settings</span>
      </div>
    )
  }
}
