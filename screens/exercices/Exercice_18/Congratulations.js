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
import { updateState_Ex18 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex19 } from "./../../../redux-persist/redux/exercices";

class Exercice_18_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_18: "completed",
      exercice_state_19: "locked"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_18 === "DONE" ||
      this.props.exercices.exercice_state_18 === "completed"
    ) {
    } else {
      const { exercice_state_18 } = this.state;
      this.setState({ exercice_state_18: exercice_state_18 });
      this.props.dispatch(updateState_Ex18(this.state.exercice_state_18));

      var date = new Date();
      var locales = ["en-US"];
      var options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      var Exercise_18_Done = date.toLocaleString(locales, options);
      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Exercise_18_Done: Exercise_18_Done
        });
    }

    if (this.props.exercices.exercice_state_19 === undefined) {
      const { exercice_state_19 } = this.state;
      this.setState({ exercice_state_19: exercice_state_19 });
      this.props.dispatch(updateState_Ex19(this.state.exercice_state_19));
    } else {
      //
    }
    this.props.navigation.push("Home");
    //this.props.navigation.goBack()
  };

  render() {
    return (
      <View style={styles.container_background_inverted}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day18_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}Today, you consciously defined GO and NO GO situations for
                your smartphone use.
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

export default connect(mapStateToProps)(Exercice_18_Congratulations);
