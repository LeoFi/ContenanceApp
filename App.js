import React from "react";
import {
  Platform,
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
import * as Amplitude from "expo-analytics-amplitude";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux-persist/store";

import RootNavigation from "./navigation/AppNavigator";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
      Amplitude.initialize(ApiKeys.AmplitudeConfig.apiKey);
    }
  }

  componentDidMount() {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true
        });
      });
    //Amplitude.logEvent("Test Number 2");
  }

  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        //Alert.alert("Hello"),
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={this.renderLoading()}>
            <View style={styles.container}>
              {Platform.OS === "ios" && <StatusBar barStyle="default" />}
              {Platform.OS === "android" && (
                <View style={styles.statusBarUnderlay} />
              )}
              <RootNavigation />
            </View>
          </PersistGate>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      // Load the SVG Illustrations
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
        "roboto-bold-italic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
        "roboto-italic": require("./assets/fonts/Roboto-Italic.ttf"),
        "heebo-black": require("./assets/fonts/Heebo-Black.ttf"),
        "heebo-thin": require("./assets/fonts/Heebo-Thin.ttf"),
        "fira-light": require("./assets/fonts/FiraSans-Light.ttf"),
        "fira-medium": require("./assets/fonts/FiraSans-Medium.ttf"),
        "fira-bold": require("./assets/fonts/FiraSans-Bold.ttf"),
        "fira-extrabold": require("./assets/fonts/FiraSans-ExtraBold.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDF7"
  }
});
