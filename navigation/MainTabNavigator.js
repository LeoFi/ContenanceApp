import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import TestScreen from '../screens/TestScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GreenScreen from "../screens/TestScreen";
import RedScreen from "../screens/LinksScreen";
import YellowScreen from "../screens/SettingsScreen";


const TestTab = createStackNavigator({
  First: TestScreen
});

const LinksTab = createStackNavigator({
  Second: LinksScreen
});

const SettingsTab = createStackNavigator({
  Third: YellowScreen
});

const Tabs = createBottomTabNavigator({
  First: TestScreen,
  Second: LinksScreen,
  Third: SettingsScreen
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let tabName;
        tabName = routeName === 'Green' ? 'home' : 'grid';
        return <Icon name={tabName} size={20} />
      }
    }),
    tabBarOptions: {
      showLabel: false
    },
  });
export default createAppContainer(Tabs);
