import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import TestScreen from '../screens/TestScreen';


const RootStack = createStackNavigator(
  {
    Test: TestScreen,
  },
  {
    initialRouteName: 'Test',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class MainNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}