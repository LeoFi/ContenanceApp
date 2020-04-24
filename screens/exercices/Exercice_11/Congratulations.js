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
import { updateState_Ex11 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex12 } from "./../../../redux-persist/redux/exercices";

class Exercice_11_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_11: "completed",
      exercice_state_12: "locked"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_11 === "DONE" ||
      this.props.exercices.exercice_state_11 === "completed"
    ) {
    } else {
      const { exercice_state_11 } = this.state;
      this.setState({ exercice_state_11: exercice_state_11 });
      this.props.dispatch(updateState_Ex11(this.state.exercice_state_11));

      var date = new Date();
      var locales = ["en-US"];
      var options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      var Exercise_11_Done = date.toLocaleString(locales, options);
      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Exercise_11_Done: Exercise_11_Done
        });
    }

    if (this.props.exercices.exercice_state_12 === undefined) {
      const { exercice_state_12 } = this.state;
      this.setState({ exercice_state_12: exercice_state_12 });
      this.props.dispatch(updateState_Ex12(this.state.exercice_state_12));
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
              source={require("../../../assets/images/Day11_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}Today, you discovered a trick to reconnect to the present
                moment if you got lost.
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

export default connect(mapStateToProps)(Exercice_11_Congratulations);
