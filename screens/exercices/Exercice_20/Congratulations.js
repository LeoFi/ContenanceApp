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
import { updateState_Ex20 } from "./../../../redux-persist/redux/exercices"
import { updateState_Ex21 } from "./../../../redux-persist/redux/exercices"

class Exercice_20_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_20: "completed",
      exercice_state_21: "locked"
    };
  }

 
  handleSubmit = () => {
    const { exercice_state_20 } = this.state;
    this.setState({ exercice_state_20: exercice_state_20 });
    this.props.dispatch(updateState_Ex20(this.state.exercice_state_20));

    const { exercice_state_21 } = this.state;
    this.setState({ exercice_state_21: exercice_state_21 });
    this.props.dispatch(updateState_Ex21(this.state.exercice_state_21));

    this.props.navigation.push("Intro_Screen_PM5");
  };

  render() {
    return (
      <View style={styles.container_background_inverted}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day4_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
                <Text style={styles.header}>Congratulations!</Text>
                <Text style={styles.text}>
                  {"\n"} Today, you discovered how to consciously lose yourself again.
                  {"\n"}{"\n"}Continue today’s exercise with your fifth reflection.
                </Text>

                <View style={styles.tap_pos_relative}>
                  <PrimaryButton
                    label="Continue"
                    onPress={this.handleSubmit}
                  />
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

export default connect(mapStateToProps)(Exercice_20_Congratulations);
