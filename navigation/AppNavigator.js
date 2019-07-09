import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { fromRight } from "react-navigation-transitions";
import MainTabNavigator from "./MainTabNavigator";
import { HeaderComponent } from "../components/AppComponents";

import StartScreen from "../screens/auth/StartScreen";
import AccountAccessScreen from "../screens/auth/SignUpScreens/AccountAccessScreen";
import IntroOnboardingScreen from "../screens/auth/SignUpScreens/IntroOnboardingScreen";
import OnboardingScreen from "../screens/auth/SignUpScreens/OnboardingScreen";
import SecondScreen from "../screens/auth/SignUpScreens/SecurityAgreementsScreen";
import AllowNotificationsScreen from "../screens/auth/SignUpScreens/AllowNotificationsScreen";
import SetRemindersScreen from "../screens/auth/SignUpScreens/SetRemindersScreen";
import SetRemindersFinalScreen from "../screens/auth/SignUpScreens/SetRemindersFinalScreen";
import ConclusionScreen from "../screens/auth/SignUpScreens/ConclusionScreen";
import ThirdScreen from "../screens/auth/SignUpScreens/ThirdScreen";
import T1Screen from "../screens/questionnaires/T1/T1Screen";
import T3Screen from "../screens/questionnaires/T1/T3Screen";
import PSU_Screen from "../screens/questionnaires/T1/PSU_Screen";
import SUE_Screen from "../screens/questionnaires/T1/SUE_Screen";
import WB_Screen from "../screens/questionnaires/T1/WB_Screen";
import MFSU_Screen from "../screens/questionnaires/T1/MFSU_Screen";
import PSF_Screen from "../screens/questionnaires/T1/PSF_Screen";
import TRP_Screen from "../screens/questionnaires/T1/TRP_Screen";
import HS_Screen from "../screens/questionnaires/T1/HS_Screen";
import IN_Screen from "../screens/questionnaires/T1/IN_Screen";
import AP_Screen from "../screens/questionnaires/T1/AP_Screen";
import AC_Screen from "../screens/questionnaires/T1/AC_Screen";
import SE_Screen from "../screens/questionnaires/T1/SE_Screen";

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
    //T1: { screen: T1Screen },
    //T3: { screen: T3Screen },
    // PSU_Screen: { screen: PSU_Screen },
    // SUE_Screen: { screen: SUE_Screen },
    // WB_Screen: { screen: WB_Screen },
    // MFSU_Screen: { screen: MFSU_Screen },
    // PSF_Screen: { screen: PSF_Screen },
    // TRP_Screen: { screen: TRP_Screen },
    // HS_Screen: { screen: HS_Screen },
    // IN_Screen: { screen: IN_Screen },
    // AP_Screen: { screen: AP_Screen },
    // AC_Screen: { screen: AC_Screen },
    SE_Screen: { screen: SE_Screen },
    //Home: { screen: MainTabNavigator }
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
