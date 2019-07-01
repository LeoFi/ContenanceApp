import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { fromRight, fromTop, fromBottom } from 'react-navigation-transitions';

import TestScreen from '../screens/TestScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Exercice_1_Intro_Phase from '../screens/exercices/Exercice_1/Intro_Phase_Observe';
import Exercice_1_Intro from '../screens/exercices/Exercice_1/Intro';
import Exercice_1_1 from '../screens/exercices/Exercice_1/1';
import Exercice_1_2 from '../screens/exercices/Exercice_1/2';
import Exercice_1_3 from '../screens/exercices/Exercice_1/3';

const HomeTab = createStackNavigator(
  {
    Anchor: { screen: TestScreen },
    Intro_Phase_Observe: { screen: Exercice_1_Intro_Phase },
    Exercice_1_Intro: { screen: Exercice_1_Intro },
    Exercice_1_1: { screen: Exercice_1_1 },
    Exercice_1_2: { screen: Exercice_1_2 },
    Exercice_1_3: { screen: Exercice_1_3 },
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: '#F4F1DE' },
  }
);

HomeTab.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName !== 'Anchor') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};



const LinksTab = createStackNavigator({
  Second: { screen: LinksScreen },
});

const SettingsTab = createStackNavigator({
  Third: { screen: SettingsScreen },
});


const MainStackTabs = createBottomTabNavigator({
  First: HomeTab,
  Second: LinksTab,
  Third: SettingsTab,
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

export default createAppContainer(MainStackTabs);
