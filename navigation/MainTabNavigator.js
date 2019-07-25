import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import { View } from "react-native";
import { HeaderComponent } from "../components/AppComponents";
import registerForPushNotificationsAsync from "../api/registerForPushNotificationsAsync";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { fromRight, fromTop, fromBottom } from "react-navigation-transitions";
import * as Progress from "react-native-progress";
import TabBar from "../components/TabBar";
import JourneyHeaderTabBar from "../components/JourneyHeaderTabBar";
import HeaderTabBar from "../components/HeaderTabBar";

import TestScreen from "../screens/TestScreen";

import ObserveScreen from "../screens/phases/ObserveScreen";
import ReflectScreen from "../screens/phases/ReflectScreen";
import VisionScreen from "../screens/phases/VisionScreen";
import PlanScreen from "../screens/phases/PlanScreen";
import SupportScreen from "../screens/phases/SupportScreen";

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

import Exercice_2_Intro from "../screens/exercices/Exercice_2/Intro";
import Exercice_2_1 from "../screens/exercices/Exercice_2/1";
import Exercice_2_Aha_1 from "../screens/exercices/Exercice_2/Aha_1";
import Exercice_2_Aha_2 from "../screens/exercices/Exercice_2/Aha_2";
import Exercice_2_Challenge from "../screens/exercices/Exercice_2/Challenge";
import Exercice_2_Congratulations from "../screens/exercices/Exercice_2/Congratulations";

import Exercice_3_Intro from "../screens/exercices/Exercice_3/Intro";
import Exercice_3_1 from "../screens/exercices/Exercice_3/1";
import Exercice_3_2 from "../screens/exercices/Exercice_3/2";
import Exercice_3_2_Less2 from "../screens/exercices/Exercice_3/2_Less2";
import Exercice_3_2_2to5 from "../screens/exercices/Exercice_3/2_2to5";
import Exercice_3_2_More5 from "../screens/exercices/Exercice_3/2_More5";
import Exercice_3_3 from "../screens/exercices/Exercice_3/3";
import Exercice_3_4 from "../screens/exercices/Exercice_3/4";
import Exercice_3_5 from "../screens/exercices/Exercice_3/5";
import Exercice_3_6 from "../screens/exercices/Exercice_3/6";
import Exercice_3_7 from "../screens/exercices/Exercice_3/7";
import Exercice_3_8 from "../screens/exercices/Exercice_3/8";
import Exercice_3_Aha_1 from "../screens/exercices/Exercice_3/Aha_1";
import Exercice_3_Challenge from "../screens/exercices/Exercice_3/Challenge";
import Exercice_3_Congratulations from "../screens/exercices/Exercice_3/Congratulations";

import Exercice_4_Intro from "../screens/exercices/Exercice_4/Intro";
import Exercice_4_1 from "../screens/exercices/Exercice_4/1";
import Exercice_4_Aha_1 from "../screens/exercices/Exercice_4/Aha_1";
import Exercice_4_Aha_2 from "../screens/exercices/Exercice_4/Aha_2";
import Exercice_4_Challenge from "../screens/exercices/Exercice_4/Challenge";
import Exercice_4_Congratulations from "../screens/exercices/Exercice_4/Congratulations";

import Exercice_5_Intro_Phase from "../screens/exercices/Exercice_5/Intro_Phase_Reflect";
import Exercice_5_Intro from "../screens/exercices/Exercice_5/Intro";
import Exercice_5_1 from "../screens/exercices/Exercice_5/1";
import Exercice_5_2 from "../screens/exercices/Exercice_5/2";
import Exercice_5_3 from "../screens/exercices/Exercice_5/3";
import Exercice_5_4 from "../screens/exercices/Exercice_5/4";
import Exercice_5_Aha_1 from "../screens/exercices/Exercice_5/Aha_1";
import Exercice_5_Aha_2 from "../screens/exercices/Exercice_5/Aha_2";
import Exercice_5_Challenge from "../screens/exercices/Exercice_5/Challenge";
import Exercice_5_Congratulations from "../screens/exercices/Exercice_5/Congratulations";

import Exercice_6_Intro from "../screens/exercices/Exercice_6/Intro";
import Exercice_6_1 from "../screens/exercices/Exercice_6/1";
import Exercice_6_Aha_1 from "../screens/exercices/Exercice_6/Aha_1";
import Exercice_6_Aha_2 from "../screens/exercices/Exercice_6/Aha_2";
import Exercice_6_Aha_3 from "../screens/exercices/Exercice_6/Aha_3";
import Exercice_6_Challenge from "../screens/exercices/Exercice_6/Challenge";
import Exercice_6_Congratulations from "../screens/exercices/Exercice_6/Congratulations";

import Exercice_7_Intro from "../screens/exercices/Exercice_7/Intro";
import Exercice_7_1 from "../screens/exercices/Exercice_7/1";
import Exercice_7_Aha_1 from "../screens/exercices/Exercice_7/Aha_1";
import Exercice_7_Aha_2 from "../screens/exercices/Exercice_7/Aha_2";
import Exercice_7_Aha_3 from "../screens/exercices/Exercice_7/Aha_3";
import Exercice_7_Challenge from "../screens/exercices/Exercice_7/Challenge";
import Exercice_7_Congratulations from "../screens/exercices/Exercice_7/Congratulations";

import Exercice_8_Intro from "../screens/exercices/Exercice_8/Intro";
import Exercice_8_1 from "../screens/exercices/Exercice_8/1";
import Exercice_8_Aha_1 from "../screens/exercices/Exercice_8/Aha_1";
import Exercice_8_Aha_2 from "../screens/exercices/Exercice_8/Aha_2";
import Exercice_8_Aha_3 from "../screens/exercices/Exercice_8/Aha_3";
import Exercice_8_Challenge from "../screens/exercices/Exercice_8/Challenge";
import Exercice_8_Congratulations from "../screens/exercices/Exercice_8/Congratulations";

import Exercice_9_Intro_Phase from "../screens/exercices/Exercice_9/Intro_Phase_Vision";
import Exercice_9_Intro from "../screens/exercices/Exercice_9/Intro";
import Exercice_9_1 from "../screens/exercices/Exercice_9/1";
import Exercice_9_2 from "../screens/exercices/Exercice_9/2";
import Exercice_9_3 from "../screens/exercices/Exercice_9/3";
import Exercice_9_4 from "../screens/exercices/Exercice_9/4";
import Exercice_9_Aha_1 from "../screens/exercices/Exercice_9/Aha_1";
import Exercice_9_Challenge from "../screens/exercices/Exercice_9/Challenge";
import Exercice_9_Congratulations from "../screens/exercices/Exercice_9/Congratulations";

import Exercice_10_Intro from "../screens/exercices/Exercice_10/Intro";
import Exercice_10_1 from "../screens/exercices/Exercice_10/1";
import Exercice_10_Aha_1 from "../screens/exercices/Exercice_10/Aha_1";
import Exercice_10_Aha_2 from "../screens/exercices/Exercice_10/Aha_2";
import Exercice_10_Challenge from "../screens/exercices/Exercice_10/Challenge";
import Exercice_10_Congratulations from "../screens/exercices/Exercice_10/Congratulations";

import Exercice_11_Intro from "../screens/exercices/Exercice_11/Intro";
import Exercice_11_1 from "../screens/exercices/Exercice_11/1";
import Exercice_11_Aha_1 from "../screens/exercices/Exercice_11/Aha_1";
import Exercice_11_Aha_2 from "../screens/exercices/Exercice_11/Aha_2";
import Exercice_11_Challenge from "../screens/exercices/Exercice_11/Challenge";
import Exercice_11_Congratulations from "../screens/exercices/Exercice_11/Congratulations";

import Exercice_12_Intro from "../screens/exercices/Exercice_12/Intro";
import Exercice_12_1 from "../screens/exercices/Exercice_12/1";
import Exercice_12_Aha_1 from "../screens/exercices/Exercice_12/Aha_1";
import Exercice_12_Challenge from "../screens/exercices/Exercice_12/Challenge";
import Exercice_12_Congratulations from "../screens/exercices/Exercice_12/Congratulations";

import Exercice_13_Intro_Phase from "../screens/exercices/Exercice_13/Intro_Phase_Plan";
import Exercice_13_Intro from "../screens/exercices/Exercice_13/Intro";
import Exercice_13_1 from "../screens/exercices/Exercice_13/1";
import Exercice_13_2 from "../screens/exercices/Exercice_13/2";
import Exercice_13_3 from "../screens/exercices/Exercice_13/3";
import Exercice_13_4 from "../screens/exercices/Exercice_13/4";
import Exercice_13_Aha_1 from "../screens/exercices/Exercice_13/Aha_1";
import Exercice_13_Aha_2 from "../screens/exercices/Exercice_13/Aha_2";
import Exercice_13_Challenge from "../screens/exercices/Exercice_13/Challenge";
import Exercice_13_Congratulations from "../screens/exercices/Exercice_13/Congratulations";

import Exercice_14_Intro from "../screens/exercices/Exercice_14/Intro";
import Exercice_14_1 from "../screens/exercices/Exercice_14/1";
import Exercice_14_Aha_1 from "../screens/exercices/Exercice_14/Aha_1";
import Exercice_14_Challenge from "../screens/exercices/Exercice_14/Challenge";
import Exercice_14_Congratulations from "../screens/exercices/Exercice_14/Congratulations";

import Exercice_15_Intro from "../screens/exercices/Exercice_15/Intro";
import Exercice_15_1 from "../screens/exercices/Exercice_15/1";
import Exercice_15_Aha_1 from "../screens/exercices/Exercice_15/Aha_1";
import Exercice_15_Aha_2 from "../screens/exercices/Exercice_15/Aha_2";
import Exercice_15_Challenge from "../screens/exercices/Exercice_15/Challenge";
import Exercice_15_Congratulations from "../screens/exercices/Exercice_15/Congratulations";

import Exercice_16_Intro from "../screens/exercices/Exercice_16/Intro";
import Exercice_16_1 from "../screens/exercices/Exercice_16/1";
import Exercice_16_Aha_1 from "../screens/exercices/Exercice_16/Aha_1";
import Exercice_16_Aha_2 from "../screens/exercices/Exercice_16/Aha_2";
import Exercice_16_Challenge from "../screens/exercices/Exercice_16/Challenge";
import Exercice_16_Congratulations from "../screens/exercices/Exercice_16/Congratulations";

import Exercice_17_Intro_Phase from "../screens/exercices/Exercice_17/Intro_Phase_Support";
import Exercice_17_Intro from "../screens/exercices/Exercice_17/Intro";
import Exercice_17_1 from "../screens/exercices/Exercice_17/1";
import Exercice_17_2 from "../screens/exercices/Exercice_17/2";
import Exercice_17_3 from "../screens/exercices/Exercice_17/3";
import Exercice_17_4 from "../screens/exercices/Exercice_17/4";
import Exercice_17_Aha_1 from "../screens/exercices/Exercice_17/Aha_1";
import Exercice_17_Aha_2 from "../screens/exercices/Exercice_17/Aha_2";
import Exercice_17_Challenge from "../screens/exercices/Exercice_17/Challenge";
import Exercice_17_Congratulations from "../screens/exercices/Exercice_17/Congratulations";

import Exercice_18_Intro from "../screens/exercices/Exercice_18/Intro";
import Exercice_18_1 from "../screens/exercices/Exercice_18/1";
import Exercice_18_Aha_1 from "../screens/exercices/Exercice_18/Aha_1";
import Exercice_18_Challenge from "../screens/exercices/Exercice_18/Challenge";
import Exercice_18_Congratulations from "../screens/exercices/Exercice_18/Congratulations";

import Exercice_19_Intro from "../screens/exercices/Exercice_19/Intro";
import Exercice_19_1 from "../screens/exercices/Exercice_19/1";
import Exercice_19_Aha_1 from "../screens/exercices/Exercice_19/Aha_1";
import Exercice_19_Challenge from "../screens/exercices/Exercice_19/Challenge";
import Exercice_19_Congratulations from "../screens/exercices/Exercice_19/Congratulations";

import Exercice_20_Intro from "../screens/exercices/Exercice_20/Intro";
import Exercice_20_1 from "../screens/exercices/Exercice_20/1";
import Exercice_20_Aha_1 from "../screens/exercices/Exercice_20/Aha_1";
import Exercice_20_Aha_2 from "../screens/exercices/Exercice_20/Aha_2";
import Exercice_20_Aha_3 from "../screens/exercices/Exercice_20/Aha_3";
import Exercice_20_Aha_4 from "../screens/exercices/Exercice_20/Aha_4";
import Exercice_20_Challenge from "../screens/exercices/Exercice_20/Challenge";
import Exercice_20_Congratulations from "../screens/exercices/Exercice_20/Congratulations";

// import Exercice_21_Intro from "../screens/exercices/Exercice_21/Intro";
// import Exercice_21_1 from "../screens/exercices/Exercice_21/1";
// import Exercice_21_Aha_1 from "../screens/exercices/Exercice_21/Aha_1";
// import Exercice_21_Challenge from "../screens/exercices/Exercice_21/Challenge";
// import Exercice_21_Congratulations from "../screens/exercices/Exercice_21/Congratulations";

import Intro_Screen_PM1 from "../screens/questionnaires/PM1/Intro_Screen_PM1";
import PSU_Screen_PM1 from "../screens/questionnaires/PM1/PSU_Screen_PM1";
import SUE_Screen_PM1 from "../screens/questionnaires/PM1/SUE_Screen_PM1";
import MFSU_Screen_PM1 from "../screens/questionnaires/PM1/MFSU_Screen_PM1";
import PSF_Screen_PM1 from "../screens/questionnaires/PM1/PSF_Screen_PM1";
import TRP_Screen_PM1 from "../screens/questionnaires/PM1/TRP_Screen_PM1";
import HS_Screen_PM1 from "../screens/questionnaires/PM1/HS_Screen_PM1";
import IN_Screen_PM1 from "../screens/questionnaires/PM1/IN_Screen_PM1";
import AP_Screen_PM1 from "../screens/questionnaires/PM1/AP_Screen_PM1";
import AC_Screen_PM1 from "../screens/questionnaires/PM1/AC_Screen_PM1";
import SE_Screen_PM1 from "../screens/questionnaires/PM1/SE_Screen_PM1";
import CE_Screen_PM1 from "../screens/questionnaires/PM1/CE_Screen_PM1";
import Closing_Screen_PM1 from "../screens/questionnaires/PM1/Closing_Screen_PM1";

import Intro_Screen_PM2 from "../screens/questionnaires/PM2/Intro_Screen_PM2";
import PSU_Screen_PM2 from "../screens/questionnaires/PM2/PSU_Screen_PM2";
import SUE_Screen_PM2 from "../screens/questionnaires/PM2/SUE_Screen_PM2";
import MFSU_Screen_PM2 from "../screens/questionnaires/PM2/MFSU_Screen_PM2";
import PSF_Screen_PM2 from "../screens/questionnaires/PM2/PSF_Screen_PM2";
import TRP_Screen_PM2 from "../screens/questionnaires/PM2/TRP_Screen_PM2";
import HS_Screen_PM2 from "../screens/questionnaires/PM2/HS_Screen_PM2";
import IN_Screen_PM2 from "../screens/questionnaires/PM2/IN_Screen_PM2";
import AP_Screen_PM2 from "../screens/questionnaires/PM2/AP_Screen_PM2";
import AC_Screen_PM2 from "../screens/questionnaires/PM2/AC_Screen_PM2";
import SE_Screen_PM2 from "../screens/questionnaires/PM2/SE_Screen_PM2";
import CE_Screen_PM2 from "../screens/questionnaires/PM2/CE_Screen_PM2";
import Closing_Screen_PM2 from "../screens/questionnaires/PM2/Closing_Screen_PM2";

import Intro_Screen_PM3 from "../screens/questionnaires/PM3/Intro_Screen_PM3";
import PSU_Screen_PM3 from "../screens/questionnaires/PM3/PSU_Screen_PM3";
import SUE_Screen_PM3 from "../screens/questionnaires/PM3/SUE_Screen_PM3";
import MFSU_Screen_PM3 from "../screens/questionnaires/PM3/MFSU_Screen_PM3";
import PSF_Screen_PM3 from "../screens/questionnaires/PM3/PSF_Screen_PM3";
import TRP_Screen_PM3 from "../screens/questionnaires/PM3/TRP_Screen_PM3";
import HS_Screen_PM3 from "../screens/questionnaires/PM3/HS_Screen_PM3";
import IN_Screen_PM3 from "../screens/questionnaires/PM3/IN_Screen_PM3";
import AP_Screen_PM3 from "../screens/questionnaires/PM3/AP_Screen_PM3";
import AC_Screen_PM3 from "../screens/questionnaires/PM3/AC_Screen_PM3";
import SE_Screen_PM3 from "../screens/questionnaires/PM3/SE_Screen_PM3";
import CE_Screen_PM3 from "../screens/questionnaires/PM3/CE_Screen_PM3";
import Closing_Screen_PM3 from "../screens/questionnaires/PM3/Closing_Screen_PM3";

import Intro_Screen_PM4 from "../screens/questionnaires/PM4/Intro_Screen_PM4";
import PSU_Screen_PM4 from "../screens/questionnaires/PM4/PSU_Screen_PM4";
import SUE_Screen_PM4 from "../screens/questionnaires/PM4/SUE_Screen_PM4";
import MFSU_Screen_PM4 from "../screens/questionnaires/PM4/MFSU_Screen_PM4";
import PSF_Screen_PM4 from "../screens/questionnaires/PM4/PSF_Screen_PM4";
import TRP_Screen_PM4 from "../screens/questionnaires/PM4/TRP_Screen_PM4";
import HS_Screen_PM4 from "../screens/questionnaires/PM4/HS_Screen_PM4";
import IN_Screen_PM4 from "../screens/questionnaires/PM4/IN_Screen_PM4";
import AP_Screen_PM4 from "../screens/questionnaires/PM4/AP_Screen_PM4";
import AC_Screen_PM4 from "../screens/questionnaires/PM4/AC_Screen_PM4";
import SE_Screen_PM4 from "../screens/questionnaires/PM4/SE_Screen_PM4";
import CE_Screen_PM4 from "../screens/questionnaires/PM4/CE_Screen_PM4";
import Closing_Screen_PM4 from "../screens/questionnaires/PM4/Closing_Screen_PM4";

import Intro_Screen_PM5 from "../screens/questionnaires/PM5/Intro_Screen_PM5";
import PSU_Screen_PM5 from "../screens/questionnaires/PM5/PSU_Screen_PM5";
import SUE_Screen_PM5 from "../screens/questionnaires/PM5/SUE_Screen_PM5";
import MFSU_Screen_PM5 from "../screens/questionnaires/PM5/MFSU_Screen_PM5";
import PSF_Screen_PM5 from "../screens/questionnaires/PM5/PSF_Screen_PM5";
import TRP_Screen_PM5 from "../screens/questionnaires/PM5/TRP_Screen_PM5";
import HS_Screen_PM5 from "../screens/questionnaires/PM5/HS_Screen_PM5";
import IN_Screen_PM5 from "../screens/questionnaires/PM5/IN_Screen_PM5";
import AP_Screen_PM5 from "../screens/questionnaires/PM5/AP_Screen_PM5";
import AC_Screen_PM5 from "../screens/questionnaires/PM5/AC_Screen_PM5";
import SE_Screen_PM5 from "../screens/questionnaires/PM5/SE_Screen_PM5";
import CE_Screen_PM5 from "../screens/questionnaires/PM5/CE_Screen_PM5";
import Closing_Screen_PM5 from "../screens/questionnaires/PM5/Closing_Screen_PM5";

const Exercice1 = createStackNavigator(
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
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    },
    Exercice_1_Intro: {
      screen: Exercice_1_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_1_1: {
      screen: Exercice_1_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_1_2: {
      screen: Exercice_1_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_1_3: {
      screen: Exercice_1_3,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_1_4: {
      screen: Exercice_1_4,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_1_Aha_1: {
      screen: Exercice_1_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={5 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_1_Aha_2: {
      screen: Exercice_1_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={6 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_1_Challenge: {
      screen: Exercice_1_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={7 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_1_Congratulations: {
      screen: Exercice_1_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    //cardStyle: { backgroundColor: "#{"#F4F1DE"}" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice2 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_2_Intro: {
      screen: Exercice_2_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_2_1: {
      screen: Exercice_2_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_2_Aha_1: {
      screen: Exercice_2_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_2_Aha_2: {
      screen: Exercice_2_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_2_Challenge: {
      screen: Exercice_2_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_2_Congratulations: {
      screen: Exercice_2_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice3 = createStackNavigator(
{
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_3_Intro: {
      screen: Exercice_3_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_3_1: {
      screen: Exercice_3_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_2: {
      screen: Exercice_3_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_2_Less2: {
      screen: Exercice_3_2_Less2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_2_2to5: {
      screen: Exercice_3_2_2to5,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_2_More5: {
      screen: Exercice_3_2_More5,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_3: {
      screen: Exercice_3_3,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_4: {
      screen: Exercice_3_4,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={5 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_5: {
      screen: Exercice_3_5,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={6 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_6: {
      screen: Exercice_3_6,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={7 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_7: {
      screen: Exercice_3_7,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={8 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_8: {
      screen: Exercice_3_8,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={9 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_Aha_1: {
      screen: Exercice_3_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={10 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_Challenge: {
      screen: Exercice_3_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={11 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_3_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_3_Congratulations: {
      screen: Exercice_3_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice4 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_4_Intro: {
      screen: Exercice_4_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_4_1: {
      screen: Exercice_4_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_4_Aha_1: {
      screen: Exercice_4_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_4_Aha_2: {
      screen: Exercice_4_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_4_Challenge: {
      screen: Exercice_4_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_4_Congratulations: {
      screen: Exercice_4_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    },
    Intro_Screen_PM1: {
      screen: Intro_Screen_PM1,
      navigationOptions: {
        header: null
      }
    },
    PSU_Screen_PM1: {
      screen: PSU_Screen_PM1,
      navigationOptions: {
        header: null
      }
    },
    SUE_Screen_PM1: {
      screen: SUE_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    MFSU_Screen_PM1: {
      screen: MFSU_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    PSF_Screen_PM1: {
      screen: PSF_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={1/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    TRP_Screen_PM1: {
      screen: TRP_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={2/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    HS_Screen_PM1: {
      screen: HS_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={3/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    IN_Screen_PM1: {
      screen: IN_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={4/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AP_Screen_PM1: {
      screen: AP_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={5/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AC_Screen_PM1: {
      screen: AC_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={6/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    SE_Screen_PM1: {
      screen: SE_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    CE_Screen_PM1: {
      screen: CE_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    Closing_Screen_PM1: {
      screen: Closing_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const PM1_Stack = createStackNavigator(
  {
    PSU_Screen_PM1: {
      screen: PSU_Screen_PM1,
      navigationOptions: {
        header: null
      }
    },
    SUE_Screen_PM1: {
      screen: SUE_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    PSF_Screen_PM1: {
      screen: PSF_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={1/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    TRP_Screen_PM1: {
      screen: TRP_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={2/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    HS_Screen_PM1: {
      screen: HS_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={3/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    IN_Screen_PM1: {
      screen: IN_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={4/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AP_Screen_PM1: {
      screen: AP_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={5/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AC_Screen_PM1: {
      screen: AC_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={6/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    SE_Screen_PM1: {
      screen: SE_Screen_PM1,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    }
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

const Exercice5 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Intro_Phase_Reflect: {
      screen: Exercice_5_Intro_Phase,
      navigationOptions: {
        cardStyle: { backgroundColor: "#A878CE" },
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    },
    Exercice_5_Intro: {
      screen: Exercice_5_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_5_1: {
      screen: Exercice_5_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_2: {
      screen: Exercice_5_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_3: {
      screen: Exercice_5_3,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_4: {
      screen: Exercice_5_4,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_Aha_1: {
      screen: Exercice_5_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={5 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_Aha_2: {
      screen: Exercice_5_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={6 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_Challenge: {
      screen: Exercice_5_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={7 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_Congratulations: {
      screen: Exercice_5_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
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

const Exercice6 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_6_Intro: {
      screen: Exercice_6_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_6_1: {
      screen: Exercice_6_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_Aha_1: {
      screen: Exercice_6_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_Aha_2: {
      screen: Exercice_6_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_Aha_3: {
      screen: Exercice_6_Aha_3,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_Challenge: {
      screen: Exercice_6_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_Congratulations: {
      screen: Exercice_6_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice7 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_7_Intro: {
      screen: Exercice_7_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_7_1: {
      screen: Exercice_7_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_Aha_1: {
      screen: Exercice_7_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_Aha_2: {
      screen: Exercice_7_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_Aha_3: {
      screen: Exercice_7_Aha_3,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_Challenge: {
      screen: Exercice_7_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_Congratulations: {
      screen: Exercice_7_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice8 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_8_Intro: {
      screen: Exercice_8_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_8_1: {
      screen: Exercice_8_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_8_Aha_1: {
      screen: Exercice_8_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_8_Aha_2: {
      screen: Exercice_8_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_8_Aha_3: {
      screen: Exercice_8_Aha_3,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_8_Challenge: {
      screen: Exercice_8_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_8_Congratulations: {
      screen: Exercice_8_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    },
    Intro_Screen_PM2: {
      screen: Intro_Screen_PM2,
      navigationOptions: {
        header: null
      }
    },
    PSU_Screen_PM2: {
      screen: PSU_Screen_PM2,
      navigationOptions: {
        header: null
      }
    },
    SUE_Screen_PM2: {
      screen: SUE_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    MFSU_Screen_PM2: {
      screen: MFSU_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    PSF_Screen_PM2: {
      screen: PSF_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={1/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    TRP_Screen_PM2: {
      screen: TRP_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={2/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    HS_Screen_PM2: {
      screen: HS_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={3/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    IN_Screen_PM2: {
      screen: IN_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={4/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AP_Screen_PM2: {
      screen: AP_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={5/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AC_Screen_PM2: {
      screen: AC_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={6/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    SE_Screen_PM2: {
      screen: SE_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    CE_Screen_PM2: {
      screen: CE_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    Closing_Screen_PM2: {
      screen: Closing_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const PM2_Stack = createStackNavigator(
  {
    PSU_Screen_PM2: {
      screen: PSU_Screen_PM2,
      navigationOptions: {
        header: null
      }
    },
    SUE_Screen_PM2: {
      screen: SUE_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    PSF_Screen_PM2: {
      screen: PSF_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={1/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    TRP_Screen_PM2: {
      screen: TRP_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={2/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    HS_Screen_PM2: {
      screen: HS_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={3/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    IN_Screen_PM2: {
      screen: IN_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={4/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AP_Screen_PM2: {
      screen: AP_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={5/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AC_Screen_PM2: {
      screen: AC_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={6/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    SE_Screen_PM2: {
      screen: SE_Screen_PM2,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    }
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

const Exercice9 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Intro_Phase_Vision: {
      screen: Exercice_9_Intro_Phase,
      navigationOptions: {
        cardStyle: { backgroundColor: "#A878CE" },
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    },
    Exercice_9_Intro: {
      screen: Exercice_9_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_9_1: {
      screen: Exercice_9_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_2: {
      screen: Exercice_9_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_3: {
      screen: Exercice_9_3,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_4: {
      screen: Exercice_9_4,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_Aha_1: {
      screen: Exercice_9_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={5 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_Challenge: {
      screen: Exercice_9_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={7 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_Congratulations: {
      screen: Exercice_9_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
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

const Exercice10 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_10_Intro: {
      screen: Exercice_10_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_10_1: {
      screen: Exercice_10_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_Aha_1: {
      screen: Exercice_10_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_Aha_2: {
      screen: Exercice_10_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_Challenge: {
      screen: Exercice_10_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_Congratulations: {
      screen: Exercice_10_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice11 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_11_Intro: {
      screen: Exercice_11_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_11_1: {
      screen: Exercice_11_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_Aha_1: {
      screen: Exercice_11_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_Aha_2: {
      screen: Exercice_11_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_Challenge: {
      screen: Exercice_11_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_Congratulations: {
      screen: Exercice_11_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice12 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_12_Intro: {
      screen: Exercice_12_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_12_1: {
      screen: Exercice_12_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_12_Aha_1: {
      screen: Exercice_12_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_12_Challenge: {
      screen: Exercice_12_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_12_Congratulations: {
      screen: Exercice_12_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const PM3_Stack = createStackNavigator(
  {
    PSU_Screen_PM3: {
      screen: PSU_Screen_PM3,
      navigationOptions: {
        header: null
      }
    },
    SUE_Screen_PM3: {
      screen: SUE_Screen_PM3,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    PSF_Screen_PM3: {
      screen: PSF_Screen_PM3,
      navigationOptions: {
        header: props => <HeaderComponent progress={1/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    TRP_Screen_PM3: {
      screen: TRP_Screen_PM3,
      navigationOptions: {
        header: props => <HeaderComponent progress={2/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    HS_Screen_PM3: {
      screen: HS_Screen_PM3,
      navigationOptions: {
        header: props => <HeaderComponent progress={3/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    IN_Screen_PM3: {
      screen: IN_Screen_PM3,
      navigationOptions: {
        header: props => <HeaderComponent progress={4/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AP_Screen_PM3: {
      screen: AP_Screen_PM3,
      navigationOptions: {
        header: props => <HeaderComponent progress={5/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AC_Screen_PM3: {
      screen: AC_Screen_PM3,
      navigationOptions: {
        header: props => <HeaderComponent progress={6/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    SE_Screen_PM3: {
      screen: SE_Screen_PM3,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    }
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

const Exercice13 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Intro_Phase_Plan: {
      screen: Exercice_13_Intro_Phase,
      navigationOptions: {
        cardStyle: { backgroundColor: "#A878CE" },
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    },
    Exercice_13_Intro: {
      screen: Exercice_13_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_13_1: {
      screen: Exercice_13_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_2: {
      screen: Exercice_13_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_3: {
      screen: Exercice_13_3,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_4: {
      screen: Exercice_13_4,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_Aha_1: {
      screen: Exercice_13_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={5 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_Aha_2: {
      screen: Exercice_13_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={5 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_Challenge: {
      screen: Exercice_13_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={7 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_Congratulations: {
      screen: Exercice_13_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
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

const Exercice14 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_14_Intro: {
      screen: Exercice_14_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_14_1: {
      screen: Exercice_14_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_Aha_1: {
      screen: Exercice_14_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_Challenge: {
      screen: Exercice_14_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_Congratulations: {
      screen: Exercice_14_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice15 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_15_Intro: {
      screen: Exercice_15_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_15_1: {
      screen: Exercice_15_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_Aha_1: {
      screen: Exercice_15_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_Aha_2: {
      screen: Exercice_15_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_Challenge: {
      screen: Exercice_15_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_Congratulations: {
      screen: Exercice_15_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice16 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_16_Intro: {
      screen: Exercice_16_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_16_1: {
      screen: Exercice_16_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_16_Aha_1: {
      screen: Exercice_16_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_16_Aha_2: {
      screen: Exercice_16_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_16_Challenge: {
      screen: Exercice_16_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_16_Congratulations: {
      screen: Exercice_16_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    },
    Intro_Screen_PM4: {
      screen: Intro_Screen_PM4,
      navigationOptions: {
        header: null
      }
    },
    PSU_Screen_PM4: {
      screen: PSU_Screen_PM4,
      navigationOptions: {
        header: null
      }
    },
    SUE_Screen_PM4: {
      screen: SUE_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    MFSU_Screen_PM4: {
      screen: MFSU_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    PSF_Screen_PM4: {
      screen: PSF_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={1/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    TRP_Screen_PM4: {
      screen: TRP_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={2/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    HS_Screen_PM4: {
      screen: HS_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={3/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    IN_Screen_PM4: {
      screen: IN_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={4/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AP_Screen_PM4: {
      screen: AP_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={5/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AC_Screen_PM4: {
      screen: AC_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={6/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    SE_Screen_PM4: {
      screen: SE_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    CE_Screen_PM4: {
      screen: CE_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    Closing_Screen_PM4: {
      screen: Closing_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const PM4_Stack = createStackNavigator(
  {
    PSU_Screen_PM4: {
      screen: PSU_Screen_PM4,
      navigationOptions: {
        header: null
      }
    },
    SUE_Screen_PM4: {
      screen: SUE_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
      }
    },
    PSF_Screen_PM4: {
      screen: PSF_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={1/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    TRP_Screen_PM4: {
      screen: TRP_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={2/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    HS_Screen_PM4: {
      screen: HS_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={3/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    IN_Screen_PM4: {
      screen: IN_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={4/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AP_Screen_PM4: {
      screen: AP_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={5/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    AC_Screen_PM4: {
      screen: AC_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={6/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    SE_Screen_PM4: {
      screen: SE_Screen_PM4,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    }
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

const Exercice17 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Intro_Phase_Support: {
      screen: Exercice_17_Intro_Phase,
      navigationOptions: {
        cardStyle: { backgroundColor: "#A878CE" },
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    },
    Exercice_17_Intro: {
      screen: Exercice_17_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_17_1: {
      screen: Exercice_17_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_2: {
      screen: Exercice_17_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_3: {
      screen: Exercice_17_3,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_4: {
      screen: Exercice_17_4,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_Aha_1: {
      screen: Exercice_17_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={5 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_Aha_2: {
      screen: Exercice_17_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={6 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_Challenge: {
      screen: Exercice_17_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={7 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_1_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_Congratulations: {
      screen: Exercice_17_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
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

const Exercice18 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_18_Intro: {
      screen: Exercice_18_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_18_1: {
      screen: Exercice_18_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_18_Aha_1: {
      screen: Exercice_18_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_18_Challenge: {
      screen: Exercice_18_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_18_Congratulations: {
      screen: Exercice_18_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice19 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_19_Intro: {
      screen: Exercice_19_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_19_1: {
      screen: Exercice_19_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_19_Aha_1: {
      screen: Exercice_19_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_19_Challenge: {
      screen: Exercice_19_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_2_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_19_Congratulations: {
      screen: Exercice_19_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice20 = createStackNavigator(
  {
    Anchor: {
      screen: TestScreen,
      navigationOptions: {
        header: null
      }
    },
    Exercice_20_Intro: {
      screen: Exercice_20_Intro,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F4F1DE"}
            {...props}
          />
        )
      }
    },
    Exercice_20_1: {
      screen: Exercice_20_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Aha_1: {
      screen: Exercice_20_Aha_1,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Aha_2: {
      screen: Exercice_20_Aha_2,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Aha_3: {
      screen: Exercice_20_Aha_3,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Aha_4: {
      screen: Exercice_20_Aha_4,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Challenge: {
      screen: Exercice_20_Challenge,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            progress={4 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#A28AD4"}
            colorProgress={"#A28AD4"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_4_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Congratulations: {
      screen: Exercice_20_Congratulations,
      navigationOptions: {
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const HomeTab = createStackNavigator(
  {
    Home: { screen: TestScreen },
    Exercice1: { screen: Exercice1 },
    Exercice2: { screen: Exercice2 },
    Exercice3: { screen: Exercice3 },
    Exercice4: { screen: Exercice4 },
    PM1_Stack: { screen: PM1_Stack },
    Exercice5: { screen: Exercice5 },
    Exercice6: { screen: Exercice6 },
    Exercice7: { screen: Exercice7 },
    Exercice8: { screen: Exercice8 },
    PM2_Stack: { screen: PM2_Stack },
    Exercice9: { screen: Exercice9 },
    Exercice10: { screen: Exercice10 },
    Exercice11: { screen: Exercice11 },
    Exercice12: { screen: Exercice12 },
    PM3_Stack: { screen: PM3_Stack },
    Exercice13: { screen: Exercice13 },
    Exercice14: { screen: Exercice14 },
    Exercice15: { screen: Exercice15 },
    Exercice16: { screen: Exercice16 },
    PM4_Stack: { screen: PM4_Stack },
    Exercice17: { screen: Exercice17 },
    Exercice18: { screen: Exercice18 },
    Exercice19: { screen: Exercice19 },
    Exercice20: { screen: Exercice20 },
    //Exercice21: { screen: Exercice21 },
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    defaultNavigationOptions: {
      header: null
    }
  }
);

HomeTab.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName == "Home") {
    navigationOptions.tabBarVisible = true;
  } else {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

const LinksTab = createMaterialTopTabNavigator(
  {
    Observe: ObserveScreen,
    Reflect: ReflectScreen,
    Vision: VisionScreen,
    Plan: PlanScreen,
    Support: SupportScreen
  },
  {
    defaultNavigationOptions: {
      tabBarComponent: props => <HeaderTabBar {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const SettingsTab = createStackNavigator({
  SettingsScreen: { screen: SettingsScreen }
});

const MainStackTabs = createBottomTabNavigator(
  {
    Home: HomeTab,
    Journey: LinksTab,
    Settings: SettingsTab
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
);

export default createAppContainer(MainStackTabs);
