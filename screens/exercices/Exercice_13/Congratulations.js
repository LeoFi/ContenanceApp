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
import { updateState_Ex13 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex14 } from "./../../../redux-persist/redux/exercices";

class Exercice_13_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_13: "completed",
      exercice_state_14: "locked"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_13 === "DONE" ||
      this.props.exercices.exercice_state_13 === "completed"
    ) {
    } else {
      const exercice_state_13 = this.state.exercice_state_13;
      this.setState({ exercice_state_13: exercice_state_13 });
      this.props.dispatch(updateState_Ex13(this.state.exercice_state_13));

      var date = new Date();
      var locales = ["en-US"];
      var options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      var Exercise_13_Done = date.toLocaleString(locales, options);
      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Exercise_13_Done: Exercise_13_Done
        });
    }

    if (this.props.exercices.exercice_state_14 === undefined) {
      const exercice_state_14 = this.state.exercice_state_14;
      this.setState({ exercice_state_14: exercice_state_14 });
      this.props.dispatch(updateState_Ex14(this.state.exercice_state_14));
    } else {
      //
    }
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
              source={require("../../../assets/images/Day13_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}Now you know the secret If-then recipe for new habits.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Done"
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

export default connect(mapStateToProps)(Exercice_13_Congratulations);
