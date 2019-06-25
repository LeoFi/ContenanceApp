import React from 'react';
import {Notifications} from 'expo';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import MainTabNavigator from './MainTabNavigator';

import OnboardingScreen from '../screens/auth/OnboardingScreen';
import StartScreen from '../screens/auth/StartScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';


///this is the code that makes the navigation happen

const IntroStack = createStackNavigator({
  Onboarding: OnboardingScreen,
  Start: StartScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
  Forgot:  ForgotPasswordScreen,

});


const MainStack = createSwitchNavigator({
  intro:{screen:IntroStack},
  main: {screen: MainTabNavigator}

});

const AppContainer = createAppContainer(MainStack);

export default class RootNavigation extends React.Component {
  render() {
    return <AppContainer />;
  }
}