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
import { updateState_Ex7 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex8 } from "./../../../redux-persist/redux/exercices";

class Exercice_7_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_7: "completed",
      exercice_state_8: "locked"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_7 === "DONE" ||
      this.props.exercices.exercice_state_7 === "completed"
    ) {
    } else {
      const { exercice_state_7 } = this.state;
      this.setState({ exercice_state_7: exercice_state_7 });
      this.props.dispatch(updateState_Ex7(this.state.exercice_state_7));

      var date = new Date();
      var locales = ["en-US"];
      var options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      var Exercise_7_Done = date.toLocaleString(locales, options);
      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Exercise_7_Done: Exercise_7_Done
        });
    }

    if (this.props.exercices.exercice_state_8 === undefined) {
      const { exercice_state_8 } = this.state;
      this.setState({ exercice_state_8: exercice_state_8 });
      this.props.dispatch(updateState_Ex8(this.state.exercice_state_8));
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
              source={require("../../../assets/images/Day7_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}You now know how bottomless apps are designed to pull you
                in and make you get lost in them.
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

export default connect(mapStateToProps)(Exercice_7_Congratulations);
