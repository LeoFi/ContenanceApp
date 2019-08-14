import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { fromRight } from "react-navigation-transitions";
import MainTabNavigator from "./MainTabNavigator";

// import StartScreen from "../screens/auth/StartScreen";
// import AccountAccessScreen from "../screens/auth/SignUpScreens/AccountAccessScreen";
// import IntroOnboardingScreen from "../screens/auth/SignUpScreens/IntroOnboardingScreen";
// import OnboardingScreen from "../screens/auth/SignUpScreens/OnboardingScreen";
// import SecondScreen from "../screens/auth/SignUpScreens/SecurityAgreementsScreen";
// import AllowNotificationsScreen from "../screens/auth/SignUpScreens/AllowNotificationsScreen";
// import SetRemindersScreen from "../screens/auth/SignUpScreens/SetRemindersScreen";
// import SetRemindersFinalScreen from "../screens/auth/SignUpScreens/SetRemindersFinalScreen";
// import ConclusionScreen from "../screens/auth/SignUpScreens/ConclusionScreen";
// import ThirdScreen from "../screens/auth/SignUpScreens/ThirdScreen";

// import Intro_Screen_T1 from "../screens/questionnaires/T1/Intro_Screen_T1";
// import PSU_Screen_T1 from "../screens/questionnaires/T1/PSU_Screen_T1";
// import SUE_Screen_T1 from "../screens/questionnaires/T1/SUE_Screen_T1";
// import WB_Screen_T1 from "../screens/questionnaires/T1/WB_Screen_T1";
// import MFSU_Screen_T1 from "../screens/questionnaires/T1/MFSU_Screen_T1";
// import PSF_Screen_T1 from "../screens/questionnaires/T1/PSF_Screen_T1";
// import TRP_Screen_T1 from "../screens/questionnaires/T1/TRP_Screen_T1";
// import HS_Screen_T1 from "../screens/questionnaires/T1/HS_Screen_T1";
// import IN_Screen_T1 from "../screens/questionnaires/T1/IN_Screen_T1";
// import AP_Screen_T1 from "../screens/questionnaires/T1/AP_Screen_T1";
// import AC_Screen_T1 from "../screens/questionnaires/T1/AC_Screen_T1";
// import SE_Screen_T1 from "../screens/questionnaires/T1/SE_Screen_T1";
// import Extra_1_Screen_T1 from "../screens/questionnaires/T1/Extra_1_Screen_T1";
// import Extra_2_Screen_T1 from "../screens/questionnaires/T1/Extra_2_Screen_T1";
// import Extra_3_Screen_T1 from "../screens/questionnaires/T1/Extra_3_Screen_T1";
import SU1_Screen_T1 from "../screens/questionnaires/T1/SU1_Screen_T1";
import SU2_Screen_T1 from "../screens/questionnaires/T1/SU2_Screen_T1";
import SU3_Screen_T1 from "../screens/questionnaires/T1/SU3_Screen_T1";
import Extra_6_Screen_T1 from "../screens/questionnaires/T1/Extra_6_Screen_T1";
import Closing_Screen_T1 from "../screens/questionnaires/T1/Closing_Screen_T1";

import TestScreen from "../screens/TestScreen";

const IntroStack = createStackNavigator(
  {
    // Start: { screen: StartScreen },
    // AccountAccess: { screen: AccountAccessScreen },
    // IntroOnboarding: { screen: IntroOnboardingScreen },
    // Onboarding: { screen: OnboardingScreen },
    // AllowNotifications: { screen: AllowNotificationsScreen },
    // SetReminders: { screen: SetRemindersScreen },
    // SetRemindersFinal: { screen: SetRemindersFinalScreen },
    // Conclusion: { screen: ConclusionScreen },
    // Intro_Screen_T1: { screen: Intro_Screen_T1 },
    // PSU_Screen_T1: { screen: PSU_Screen_T1 },
    // SUE_Screen_T1: { screen: SUE_Screen_T1 },
    // WB_Screen_T1: { screen: WB_Screen_T1 },
    // MFSU_Screen_T1: { screen: MFSU_Screen_T1 },
    // PSF_Screen_T1: { screen: PSF_Screen_T1 },
    // TRP_Screen_T1: { screen: TRP_Screen_T1 },
    // HS_Screen_T1: { screen: HS_Screen_T1 },
    // IN_Screen_T1: { screen: IN_Screen_T1 },
    // AP_Screen_T1: { screen: AP_Screen_T1 },
    // AC_Screen_T1: { screen: AC_Screen_T1 },
    // SE_Screen_T1: { screen: SE_Screen_T1 },
    // Extra_1_Screen_T1: { screen: Extra_1_Screen_T1 },
    // Extra_2_Screen_T1: { screen: Extra_2_Screen_T1 },
    // Extra_3_Screen_T1: { screen: Extra_3_Screen_T1 },
    SU1_Screen_T1: { screen: SU1_Screen_T1 },
    SU2_Screen_T1: { screen: SU2_Screen_T1 },
    SU3_Screen_T1: { screen: SU3_Screen_T1 },
    Extra_6_Screen_T1: { screen: Extra_6_Screen_T1 },
    Closing_Screen_T1: { screen: Closing_Screen_T1 },
    Home: { screen: MainTabNavigator }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: 'none',
  }
);


const MainStack = createStackNavigator(
  {
    Intro: { screen: IntroStack },
    Home: { screen: MainTabNavigator }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F4F1DE" },
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(MainStack);

export default class RootNavigation extends React.Component {
  render() {
    return <AppContainer />;
  }
}
