import React, { Component } from 'react';

import DashboardLayout from './Layout/DashboardLayout';

import './App.css';

import 'antd/dist/antd.css';


class App extends Component {

  render(){
    const { content, loading } = this.props;
    return (
      <DashboardLayout />
    );
  }
}

export default App;
