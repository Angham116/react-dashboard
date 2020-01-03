import React from 'react';

import {
  DashboardHeader,
  NotificationHeader,
  MeetingsHeader,
  SettingsHeader
} from '../index';

const LayoutContent = ({
  component: Component,
}) => {
    switch (Component) {
      case 'Dashboard':
        return <DashboardHeader />
      case 'Settings':
        return <SettingsHeader />
      case 'Notifications':
        return <NotificationHeader />
      // case 'ToDos':
      //   return <ToDos />
      // case 'Objectives':
      //   return <Objectives />
      case 'Meetings':
        return <MeetingsHeader />
      // case 'People':
      //   return <People />
      // case 'Groups':
      // return <Groups />
      // case 'HelpCenter':
      //   return <HelpCenter />
      default:
        return ''
    }
}

export default LayoutContent;

