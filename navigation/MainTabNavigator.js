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

import Exercice_2_Intro from "../screens/exercices/Exercice_2/Intro";
import Exercice_2_1 from "../screens/exercices/Exercice_2/1";
import Exercice_2_2 from "../screens/exercices/Exercice_2/2";
import Exercice_2_3 from "../screens/exercices/Exercice_2/3";
import Exercice_2_4 from "../screens/exercices/Exercice_2/4";
import Exercice_2_Aha_1 from "../screens/exercices/Exercice_2/Aha_1";
import Exercice_2_Aha_2 from "../screens/exercices/Exercice_2/Aha_2";
import Exercice_2_Challenge from "../screens/exercices/Exercice_2/Challenge";
import Exercice_2_Congratulations from "../screens/exercices/Exercice_2/Congratulations";


import PSU_Screen_PM1 from "../screens/questionnaires/PM1/PSU_Screen_PM1";
import SUE_Screen_PM1 from "../screens/questionnaires/PM1/SUE_Screen_PM1";
import PSF_Screen_PM1 from "../screens/questionnaires/PM1/PSF_Screen_PM1";
import TRP_Screen_PM1 from "../screens/questionnaires/PM1/TRP_Screen_PM1";
import HS_Screen_PM1 from "../screens/questionnaires/PM1/HS_Screen_PM1";
import IN_Screen_PM1 from "../screens/questionnaires/PM1/IN_Screen_PM1";
import AP_Screen_PM1 from "../screens/questionnaires/PM1/AP_Screen_PM1";
import AC_Screen_PM1 from "../screens/questionnaires/PM1/AC_Screen_PM1";
import SE_Screen_PM1 from "../screens/questionnaires/PM1/SE_Screen_PM1";

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
        header: props => <HeaderComponent progress={1/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    Exercice_1_2: {
      screen: Exercice_1_2,
      navigationOptions: {
        header: props => <HeaderComponent progress={2/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    Exercice_1_3: {
      screen: Exercice_1_3,
      navigationOptions: {
        header: props => <HeaderComponent progress={3/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    Exercice_1_4: {
      screen: Exercice_1_4,
      navigationOptions: {
        header: props => <HeaderComponent progress={4/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    Exercice_1_Aha_1: {
      screen: Exercice_1_Aha_1,
      navigationOptions: {
        header: props => <HeaderComponent progress={5/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    Exercice_1_Aha_2: {
      screen: Exercice_1_Aha_2,
      navigationOptions: {
        header: props => <HeaderComponent progress={6/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    Exercice_1_Challenge: {
      screen: Exercice_1_Challenge,
      navigationOptions: {
        header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
      }
    },
    Exercice_1_Congratulations: {
      screen: Exercice_1_Congratulations,
      navigationOptions: {
        header: props => <HeaderComponent progress={8/8} disabledProgress={false} disabledClose={true} {...props} />,
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

// const Exercice2 = createStackNavigator(
//   {
//     Anchor: {
//       screen: TestScreen,
//       navigationOptions: {
//         header: null
//       }
//     },
//     Exercice_2_Intro: {
//       screen: Exercice_2_Intro,
//       navigationOptions: {
//         header: props => <HeaderComponent disabledProgress={true} disabledClose={true} {...props} />,
//       }
//     },
//     Exercice_2_1: {
//       screen: Exercice_2_1,
//       navigationOptions: {
//         header: props => <HeaderComponent progress={1/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
//       }
//     },
//     Exercice_2_2: {
//       screen: Exercice_2_2,
//       navigationOptions: {
//         header: props => <HeaderComponent progress={2/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
//       }
//     },
//     Exercice_2_3: {
//       screen: Exercice_2_3,
//       navigationOptions: {
//         header: props => <HeaderComponent progress={3/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
//       }
//     },
//     Exercice_2_4: {
//       screen: Exercice_2_4,
//       navigationOptions: {
//         header: props => <HeaderComponent progress={4/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
//       }
//     },
//     Exercice_2_Aha_1: {
//       screen: Exercice_2_Aha_1,
//       navigationOptions: {
//         header: props => <HeaderComponent progress={5/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
//       }
//     },
//     Exercice_2_Aha_2: {
//       screen: Exercice_2_Aha_2,
//       navigationOptions: {
//         header: props => <HeaderComponent progress={6/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
//       }
//     },
//     Exercice_2_Challenge: {
//       screen: Exercice_2_Challenge,
//       navigationOptions: {
//         header: props => <HeaderComponent progress={7/8} disabledProgress={false} disabledClose={false} goBackLink={() => {props.navigation.navigate('Exercice_1_Intro')}} {...props} />,
//       }
//     },
//     Exercice_2_Congratulations: {
//       screen: Exercice_2_Congratulations,
//       navigationOptions: {
//         header: props => <HeaderComponent progress={8/8} disabledProgress={false} disabledClose={true} {...props} />,
//       }
//     }
//   },
//   {
//     transitionConfig: () => fromRight(500),
//     //cardStyle: { backgroundColor: "#F4F1DE" },
//     headerMode: "float",
//     defaultNavigationOptions: {
//       header: props => <HeaderComponent {...props} />,
//       animationEnabled: true,
//       gesturesEnabled: false
//     }
//   }
// );

const Exercice2 = createStackNavigator(
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

const HomeTab = createStackNavigator(
  {
    Anchor: { screen: TestScreen },
    Exercice1: { screen: Exercice1 },
    Exercice2: { screen: Exercice2 },
  },
  {
    transitionConfig: () => fromRight(500),
    defaultNavigationOptions: {
      header: null
    }
  }
);

HomeTab.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

   if (routeName == 'Anchor') {
    navigationOptions.tabBarVisible = true;
  } else {
    navigationOptions.tabBarVisible = false;
  }

   return navigationOptions;
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
