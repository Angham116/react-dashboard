import React from 'react';

import {
  Dashboard,
  Settings,
  Notifications,
  ToDos,
  Objectives,
  Meetings,
  People,
  HelpCenter,
  Groups
} from '../index';

const LayoutContent = ({
  component: Component,
}) => {
    switch (Component) {
      case 'Dashboard':
        return <Dashboard />
      case 'Settings':
        return <Settings />
      case 'Notifications':
        return <Notifications />
      case 'ToDos':
        return <ToDos />
      case 'Objectives':
        return <Objectives />
      case 'Meetings':
        return <Meetings />
      case 'People':
        return <People />
      case 'Groups':
      return <Groups />
      case 'HelpCenter':
        return <HelpCenter />
      default:
        return <Dashboard />
    }
}

export default LayoutContent;
