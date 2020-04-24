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
import { updateState_Ex17 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex18 } from "./../../../redux-persist/redux/exercices";

class Exercice_17_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_17: "completed",
      exercice_state_18: "locked"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_17 === "DONE" ||
      this.props.exercices.exercice_state_17 === "completed"
    ) {
    } else {
      const exercice_state_17 = this.state.exercice_state_17;
      this.setState({ exercice_state_17: exercice_state_17 });
      this.props.dispatch(updateState_Ex17(this.state.exercice_state_17));

      var date = new Date();
      var locales = ["en-US"];
      var options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      var Exercise_17_Done = date.toLocaleString(locales, options);
      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Exercise_17_Done: Exercise_17_Done
        });
    }

    if (this.props.exercices.exercice_state_18 === undefined) {
      const exercice_state_18 = this.state.exercice_state_18;
      this.setState({ exercice_state_18: exercice_state_18 });
      this.props.dispatch(updateState_Ex18(this.state.exercice_state_18));
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
              source={require("../../../assets/images/Day17_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}Today, you got to know tools that you can immediately use
                to reduce distractions by your smartphone.
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

export default connect(mapStateToProps)(Exercice_17_Congratulations);
