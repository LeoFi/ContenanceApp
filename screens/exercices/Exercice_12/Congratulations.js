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
  updateState_Ex12,
  updateState_Ex13,
  updateState_PM3
} from "./../../../redux-persist/redux/exercices";

class Exercice_12_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_12: "completed",
      exercice_state_13: "locked",
      exercice_state_PM3: "new"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_12 === "DONE" ||
      this.props.exercices.exercice_state_12 === "completed"
    ) {
    } else {
      const { exercice_state_12 } = this.state;
      this.setState({ exercice_state_12: exercice_state_12 });
      this.props.dispatch(updateState_Ex12(this.state.exercice_state_12));

      var date = new Date();
      var locales = ["en-US"];
      var options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      var Exercise_12_Done = date.toLocaleString(locales, options);
      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Exercise_12_Done: Exercise_12_Done
        });
    }

    if (this.props.exercices.exercice_state_13 === undefined) {
      const exercice_state_13 = this.state.exercice_state_13;
      this.setState({ exercice_state_13: exercice_state_13 });
      this.props.dispatch(updateState_Ex13(this.state.exercice_state_13));
    } else {
      //
    }

    if (this.props.exercices.exercice_state_PM3 === "completed") {
    } else {
      const exercice_state_PM3 = this.state.exercice_state_PM3;
      this.setState({ exercice_state_PM3: exercice_state_PM3 });
      this.props.dispatch(updateState_PM3(this.state.exercice_state_PM3));
    }

    this.props.navigation.push("Intro_Screen_PM3");
  };

  render() {
    return (
      <View style={styles.container_background_inverted}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day12_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}Today, you discovered how to accept emotional triggers and
                impulses.
                {"\n"}
                {"\n"}Continue today’s exercise with your third reflection.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Continue"
            style={{
              backgroundColor: "#F4F1DE",
              borderColor: "#F4F1DE",
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

export default connect(mapStateToProps)(Exercice_12_Congratulations);
