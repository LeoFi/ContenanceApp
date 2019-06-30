import React from 'react';
import { Notifications } from 'expo';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import MainTabNavigator from './MainTabNavigator';

import OnboardingScreen from '../screens/auth/OnboardingScreen';
import StartScreen from '../screens/auth/StartScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import FirstScreen from '../screens/auth/SignUpScreens/FirstScreen';
import SecondScreen from '../screens/auth/SignUpScreens/SecondScreen';
import ThirdScreen from '../screens/auth/SignUpScreens/ThirdScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import T1Screen from '../screens/auth/T1Screen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';


///this is the code that makes the navigation happen

const IntroStack = createStackNavigator(
  {
    Start: { screen: StartScreen },
    Login: { screen: LoginScreen },
    Signup: { screen: FirstScreen },
    T1: { screen: T1Screen },
    Forgot: { screen: ForgotPasswordScreen },
  },
  {
    transitionConfig: () => fromRight(500),
    cardStyle: { backgroundColor: '#F4F1DE' },
  },
);

const SignUpStack = createStackNavigator(
  {
    Signup_First: { screen: FirstScreen },
    Signup_Second: { screen: SecondScreen },
    Signup_Third: { screen: ThirdScreen },
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
    Main: { screen: MainTabNavigator },
  },
  {
    transitionConfig: () => fromRight(500),
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