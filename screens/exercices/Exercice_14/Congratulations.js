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
import { updateState_Ex14 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex15 } from "./../../../redux-persist/redux/exercices";

class Exercice_14_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_14: "completed",
      exercice_state_15: "locked"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_14 === "DONE" ||
      this.props.exercices.exercice_state_14 === "completed"
    ) {
    } else {
      const { exercice_state_14 } = this.state;
      this.setState({ exercice_state_14: exercice_state_14 });
      this.props.dispatch(updateState_Ex14(this.state.exercice_state_14));

      var date = new Date();
      var locales = ["en-US"];
      var options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      var Exercise_14_Done = date.toLocaleString(locales, options);
      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Exercise_14_Done: Exercise_14_Done
        });
    }

    if (this.props.exercices.exercice_state_15 === undefined) {
      const { exercice_state_15 } = this.state;
      this.setState({ exercice_state_15: exercice_state_15 });
      this.props.dispatch(updateState_Ex15(this.state.exercice_state_15));
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
              source={require("../../../assets/images/Day14_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}Today, you discovered how to make your plans even
                stronger.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Done"
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

export default connect(mapStateToProps)(Exercice_14_Congratulations);
