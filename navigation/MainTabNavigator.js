import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import TestScreen from '../screens/TestScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ExerciseScreen from '../screens/exercises/first';


const TestTab = createStackNavigator({
  First: { screen: TestScreen },
  Exercice: { screen: ExerciseScreen },
});

const LinksTab = createStackNavigator({
  Second: { screen: LinksScreen },
});

const SettingsTab = createStackNavigator({
  Third: { screen: SettingsScreen },
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
      showLabel: true,
      showIcon: false
    },
  });
export default createAppContainer(Tabs);
