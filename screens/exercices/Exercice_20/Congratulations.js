import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  Image
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as firebase from "firebase";
import { connect } from "react-redux";
import {
  updateState_Ex20,
  updateState_Ex21
} from "./../../../redux-persist/redux/exercices";

import * as Amplitude from "expo-analytics-amplitude";

class Exercice_20_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_20: "completed",
      exercice_state_21: "locked"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_20 === "DONE" ||
      this.props.exercices.exercice_state_20 === "completed"
    ) {
    } else {
      const { exercice_state_20 } = this.state;
      this.setState({ exercice_state_20: exercice_state_20 });
      this.props.dispatch(updateState_Ex20(this.state.exercice_state_20));

      var date = new Date();
      var locales = ["en-US"];
      var options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      var Exercise_20_Done = date.toLocaleString(locales, options);
      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Exercise_20_Done: Exercise_20_Done
        });
    }

    if (this.props.exercices.exercice_state_21 === undefined) {
      const exercice_state_21 = this.state.exercice_state_21;
      this.setState({ exercice_state_21: exercice_state_21 });
      this.props.dispatch(updateState_Ex21(this.state.exercice_state_21));
    } else {
      //
    }

    Amplitude.logEvent("Exercise 20 Finished");
    this.props.navigation.push("Home");
  };

  render() {
    return (
      <View style={styles.container_background_inverted}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day20_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"} Today, you discovered how to consciously lose yourself
                again.
                {"\n"}
                {"\n"}Continue today’s exercise with your fifth reflection.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Continue"
            style={{
              backgroundColor: "#FDFDF7",
              borderColor: "#FDFDF7",
              color: "#2C3B51"
            }}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  exercices: state.exercices,
  user: state.user
});

export default connect(mapStateToProps)(Exercice_20_Congratulations);
