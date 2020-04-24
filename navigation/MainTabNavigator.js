import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import { HeaderComponent } from "../components/AppComponents";
import { fromRight } from "react-navigation-transitions";
import TabBar from "../components/TabBar";
import HeaderTabBar from "../components/HeaderTabBar";

import TestScreen from "../screens/TestScreen";

import ObserveScreen from "../screens/phases/ObserveScreen";
import ReflectScreen from "../screens/phases/ReflectScreen";
import VisionScreen from "../screens/phases/VisionScreen";
import PlanScreen from "../screens/phases/PlanScreen";
import SupportScreen from "../screens/phases/SupportScreen";

import CompletedChallengesScreen from "../screens/challenges/CompletedChallengesScreen";
import PendingChallengesScreen from "../screens/challenges/PendingChallengesScreen";

import SettingsScreen from "../screens/SettingsScreen";
import Faq from "../screens/settings/Faq";
import ContactUs from "../screens/settings/ContactUs";
import SecurityAgreements from "../screens/settings/SecurityAgreements";
import Question1 from "../screens/faq/Question1";
import Question2 from "../screens/faq/Question2";
import Question3 from "../screens/faq/Question3";
import Question4 from "../screens/faq/Question4";
import Question5 from "../screens/faq/Question5";
import Question6 from "../screens/faq/Question6";

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
import Exercice_5_5 from "../screens/exercices/Exercice_5/5";
import Exercice_5_6 from "../screens/exercices/Exercice_5/6";
import Exercice_5_7 from "../screens/exercices/Exercice_5/7";
import Exercice_5_Aha_1 from "../screens/exercices/Exercice_5/Aha_1";
import Exercice_5_Aha_2 from "../screens/exercices/Exercice_5/Aha_2";
import Exercice_5_Challenge from "../screens/exercices/Exercice_5/Challenge";
import Exercice_5_Congratulations from "../screens/exercices/Exercice_5/Congratulations";

import Exercice_6_Intro from "../screens/exercices/Exercice_6/Intro";
import Exercice_6_1 from "../screens/exercices/Exercice_6/1";
import Exercice_6_2 from "../screens/exercices/Exercice_6/2";
import Exercice_6_3 from "../screens/exercices/Exercice_6/3";
import Exercice_6_Aha_1 from "../screens/exercices/Exercice_6/Aha_1";
import Exercice_6_Aha_2 from "../screens/exercices/Exercice_6/Aha_2";
import Exercice_6_Aha_3 from "../screens/exercices/Exercice_6/Aha_3";
import Exercice_6_Challenge from "../screens/exercices/Exercice_6/Challenge";
import Exercice_6_Congratulations from "../screens/exercices/Exercice_6/Congratulations";

import Exercice_7_Intro from "../screens/exercices/Exercice_7/Intro";
import Exercice_7_1 from "../screens/exercices/Exercice_7/1";
import Exercice_7_2 from "../screens/exercices/Exercice_7/2";
import Exercice_7_3 from "../screens/exercices/Exercice_7/3";
import Exercice_7_4 from "../screens/exercices/Exercice_7/4";
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
import Exercice_9_5 from "../screens/exercices/Exercice_9/5";
import Exercice_9_6 from "../screens/exercices/Exercice_9/6";
import Exercice_9_7 from "../screens/exercices/Exercice_9/7";
import Exercice_9_8 from "../screens/exercices/Exercice_9/8";
import Exercice_9_Aha_1 from "../screens/exercices/Exercice_9/Aha_1";
import Exercice_9_Challenge from "../screens/exercices/Exercice_9/Challenge";
import Exercice_9_Congratulations from "../screens/exercices/Exercice_9/Congratulations";

import Exercice_10_Intro from "../screens/exercices/Exercice_10/Intro";
import Exercice_10_1 from "../screens/exercices/Exercice_10/1";
import Exercice_10_2 from "../screens/exercices/Exercice_10/2";
import Exercice_10_3 from "../screens/exercices/Exercice_10/3";
import Exercice_10_4 from "../screens/exercices/Exercice_10/4";
import Exercice_10_5 from "../screens/exercices/Exercice_10/5";
import Exercice_10_6 from "../screens/exercices/Exercice_10/6";
import Exercice_10_7 from "../screens/exercices/Exercice_10/7";
import Exercice_10_8 from "../screens/exercices/Exercice_10/8";
import Exercice_10_9 from "../screens/exercices/Exercice_10/9";
import Exercice_10_Aha_1 from "../screens/exercices/Exercice_10/Aha_1";
import Exercice_10_Aha_2 from "../screens/exercices/Exercice_10/Aha_2";
import Exercice_10_Challenge from "../screens/exercices/Exercice_10/Challenge";
import Exercice_10_Congratulations from "../screens/exercices/Exercice_10/Congratulations";

import Exercice_11_Intro from "../screens/exercices/Exercice_11/Intro";
import Exercice_11_1 from "../screens/exercices/Exercice_11/1";
import Exercice_11_2 from "../screens/exercices/Exercice_11/2";
import Exercice_11_3 from "../screens/exercices/Exercice_11/3";
import Exercice_11_4 from "../screens/exercices/Exercice_11/4";
import Exercice_11_5 from "../screens/exercices/Exercice_11/5";
import Exercice_11_6 from "../screens/exercices/Exercice_11/6";
import Exercice_11_7 from "../screens/exercices/Exercice_11/7";
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
import Exercice_13_5 from "../screens/exercices/Exercice_13/5";
import Exercice_13_6 from "../screens/exercices/Exercice_13/6";
import Exercice_13_Aha_1 from "../screens/exercices/Exercice_13/Aha_1";
import Exercice_13_Aha_2 from "../screens/exercices/Exercice_13/Aha_2";
import Exercice_13_Challenge from "../screens/exercices/Exercice_13/Challenge";
import Exercice_13_Congratulations from "../screens/exercices/Exercice_13/Congratulations";

import Exercice_14_Intro from "../screens/exercices/Exercice_14/Intro";
import Exercice_14_1 from "../screens/exercices/Exercice_14/1";
import Exercice_14_2 from "../screens/exercices/Exercice_14/2";
import Exercice_14_3 from "../screens/exercices/Exercice_14/3";
import Exercice_14_4 from "../screens/exercices/Exercice_14/4";
import Exercice_14_5 from "../screens/exercices/Exercice_14/5";
import Exercice_14_6 from "../screens/exercices/Exercice_14/6";
import Exercice_14_7 from "../screens/exercices/Exercice_14/7";
import Exercice_14_8 from "../screens/exercices/Exercice_14/8";
import Exercice_14_Aha_1 from "../screens/exercices/Exercice_14/Aha_1";
import Exercice_14_Challenge from "../screens/exercices/Exercice_14/Challenge";
import Exercice_14_Congratulations from "../screens/exercices/Exercice_14/Congratulations";

import Exercice_15_Intro from "../screens/exercices/Exercice_15/Intro";
import Exercice_15_1 from "../screens/exercices/Exercice_15/1";
import Exercice_15_2 from "../screens/exercices/Exercice_15/2";
import Exercice_15_3 from "../screens/exercices/Exercice_15/3";
import Exercice_15_4 from "../screens/exercices/Exercice_15/4";
import Exercice_15_Aha_1 from "../screens/exercices/Exercice_15/Aha_1";
import Exercice_15_Aha_2 from "../screens/exercices/Exercice_15/Aha_2";
import Exercice_15_Challenge from "../screens/exercices/Exercice_15/Challenge";
import Exercice_15_Congratulations from "../screens/exercices/Exercice_15/Congratulations";

import Exercice_16_Intro from "../screens/exercices/Exercice_16/Intro";
import Exercice_16_1 from "../screens/exercices/Exercice_16/1";
import Exercice_16_2 from "../screens/exercices/Exercice_16/2";
import Exercice_16_3 from "../screens/exercices/Exercice_16/3";
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
import Exercice_17_5 from "../screens/exercices/Exercice_17/5";
import Exercice_17_6 from "../screens/exercices/Exercice_17/6";
import Exercice_17_7_iphone from "../screens/exercices/Exercice_17/7_iphone";
import Exercice_17_7_android from "../screens/exercices/Exercice_17/7_android";
import Exercice_17_8 from "../screens/exercices/Exercice_17/8";
import Exercice_17_9 from "../screens/exercices/Exercice_17/9";
import Exercice_17_10 from "../screens/exercices/Exercice_17/10";
import Exercice_17_Aha_1 from "../screens/exercices/Exercice_17/Aha_1";
import Exercice_17_Challenge from "../screens/exercices/Exercice_17/Challenge";
import Exercice_17_Congratulations from "../screens/exercices/Exercice_17/Congratulations";

import Exercice_18_Intro from "../screens/exercices/Exercice_18/Intro";
import Exercice_18_1 from "../screens/exercices/Exercice_18/1";
import Exercice_18_2 from "../screens/exercices/Exercice_18/2";
import Exercice_18_3 from "../screens/exercices/Exercice_18/3";
import Exercice_18_4 from "../screens/exercices/Exercice_18/4";
import Exercice_18_Aha_1 from "../screens/exercices/Exercice_18/Aha_1";
import Exercice_18_Challenge from "../screens/exercices/Exercice_18/Challenge";
import Exercice_18_Congratulations from "../screens/exercices/Exercice_18/Congratulations";

import Exercice_19_Intro from "../screens/exercices/Exercice_19/Intro";
import Exercice_19_1 from "../screens/exercices/Exercice_19/1";
import Exercice_19_2 from "../screens/exercices/Exercice_19/2";
import Exercice_19_3 from "../screens/exercices/Exercice_19/3";
import Exercice_19_4 from "../screens/exercices/Exercice_19/4";
import Exercice_19_5 from "../screens/exercices/Exercice_19/5";
import Exercice_19_Aha_1 from "../screens/exercices/Exercice_19/Aha_1";
import Exercice_19_Challenge from "../screens/exercices/Exercice_19/Challenge";
import Exercice_19_Congratulations from "../screens/exercices/Exercice_19/Congratulations";

import Exercice_20_Intro from "../screens/exercices/Exercice_20/Intro";
import Exercice_20_1 from "../screens/exercices/Exercice_20/1";
import Exercice_20_2 from "../screens/exercices/Exercice_20/2";
import Exercice_20_3 from "../screens/exercices/Exercice_20/3";
import Exercice_20_4 from "../screens/exercices/Exercice_20/4";
import Exercice_20_Aha_1 from "../screens/exercices/Exercice_20/Aha_1";
import Exercice_20_Aha_2 from "../screens/exercices/Exercice_20/Aha_2";
import Exercice_20_Aha_3 from "../screens/exercices/Exercice_20/Aha_3";
import Exercice_20_Aha_4 from "../screens/exercices/Exercice_20/Aha_4";
import Exercice_20_Challenge from "../screens/exercices/Exercice_20/Challenge";
import Exercice_20_Congratulations from "../screens/exercices/Exercice_20/Congratulations";

import Exercice_21_Intro from "../screens/exercices/Exercice_21/Intro";

const Exercice1 = createStackNavigator(
  {
    Intro_Phase_Observe: {
      screen: Exercice_1_Intro_Phase,
      navigationOptions: {
        gesturesEnabled: false,
        cardStyle: { backgroundColor: "#A28AD4" },
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_1_1: {
      screen: Exercice_1_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 8}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 8}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 8}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 8}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 8}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 8}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 8}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorProgress={"#A28AD4"}
            colorIcons={"#2C3B51"}
            {...props}
          />
        )
      }
    }
  },
  {
    transitionConfig: () => fromRight(500),
    //cardStyle: { backgroundColor: "#{"#F7F5E9"}" },
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
    Exercice_2_Intro: {
      screen: Exercice_2_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_2_1: {
      screen: Exercice_2_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 5}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 5}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 5}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 5}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 5}
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_3_Intro: {
      screen: Exercice_3_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_3_1: {
      screen: Exercice_3_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={8 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={9 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={10 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={11 / 12}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={12 / 12}
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_4_Intro: {
      screen: Exercice_4_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_4_1: {
      screen: Exercice_4_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 5}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 5}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 5}
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 5}
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
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Intro_Phase_Reflect: {
      screen: Exercice_5_Intro_Phase,
      navigationOptions: {
        gesturesEnabled: false,
        cardStyle: { backgroundColor: "#A28AD4" },
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_5_1: {
      screen: Exercice_5_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_5_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_2: {
      screen: Exercice_5_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_5_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_3: {
      screen: Exercice_5_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_5_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_4: {
      screen: Exercice_5_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_5_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_5: {
      screen: Exercice_5_5,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_5_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_6: {
      screen: Exercice_5_6,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_5_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_7: {
      screen: Exercice_5_7,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_5_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_Aha_1: {
      screen: Exercice_5_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={8 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_5_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_Aha_2: {
      screen: Exercice_5_Aha_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={9 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_5_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_Challenge: {
      screen: Exercice_5_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={10 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_5_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_5_Congratulations: {
      screen: Exercice_5_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    //cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_6_Intro: {
      screen: Exercice_6_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_6_1: {
      screen: Exercice_6_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_6_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_2: {
      screen: Exercice_6_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_6_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_3: {
      screen: Exercice_6_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_6_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_Aha_1: {
      screen: Exercice_6_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_6_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_Aha_2: {
      screen: Exercice_6_Aha_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_6_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_Aha_3: {
      screen: Exercice_6_Aha_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_6_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_Challenge: {
      screen: Exercice_6_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_6_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_6_Congratulations: {
      screen: Exercice_6_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_7_Intro: {
      screen: Exercice_7_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_7_1: {
      screen: Exercice_7_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 9}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_7_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_2: {
      screen: Exercice_7_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 9}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_7_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_3: {
      screen: Exercice_7_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 9}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_7_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_4: {
      screen: Exercice_7_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 9}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_7_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_Aha_1: {
      screen: Exercice_7_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 9}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_7_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_Aha_2: {
      screen: Exercice_7_Aha_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 9}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_7_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_Aha_3: {
      screen: Exercice_7_Aha_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 9}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_7_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_Challenge: {
      screen: Exercice_7_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={8 / 9}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_7_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_7_Congratulations: {
      screen: Exercice_7_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_8_Intro: {
      screen: Exercice_8_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_8_1: {
      screen: Exercice_8_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 6}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_8_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_8_Aha_1: {
      screen: Exercice_8_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 6}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_8_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_8_Aha_2: {
      screen: Exercice_8_Aha_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 6}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_8_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_8_Aha_3: {
      screen: Exercice_8_Aha_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 6}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_8_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_8_Challenge: {
      screen: Exercice_8_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 6}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F6B563"}
            colorProgress={"#F6B563"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_8_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_8_Congratulations: {
      screen: Exercice_8_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Intro_Phase_Vision: {
      screen: Exercice_9_Intro_Phase,
      navigationOptions: {
        gesturesEnabled: false,
        cardStyle: { backgroundColor: "#A28AD4" },
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_9_1: {
      screen: Exercice_9_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_9_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_2: {
      screen: Exercice_9_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_9_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_3: {
      screen: Exercice_9_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_9_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_4: {
      screen: Exercice_9_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_9_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_5: {
      screen: Exercice_9_5,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_9_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_6: {
      screen: Exercice_9_6,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_9_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_7: {
      screen: Exercice_9_7,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_9_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_8: {
      screen: Exercice_9_8,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={8 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_9_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_Aha_1: {
      screen: Exercice_9_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={9 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_9_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_Challenge: {
      screen: Exercice_9_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={10 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_9_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_9_Congratulations: {
      screen: Exercice_9_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    //cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_10_Intro: {
      screen: Exercice_10_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_10_1: {
      screen: Exercice_10_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_2: {
      screen: Exercice_10_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_3: {
      screen: Exercice_10_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_4: {
      screen: Exercice_10_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_5: {
      screen: Exercice_10_5,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_6: {
      screen: Exercice_10_6,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_7: {
      screen: Exercice_10_7,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_8: {
      screen: Exercice_10_8,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={8 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_9: {
      screen: Exercice_10_9,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={9 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_Aha_1: {
      screen: Exercice_10_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={10 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_Aha_2: {
      screen: Exercice_10_Aha_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={11 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_Challenge: {
      screen: Exercice_10_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={12 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_10_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_10_Congratulations: {
      screen: Exercice_10_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_11_Intro: {
      screen: Exercice_11_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_11_1: {
      screen: Exercice_11_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_11_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_2: {
      screen: Exercice_11_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_11_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_3: {
      screen: Exercice_11_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_11_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_4: {
      screen: Exercice_11_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_11_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_5: {
      screen: Exercice_11_5,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_11_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_6: {
      screen: Exercice_11_6,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_11_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_7: {
      screen: Exercice_11_7,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_11_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_Aha_1: {
      screen: Exercice_11_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={8 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_11_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_Aha_2: {
      screen: Exercice_11_Aha_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={9 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_11_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_Challenge: {
      screen: Exercice_11_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={10 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_11_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_11_Congratulations: {
      screen: Exercice_11_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_12_Intro: {
      screen: Exercice_12_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_12_1: {
      screen: Exercice_12_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_12_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_12_Aha_1: {
      screen: Exercice_12_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_12_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_12_Challenge: {
      screen: Exercice_12_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 4}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#F87B7B"}
            colorProgress={"#F87B7B"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_12_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_12_Congratulations: {
      screen: Exercice_12_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Intro_Phase_Plan: {
      screen: Exercice_13_Intro_Phase,
      navigationOptions: {
        gesturesEnabled: false,
        cardStyle: { backgroundColor: "#A28AD4" },
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_13_1: {
      screen: Exercice_13_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_13_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_2: {
      screen: Exercice_13_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_13_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_3: {
      screen: Exercice_13_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_13_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_4: {
      screen: Exercice_13_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_13_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_5: {
      screen: Exercice_13_5,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_13_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_6: {
      screen: Exercice_13_6,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_13_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_Aha_1: {
      screen: Exercice_13_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_13_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_Aha_2: {
      screen: Exercice_13_Aha_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={8 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_13_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_Challenge: {
      screen: Exercice_13_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={9 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_13_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_13_Congratulations: {
      screen: Exercice_13_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    //cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_14_Intro: {
      screen: Exercice_14_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_14_1: {
      screen: Exercice_14_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_14_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_2: {
      screen: Exercice_14_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_14_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_3: {
      screen: Exercice_14_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_14_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_4: {
      screen: Exercice_14_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_14_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_5: {
      screen: Exercice_14_5,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_14_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_6: {
      screen: Exercice_14_6,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_14_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_7: {
      screen: Exercice_14_7,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_14_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_8: {
      screen: Exercice_14_8,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={8 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_14_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_Aha_1: {
      screen: Exercice_14_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={9 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_14_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_Challenge: {
      screen: Exercice_14_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={10 / 11}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_14_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_14_Congratulations: {
      screen: Exercice_14_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_15_Intro: {
      screen: Exercice_15_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_15_1: {
      screen: Exercice_15_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_15_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_2: {
      screen: Exercice_15_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_15_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_3: {
      screen: Exercice_15_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_15_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_4: {
      screen: Exercice_15_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_15_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_Aha_1: {
      screen: Exercice_15_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_15_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_Aha_2: {
      screen: Exercice_15_Aha_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_15_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_Challenge: {
      screen: Exercice_15_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_15_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_15_Congratulations: {
      screen: Exercice_15_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_16_Intro: {
      screen: Exercice_16_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_16_1: {
      screen: Exercice_16_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_16_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_16_2: {
      screen: Exercice_16_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_16_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_16_3: {
      screen: Exercice_16_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_16_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_16_Aha_1: {
      screen: Exercice_16_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_16_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_16_Aha_2: {
      screen: Exercice_16_Aha_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_16_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_16_Challenge: {
      screen: Exercice_16_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#4CBB92"}
            colorProgress={"#4CBB92"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_16_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_16_Congratulations: {
      screen: Exercice_16_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Intro_Phase_Support: {
      screen: Exercice_17_Intro_Phase,
      navigationOptions: {
        gesturesEnabled: false,
        cardStyle: { backgroundColor: "#A28AD4" },
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
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_17_1: {
      screen: Exercice_17_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_2: {
      screen: Exercice_17_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_3: {
      screen: Exercice_17_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_4: {
      screen: Exercice_17_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_5: {
      screen: Exercice_17_5,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_6: {
      screen: Exercice_17_6,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_7_iphone: {
      screen: Exercice_17_7_iphone,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_7_android: {
      screen: Exercice_17_7_android,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_8: {
      screen: Exercice_17_8,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={8 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_9: {
      screen: Exercice_17_9,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={9 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_10: {
      screen: Exercice_17_10,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={10 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_Aha_1: {
      screen: Exercice_17_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={11 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_Challenge: {
      screen: Exercice_17_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={12 / 13}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_17_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_17_Congratulations: {
      screen: Exercice_17_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    //cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_18_Intro: {
      screen: Exercice_18_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_18_1: {
      screen: Exercice_18_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_18_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_18_2: {
      screen: Exercice_18_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_18_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_18_3: {
      screen: Exercice_18_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_18_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_18_4: {
      screen: Exercice_18_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_18_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_18_Aha_1: {
      screen: Exercice_18_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_18_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_18_Challenge: {
      screen: Exercice_18_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 7}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_18_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_18_Congratulations: {
      screen: Exercice_18_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_19_Intro: {
      screen: Exercice_19_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_19_1: {
      screen: Exercice_19_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_19_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_19_2: {
      screen: Exercice_19_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_19_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_19_3: {
      screen: Exercice_19_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_19_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_19_4: {
      screen: Exercice_19_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_19_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_19_5: {
      screen: Exercice_19_5,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_19_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_19_Aha_1: {
      screen: Exercice_19_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_19_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_19_Challenge: {
      screen: Exercice_19_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 8}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_19_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_19_Congratulations: {
      screen: Exercice_19_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice_20_Intro: {
      screen: Exercice_20_Intro,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            colorIcons={"#F7F5E9"}
            {...props}
          />
        )
      }
    },
    Exercice_20_1: {
      screen: Exercice_20_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={1 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_20_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_2: {
      screen: Exercice_20_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={2 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_20_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_3: {
      screen: Exercice_20_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={3 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_20_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_4: {
      screen: Exercice_20_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={4 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_20_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Aha_1: {
      screen: Exercice_20_Aha_1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={5 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_20_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Aha_2: {
      screen: Exercice_20_Aha_2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={6 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_20_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Aha_3: {
      screen: Exercice_20_Aha_3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={7 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_20_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Aha_4: {
      screen: Exercice_20_Aha_4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={8 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_20_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Challenge: {
      screen: Exercice_20_Challenge,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            progress={9 / 10}
            disabledProgress={false}
            disabledClose={false}
            colorIcons={"#6A97D8"}
            colorProgress={"#6A97D8"}
            goBackLink={() => {
              props.navigation.navigate("Exercice_20_Intro");
            }}
            {...props}
          />
        )
      }
    },
    Exercice_20_Congratulations: {
      screen: Exercice_20_Congratulations,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
    headerMode: "float",
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const Exercice21 = createStackNavigator(
  {
    Exercice_21_Intro: {
      screen: Exercice_21_Intro,
      navigationOptions: {
        gesturesEnabled: false,
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
    cardStyle: { backgroundColor: "#F7F5E9" },
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
    Exercice5: { screen: Exercice5 },
    Exercice6: { screen: Exercice6 },
    Exercice7: { screen: Exercice7 },
    Exercice8: { screen: Exercice8 },
    Exercice9: { screen: Exercice9 },
    Exercice10: { screen: Exercice10 },
    Exercice11: { screen: Exercice11 },
    Exercice12: { screen: Exercice12 },
    Exercice13: { screen: Exercice13 },
    Exercice14: { screen: Exercice14 },
    Exercice15: { screen: Exercice15 },
    Exercice16: { screen: Exercice16 },
    Exercice17: { screen: Exercice17 },
    Exercice18: { screen: Exercice18 },
    Exercice19: { screen: Exercice19 },
    Exercice20: { screen: Exercice20 },
    Exercice21: { screen: Exercice21 }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F7F5E9" },
    defaultNavigationOptions: {
      header: null,
      gesturesEnabled: false,
      headerMode: "none"
    }
  }
);

HomeTab.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName == "Home") {
    navigationOptions.tabBarVisible = true;
    navigationOptions.gesturesEnabled = false;
  } else {
    navigationOptions.tabBarVisible = false;
    navigationOptions.gesturesEnabled = false;
  }

  return navigationOptions;
};

const ChallengeScreens = createMaterialTopTabNavigator(
  {
    Pending: PendingChallengesScreen,
    Completed: CompletedChallengesScreen
  },
  {
    tabBarOptions: {
      labelStyle: {
        color: "#2C3B51",
        fontSize: 20,
        lineHeight: 25,
        textAlign: "center",
        fontFamily: "roboto-black",
        textTransform: "capitalize"
      },
      style: {
        backgroundColor: "transparent",
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#2C3B51"
      },
      indicatorStyle: {
        backgroundColor: "#2C3B51",
        height: 5
      }
    },
    defaultNavigationOptions: {
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const ChallengesTab = createStackNavigator(
  { ChallengeStack: ChallengeScreens },
  {
    // This applies to child routes
    cardStyle: { backgroundColor: "#F7F5E9" },
    defaultNavigationOptions: {
      title: "List of Challenges",
      headerStyle: {
        height: 80,
        borderBottomWidth: 0,
        backgroundColor: "#F7F5E9"
      },
      headerTitleStyle: {
        color: "#2C3B51",
        fontSize: 30,
        lineHeight: 37,
        textAlign: "center",
        fontFamily: "roboto-black",
        textTransform: "capitalize"
      },
    }
  }
);

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

const SettingsTab = createStackNavigator(
  {
    SettingsScreen: SettingsScreen,
    Faq: {
      screen: Faq,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            goBackLink={() => {
              props.navigation.navigate("SettingsScreen");
            }}
            {...props}
          />
        )
      }
    },
    SecurityAgreements: {
      screen: SecurityAgreements,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            goBackLink={() => {
              props.navigation.navigate("SettingsScreen");
            }}
            {...props}
          />
        )
      }
    },
    ContactUs: {
      screen: ContactUs,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            goBackLink={() => {
              props.navigation.navigate("SettingsScreen");
            }}
            {...props}
          />
        )
      }
    },
    Question1: {
      screen: Question1,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            goBackLink={() => {
              props.navigation.navigate("Faq");
            }}
            {...props}
          />
        )
      }
    },
    Question2: {
      screen: Question2,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            goBackLink={() => {
              props.navigation.navigate("Faq");
            }}
            {...props}
          />
        )
      }
    },
    Question3: {
      screen: Question3,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            goBackLink={() => {
              props.navigation.navigate("Faq");
            }}
            {...props}
          />
        )
      }
    },
    Question4: {
      screen: Question4,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            goBackLink={() => {
              props.navigation.navigate("Faq");
            }}
            {...props}
          />
        )
      }
    },
    Question5: {
      screen: Question5,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            goBackLink={() => {
              props.navigation.navigate("Faq");
            }}
            {...props}
          />
        )
      }
    },
    Question6: {
      screen: Question6,
      navigationOptions: {
        gesturesEnabled: false,
        header: props => (
          <HeaderComponent
            disabledProgress={true}
            disabledClose={true}
            goBackLink={() => {
              props.navigation.navigate("Faq");
            }}
            {...props}
          />
        )
      }
    }
  },
  {
    cardStyle: { backgroundColor: "#F7F5E9" },
    defaultNavigationOptions: {
      tabBarComponent: props => <HeaderTabBar {...props} />,
      animationEnabled: true,
      gesturesEnabled: false
    }
  }
);

const MainStackTabs = createBottomTabNavigator(
  {
    Home: HomeTab,
    Challenge: {
      screen: ChallengesTab,
      navigationOptions: { headerTitle: "Header title" }
    },
    Journey: LinksTab,
    Settings: SettingsTab
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
    animationEnabled: true,
    gesturesEnabled: false,
    headerMode: ""
  }
);

export default createAppContainer(MainStackTabs);
