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
    T1: { screen: T1Screen },
    //T3: { screen: T3Screen },
    PSU_Screen: { screen: PSU_Screen },
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
