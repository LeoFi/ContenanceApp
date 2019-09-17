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

import { connect } from "react-redux";
import { updateState_Ex19 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex20 } from "./../../../redux-persist/redux/exercices";

class Exercice_19_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_19: "completed",
      exercice_state_20: "locked"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_19 === "DONE" ||
      this.props.exercices.exercice_state_19 === "completed"
    ) {
    } else {
      const { exercice_state_19 } = this.state;
      this.setState({ exercice_state_19: exercice_state_19 });
      this.props.dispatch(updateState_Ex19(this.state.exercice_state_19));
    }

    if (this.props.exercices.exercice_state_20 === undefined) {
      const { exercice_state_20 } = this.state;
      this.setState({ exercice_state_20: exercice_state_20 });
      this.props.dispatch(updateState_Ex20(this.state.exercice_state_20));
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
              source={require("../../../assets/images/Day19_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}Today, you discovered how to consciously use your
                smartphone in a social situation!
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
  exercices: state.exercices
});

export default connect(mapStateToProps)(Exercice_19_Congratulations);
