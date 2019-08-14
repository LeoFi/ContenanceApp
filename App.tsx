import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  ActivityIndicator
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import ApiKeys from "./constants/ApiKeys";
import * as firebase from "firebase";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux-persist/store";

import AppNavigator from "./navigation/AppNavigator";
// import MainTabNavigator from "./navigation/MainTabNavigator";

interface State  {
  isLoadingComplete: boolean;
  isAuthenticationReady: boolean;
  isAuthenticated: boolean;}

export default class App extends React.Component<{}, State> {

  state = {
    isLoadingComplete: false,
    isAuthenticationReady: false,
    isAuthenticated: false
  };

  componentWillMount() {

    // Initialize firebase...
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isAuthenticationReady: true });
      this.setState({ isAuthenticated: !!user });
    });
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync as any}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store as any}>
          <PersistGate persistor={persistor} loading={this.renderLoading()}>
            <View style={styles.container}>
              <StatusBar barStyle="default" />
              {/* {(this.state.isAuthenticated) ? <MainTabNavigator /> : <AppNavigator />} */}
              <AppNavigator />
            </View>
          </PersistGate>
        </Provider>
      );
    }
  }

  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );

  private loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        "roboto-black": require("./assets/fonts/Roboto-Black.ttf"),
        "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "heebo-black": require("./assets/fonts/Heebo-Black.ttf"),
        "heebo-thin": require("./assets/fonts/Heebo-Thin.ttf")
      })
    ]);
  };

  private handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  private handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F1DE"
  }
});
