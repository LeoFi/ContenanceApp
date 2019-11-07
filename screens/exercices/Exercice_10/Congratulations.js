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
import { updateState_Ex10 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex11 } from "./../../../redux-persist/redux/exercices";

class Exercice_10_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_10: "completed",
      exercice_state_11: "locked"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_10 === "DONE" ||
      this.props.exercices.exercice_state_10 === "completed"
    ) {
    } else {
      const { exercice_state_10 } = this.state;
      this.setState({ exercice_state_10: exercice_state_10 });
      this.props.dispatch(updateState_Ex10(this.state.exercice_state_10));

      var date = new Date();
      var locales = ["en-US"];
      var options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      var Exercise_10_Done = date.toLocaleString(locales, options);
      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Exercise_10_Done: Exercise_10_Done
        });
    }

    if (this.props.exercices.exercice_state_11 === undefined) {
      const { exercice_state_11 } = this.state;
      this.setState({ exercice_state_11: exercice_state_11 });
      this.props.dispatch(updateState_Ex11(this.state.exercice_state_11));
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
              source={require("../../../assets/images/Day10_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}Today, you discovered how your smartphone can be a tool to
                put your values into practice!
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

export default connect(mapStateToProps)(Exercice_10_Congratulations);
