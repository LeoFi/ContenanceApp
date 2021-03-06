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
import * as Progress from "react-native-progress";

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
    const exercice_state_17 = this.state.exercice_state_17;
    this.setState({ exercice_state_17: exercice_state_17 });
    this.props.dispatch(updateState_Ex17(this.state.exercice_state_17));

    const exercice_state_18 = this.state.exercice_state_18;
    this.setState({ exercice_state_18: exercice_state_18 });
    this.props.dispatch(updateState_Ex18(this.state.exercice_state_18));

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
              source={require("../../../assets/images/Day1_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header}>Congratulations!</Text>
              <Text style={styles.text}>
                {"\n"}Today, you got to know tools that you can immediately use to reduce distractions by your smartphone.
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

export default connect(mapStateToProps)(Exercice_17_Congratulations);
