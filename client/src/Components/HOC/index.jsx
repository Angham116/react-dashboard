import React from 'react';

import {
  Dashboard,
  Settings,
  Notifications,
} from '../index';

const LayoutContent = ({
  component: Component,
}) => {
    switch (Component) {
      case 'Dashboard':
        return (
          <Dashboard />
        )
      case 'Settings':
        return <Settings />
      case 'Notifications':
          return <Notifications />
      default:
        return <Dashboard />
    }
}

export default LayoutContent;
