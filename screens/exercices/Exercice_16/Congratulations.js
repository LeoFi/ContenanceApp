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
  updateState_Ex16,
  updateState_Ex17,
  updateState_PM4
} from "./../../../redux-persist/redux/exercices";

class Exercice_16_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_16: "completed",
      exercice_state_17: "locked",
      exercice_state_PM4: "new"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_16 === "DONE" ||
      this.props.exercices.exercice_state_16 === "completed"
    ) {
    } else {
      const { exercice_state_16 } = this.state;
      this.setState({ exercice_state_16: exercice_state_16 });
      this.props.dispatch(updateState_Ex16(this.state.exercice_state_16));

      var date = new Date();
      var locales = ["en-US"];
      var options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      var Exercise_16_Done = date.toLocaleString(locales, options);
      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Exercise_16_Done: Exercise_16_Done
        });
    }

    if (this.props.exercices.exercice_state_17 === undefined) {
      const exercice_state_17 = this.state.exercice_state_17;
      this.setState({ exercice_state_17: exercice_state_17 });
      this.props.dispatch(updateState_Ex17(this.state.exercice_state_17));
    } else {
      //
    }

    if (this.props.exercices.exercice_state_PM4 === "completed") {
    } else {
      const exercice_state_PM4 = this.state.exercice_state_PM4;
      this.setState({ exercice_state_PM4: exercice_state_PM4 });
      this.props.dispatch(updateState_PM4(this.state.exercice_state_PM4));
    }

    this.props.navigation.push("Intro_Screen_PM4");
  };

  render() {
    return (
      <View style={styles.container_background_inverted}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day16_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}Today, you discovered how to take care of your brain in
                empty moments!
                {"\n"}
                {"\n"}Continue today's exercise with your fourth reflection.
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

export default connect(mapStateToProps)(Exercice_16_Congratulations);
