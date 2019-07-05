import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { View } from "react-native";
import { HeaderComponent } from "../components/AppComponents";
import registerForPushNotificationsAsync from "../api/registerForPushNotificationsAsync";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { fromRight, fromTop, fromBottom } from "react-navigation-transitions";
import * as Progress from "react-native-progress";

import TestScreen from "../screens/TestScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Exercice_1_Intro_Phase from "../screens/exercices/Exercice_1/Intro_Phase_Observe";
import Exercice_1_Intro from "../screens/exercices/Exercice_1/Intro";
import Exercice_1_1 from "../screens/exercices/Exercice_1/1";
import Exercice_1_2 from "../screens/exercices/Exercice_1/2";
import Exercice_1_3 from "../screens/exercices/Exercice_1/3";
import Exercice_1_4 from "../screens/exercices/Exercice_1/4";
import Exercice_1_5 from "../screens/exercices/Exercice_1/5";
import Exercice_1_Aha from "../screens/exercices/Exercice_1/Aha";
import Exercice_1_Challenge from "../screens/exercices/Exercice_1/Challenge";
import Exercice_1_Congratulations from "../screens/exercices/Exercice_1/Congratulations";

const HomeTab = createStackNavigator(
  {
    Anchor: 
    { 
      screen: TestScreen,
      navigationOptions: 
      {
        header: null,
      }
    },
    Intro_Phase_Observe:
    { 
      screen: Exercice_1_Intro_Phase,
      navigationOptions: 
      {
        cardStyle: { backgroundColor: "#F4F1DE" },
      }
    },
    Exercice_1_Intro: { screen: Exercice_1_Intro },
    Exercice_1_1: { screen: Exercice_1_1 },
    Exercice_1_2: { screen: Exercice_1_2 },
    Exercice_1_3: { screen: Exercice_1_3 },
    Exercice_1_4: { screen: Exercice_1_4 },
    Exercice_1_5: { screen: Exercice_1_5 },
    Exercice_1_Aha: { screen: Exercice_1_Aha },
    Exercice_1_Challenge: { screen: Exercice_1_Challenge },
    Exercice_1_Congratulations: { screen: Exercice_1_Congratulations }
  },
  {
    transitionConfig: () => fromRight(500),
    //cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false,
    },
  }
);

HomeTab.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

const LinksTab = createStackNavigator({
  Second: { screen: LinksScreen }
});

const SettingsTab = createStackNavigator({
  Third: { screen: SettingsScreen }
});

const MainStackTabs = createBottomTabNavigator({
  // First: HomeTab,
  First: HomeTab,
  Second: SettingsTab,
  Third: LinksTab
});

export default createAppContainer(MainStackTabs);
