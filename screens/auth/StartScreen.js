import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { PrimaryButton, LinkText } from "./../../components/AppComponents";
import { Svg, Path } from "react-native-svg";

import { connect } from "react-redux";
import { updateUID } from "./../../redux-persist/redux/user";
import * as firebase from "firebase";
import * as Amplitude from "expo-analytics-amplitude";

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userUID: undefined
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        var that = this;
        const uid = firebase.auth().currentUser.uid;
        const uidString = uid.toString();

        that.setState({ userUID: uidString });
        that.props.dispatch(updateUID(that.state.userUID));
      } else {
        //Alert.alert("User not logged");
      }
    });
    Amplitude.logEvent("Start Screen");
  }

  onStartPress = () => {
    this.props.navigation.navigate("IntroOnboarding");
    Amplitude.logEvent("User Sign Up");
  };

  render() {
    
    return (
      <>
        <View style={styles.container}>
          <Svg width="67" height="67" viewBox="0 0 67 67" fill="none">
            <Path
              d="M67 33.5C67 52.0015 52.0015 67 33.5 67C14.9985 67 0 52.0015 0 33.5C0 14.9985 14.9985 0 33.5 0C52.0015 0 67 14.9985 67 33.5ZM8.97035 33.5C8.97035 47.0474 19.9526 58.0297 33.5 58.0297C47.0474 58.0297 58.0297 47.0474 58.0297 33.5C58.0297 19.9526 47.0474 8.97035 33.5 8.97035C19.9526 8.97035 8.97035 19.9526 8.97035 33.5Z"
              fill="#ECE6C4"
            />
            <Path
              d="M33.5 4.03031C33.5 1.80443 35.3109 -0.0250132 37.5207 0.242137C42.4068 0.832837 47.1201 2.49529 51.3159 5.13026C56.6537 8.48232 60.9375 13.2723 63.6751 18.9497C66.4128 24.6272 67.4932 30.9618 66.7922 37.2257C66.2411 42.1496 64.607 46.8728 62.0266 51.0638C60.8596 52.9592 58.3005 53.2369 56.5588 51.8509C54.8172 50.4648 54.5613 47.9409 55.6552 46.0024C57.3308 43.0331 58.3993 39.7447 58.7816 36.3292C59.3139 31.5725 58.4935 26.7621 56.4145 22.4507C54.3356 18.1394 51.0826 14.502 47.0292 11.9565C44.1186 10.1287 40.8803 8.91711 37.5135 8.3792C35.3155 8.02802 33.5 6.25618 33.5 4.03031Z"
              fill="#F87B7B"
            />
          </Svg>

          <Text style={styles.logo}>
            not less{"\n"}but better
          </Text>
          <Text style={styles.text}>
          Your guide towards conscious smartphone use
            </Text>

        </View>
        <View style={styles.bottom}>
        <PrimaryButton
            label="Get Started"
            isBottom={true}
            onPress={this.onStartPress}
          />
          <View style={{height: 15}}/>
          <LinkText
            textLabel="Do you already have an account? "
            linkLabel="Log In"
            linkOnPress={() => {
              Amplitude.logEvent("User Sign In");
              this.props.navigation.push("Login")
            }}
          />
          </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(StartScreen);

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  bottom: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-end"
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    width: "100%"
  },
  link_text: {
    color: "#2C3B51",
    fontSize: 13,
    lineHeight: 25,
    textAlign: "center",
    paddingTop: 15,
    fontFamily: "roboto-regular",
    width: "100%"
  },
  logo: {
    paddingTop: 40,
    paddingBottom: 20,
    fontFamily: "fira-bold",
    fontSize: 47,
    lineHeight:50,
    color: "#2C3B51",
    textAlign: "center"
  }
});
