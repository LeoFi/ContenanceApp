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
import Exercice_1_Aha_1 from "../screens/exercices/Exercice_1/Aha_1";
import Exercice_1_Aha_2 from "../screens/exercices/Exercice_1/Aha_2";
import Exercice_1_Challenge from "../screens/exercices/Exercice_1/Challenge";
import Exercice_1_Congratulations from "../screens/exercices/Exercice_1/Congratulations";

const HomeTab = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Intro_Phase_Observe: {
      screen: Exercice_1_Intro_Phase,
      navigationOptions: {
        cardStyle: { backgroundColor: "#A878CE" },
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    Exercice_1_Intro: {
      screen: Exercice_1_Intro,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    Exercice_1_1: {
      screen: Exercice_1_1,
      navigationOptions: {
        header: props => <HeaderComponent progress={0.14} disabledProgress={false} disabledClose={false} {...props} />,
      }
    },
    Exercice_1_2: {
      screen: Exercice_1_2,
      navigationOptions: {
        header: props => <HeaderComponent progress={0.28} disabledProgress={false} disabledClose={false} {...props} />,
      }
    },
    Exercice_1_3: {
      screen: Exercice_1_3,
      navigationOptions: {
        header: props => <HeaderComponent progress={0.42} disabledProgress={false} disabledClose={false} {...props} />,
      }
    },
    Exercice_1_4: {
      screen: Exercice_1_4,
      navigationOptions: {
        header: props => <HeaderComponent progress={0.56} disabledProgress={false} disabledClose={false} {...props} />,
      }
    },
    Exercice_1_Aha_1: {
      screen: Exercice_1_Aha_1,
      navigationOptions: {
        header: props => <HeaderComponent progress={0.7} disabledProgress={false} disabledClose={false} {...props} />,
      }
    },
    Exercice_1_Aha_2: {
      screen: Exercice_1_Aha_2,
      navigationOptions: {
        header: props => <HeaderComponent progress={0.7} disabledProgress={false} disabledClose={false} {...props} />,
      }
    },
    Exercice_1_Challenge: {
      screen: Exercice_1_Challenge,
      navigationOptions: {
        header: props => <HeaderComponent progress={0.84} disabledProgress={false} disabledClose={false} {...props} />,
      }
    },
    Exercice_1_Congratulations: {
      screen: Exercice_1_Congratulations,
      navigationOptions: {
        header: props => <HeaderComponent progress={1} disabledProgress={false} disabledClose={true} {...props} />,
      }
    },
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    transitionConfig: () => fromRight(500),
    //cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
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
