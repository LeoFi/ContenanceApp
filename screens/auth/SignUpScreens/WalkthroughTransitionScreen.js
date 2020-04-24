import React from "react";
import { View, Text, TouchableWithoutFeedback, Dimensions } from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  SwitchButton,
  LinkText
} from "../../../components/AppComponents";
import { styles } from "./style";

import * as Amplitude from "expo-analytics-amplitude";

import { Svg, Path } from "react-native-svg";

export default class WalkthroughTransitionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    Amplitude.logEvent("Walkthrough Transition Screen");
  }

  render() {
    return (
      <>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate("AssessmentGoals");
          }}
        >
          <View
            style={{
              paddingTop: 80,
              paddingLeft: 30,
              paddingRight: 30,
              flex: 1,
              alignItems: "center",
              alignSelf: "stretch",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flex: 4,
                width: Dimensions.get("window").width - 60,
                justifyContent: "space-between"
              }}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={styles.text}>
                  Before start, answer these few questions to start creating your 20-day program.
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                width: Dimensions.get("window").width - 60,
                justifyContent: "flex-end",
                paddingBottom: 40
              }}
            >
              <Text style={styles.tap_text}>TAP ANYWHERE TO CONTINUE</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}
