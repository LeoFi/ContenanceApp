import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { fromRight } from "react-navigation-transitions";
import MainTabNavigator from "./MainTabNavigator";
import { connect } from "react-redux";
import { HeaderComponent } from "../components/AppComponents";

import StartScreen from "../screens/auth/StartScreen";
import AccountAccessScreen from "../screens/auth/SignUpScreens/AccountAccessScreen";
import IntroOnboardingScreen from "../screens/auth/SignUpScreens/IntroOnboardingScreen";
import UserNameScreen from "../screens/auth/SignUpScreens/UserNameScreen";
import UserAgeScreen from "../screens/auth/SignUpScreens/UserAgeScreen";

import WalkthroughIntroScreen from "../screens/auth/SignUpScreens/WalkthroughIntroScreen";
import WalkthroughContentScreen from "../screens/auth/SignUpScreens/WalkthroughContentScreen";
import WalkthroughConclusionScreen from "../screens/auth/SignUpScreens/WalkthroughConclusionScreen";
import WalkthroughTransitionScreen from "../screens/auth/SignUpScreens/WalkthroughTransitionScreen";

import AssessmentGoalsScreen from "../screens/auth/SignUpScreens/AssessmentGoalsScreen";
import AssessmentMeditationScreen from "../screens/auth/SignUpScreens/AssessmentMeditationScreen";

import AccountSetupScreen from "../screens/auth/SignUpScreens/AccountSetupScreen";
import LoginScreen from "../screens/auth/SignUpScreens/LoginScreen";
import ForgotPasswordScreen from "../screens/auth/SignUpScreens/ForgotPasswordScreen";

import OnboardingScreen from "../screens/auth/SignUpScreens/OnboardingScreen";
import SecondScreen from "../screens/auth/SignUpScreens/SecurityAgreementsScreen";
import AllowNotificationsScreen from "../screens/auth/SignUpScreens/AllowNotificationsScreen";
import SetRemindersScreen from "../screens/auth/SignUpScreens/SetRemindersScreen";
import SetRemindersFinalScreen from "../screens/auth/SignUpScreens/SetRemindersFinalScreen";
import ConclusionScreen from "../screens/auth/SignUpScreens/ConclusionScreen";
import ThirdScreen from "../screens/auth/SignUpScreens/ThirdScreen";

import TestScreen from "../screens/TestScreen";

const IntroStack = createStackNavigator(
  {
    Start: { screen: StartScreen },
    IntroOnboarding: { screen: IntroOnboardingScreen },
    UserName: { screen: UserNameScreen },
    UserAge: { screen: UserAgeScreen },
    WalkthroughIntro: { screen: WalkthroughIntroScreen },
    WalkthroughContent: { screen: WalkthroughContentScreen },
    WalkthroughConclusion: { screen: WalkthroughConclusionScreen },
    WalkthroughTransition: { screen: WalkthroughTransitionScreen },
    AssessmentGoals: { screen: AssessmentGoalsScreen },
    AssessmentMeditation: { screen: AssessmentMeditationScreen },
    AccountSetup: { screen: AccountSetupScreen },
    Login: { screen: LoginScreen },
    ForgotPassword: { screen: ForgotPasswordScreen },
    Conclusion: { screen: ConclusionScreen },
    Home: { screen: TestScreen },
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F7F5E9" },
    headerMode: "none"
  }
);

const MainStack = createStackNavigator(
  {
    Intro: { screen: IntroStack }
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: "#F7F5E9" },
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(MainStack);

class RootNavigation extends React.Component {
  render() {
    {
      // return  <AppContainer />
      return this.props.user.onboardingDone ? (
        <MainTabNavigator />
      ) : (
        <AppContainer />
        // <MainTabNavigator />
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(RootNavigation);
