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
    const { exercice_state_19 } = this.state;
    this.setState({ exercice_state_19: exercice_state_19 });
    this.props.dispatch(updateState_Ex19(this.state.exercice_state_19));

    const { exercice_state_20 } = this.state;
    this.setState({ exercice_state_20: exercice_state_20 });
    this.props.dispatch(updateState_Ex20(this.state.exercice_state_20));

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
              <Text style={styles.header}>Congratulations!</Text>
              <Text style={styles.text}>
                {"\n"}Today, you discovered how to consciously use your smartphone in a social situation!
              </Text>

              <View style={styles.tap_pos_relative}>
                <PrimaryButton label="Done" onPress={this.handleSubmit} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  exercices: state.exercices
});

export default connect(mapStateToProps)(Exercice_19_Congratulations);
