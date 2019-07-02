import React from 'react';
import { Notifications } from 'expo';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { fromRight, fromTop, fromBottom } from 'react-navigation-transitions';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import MainTabNavigator from './MainTabNavigator';


import StartScreen from '../screens/auth/StartScreen';
//import AccountAccessScreen from '../screens/auth/LoginScreen';
import AccountAccessScreen from '../screens/auth/SignUpScreens/AccountAccessScreen';
import IntroOnboardingScreen from '../screens/auth/SignUpScreens/IntroOnboardingScreen';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import SecondScreen from '../screens/auth/SignUpScreens/SecondScreen';
import ThirdScreen from '../screens/auth/SignUpScreens/ThirdScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import T1Screen from '../screens/auth/T1Screen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';


import TestScreen from '../screens/TestScreen';


///this is the code that makes the navigation happen

const IntroStack = createStackNavigator(
  {
    Start: { screen: StartScreen },
    AccountAccess: { screen: AccountAccessScreen },
    IntroOnboarding: {
      screen: IntroOnboardingScreen, navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    },
    Onboarding: { screen: OnboardingScreen },
    Signup: { screen: AccountAccessScreen },
    T1: { screen: T1Screen },
    Forgot: { screen: ForgotPasswordScreen },
    Home: { screen: TestScreen },
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: '#F4F1DE' },
  },
);

const SignUpStack = createStackNavigator(
  {
    Signup_First: { screen: AccountAccessScreen },
    Signup_Second: { screen: SecondScreen },
    Signup_Third: { screen: ThirdScreen },
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: '#F4F1DE' },
  },
);

const FromBottomStack = createStackNavigator(
  {
    UP_AccountAccess: { screen: AccountAccessScreen },
    UP_Second: { screen: SecondScreen },
  },
  {
    transitionConfig: () => fromBottom(500),
    cardStyle: { backgroundColor: '#F4F1DE' },
  },
);

const MYTRIES = createStackNavigator(
  {
    IntroOnboarding: { screen: IntroOnboardingScreen },
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: '#F4F1DE' },
  },
);




const MainStack = createStackNavigator(
  {
    Intro: { screen: IntroStack },
    SignUp: { screen: SignUpStack },
    Up: { screen: FromBottomStack },
  },
  {
    cardStyle: { backgroundColor: '#F4F1DE' },
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(MainStack);

export default class RootNavigation extends React.Component {
  render() {
    return <AppContainer />;
  }
}