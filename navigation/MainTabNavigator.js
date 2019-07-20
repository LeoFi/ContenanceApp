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

const HomeTab = createStackNavigator(
  {
    Home: { screen: TestScreen },
    Exercice1: { screen: Exercice1 },
    Exercice2: { screen: Exercice2 },
    Exercice3: { screen: Exercice3 },
    Exercice4: { screen: Exercice4 },
    PM1_Stack: { screen: PM1_Stack },
    Exercice5: { screen: Exercice5 }
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
