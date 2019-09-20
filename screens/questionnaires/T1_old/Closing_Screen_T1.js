import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  StatusBar
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { Svg, Path, Circle } from "react-native-svg";
import { updateOnboarding } from "./../../../redux-persist/redux/user";

class Closing_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname,
      onboardingDone: true
    };
  }

  handleSubmit = () => {
     
    const onboardingDone = this.state.onboardingDone;
    this.setState({ onboardingDone: onboardingDone });
    this.props.dispatch(updateOnboarding(this.state.onboardingDone));
    firebase
      .database()
      .ref()
      .child("accounts")
      .child(this.props.user.UID)
      .update({
        onboardingDone
      });
    this.props.navigation.navigate("Home");
  };

  render() {
    const screenHeight = Dimensions.get("window").height;

    return (
      <View
        style={{ height: screenHeight, width: Dimensions.get("window").width }}
      >
        <StatusBar hidden />
        <ScrollView
          style={styles.container_scrollview}
          contentContainerStyle={styles.container_scrollview_content}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              width: Dimensions.get("window").width - 60
            }}
          >
            <View style={{ alignSelf: "center", paddingBottom: 30 }}>
              <Svg
                width={"87"}
                height={"87"}
                viewBox="0 0 87 87"
                fill="none"
              >
                <Path
                  d="M56.2762 30.0617C57.5856 28.6461 59.7085 28.6461 61.0179 30.0617C62.3274 31.4774 62.3274 33.7726 61.0179 35.1883L40.9003 56.9383C39.5909 58.3539 37.4679 58.3539 36.1585 56.9383L24.9821 44.8549C23.6726 43.4393 23.6726 41.1441 24.9821 39.7284C26.2915 38.3128 28.4144 38.3128 29.7238 39.7284L38.5294 49.2485L56.2762 30.0617Z"
                  fill="white"
                />
                <Path
                  d="M56.2762 30.0617C57.5856 28.6461 59.7085 28.6461 61.0179 30.0617C62.3274 31.4774 62.3274 33.7726 61.0179 35.1883L40.9003 56.9383C39.5909 58.3539 37.4679 58.3539 36.1585 56.9383L24.9821 44.8549C23.6726 43.4393 23.6726 41.1441 24.9821 39.7284C26.2915 38.3128 28.4144 38.3128 29.7238 39.7284L38.5294 49.2485L56.2762 30.0617Z"
                  fill="#2C3B51"
                />
                <Path
                  d="M56.2762 30.0617C57.5856 28.6461 59.7085 28.6461 61.0179 30.0617C62.3274 31.4774 62.3274 33.7726 61.0179 35.1883L40.9003 56.9383C39.5909 58.3539 37.4679 58.3539 36.1585 56.9383L24.9821 44.8549C23.6726 43.4393 23.6726 41.1441 24.9821 39.7284C26.2915 38.3128 28.4144 38.3128 29.7238 39.7284L38.5294 49.2485L56.2762 30.0617Z"
                  stroke="#F4F1DE"
                />
                <Circle
                  cx="43.5"
                  cy="43.5"
                  r="41"
                  stroke="#2C3B51"
                  stroke-width="5"
                />
              </Svg>
            </View>
            <Text style={styles.header_left}>
              Thank you, {this.props.user.nickname}.
            </Text>

            <Text style={styles.text_left}>
              {"\n"}You’re all set and ready to dive into the wide ocean.
              {"\n"}
              {"\n"}Enjoy your journey!
            </Text>
            <View style={{ flex: 1 }} />

            <View style={styles.bottom}>
              <PrimaryButton
                label="START EXERCISING"
                isBottom={true}
                onPress={this.handleSubmit}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Closing_Screen_T1);
