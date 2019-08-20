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
import { updateState_Ex16 } from "./../../../redux-persist/redux/exercices"
import { updateState_Ex17 } from "./../../../redux-persist/redux/exercices"

class Exercice_16_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_16: "completed",
      exercice_state_17: "locked"
    };
  }

 
  handleSubmit = () => {
    const { exercice_state_16 } = this.state;
    this.setState({ exercice_state_16: exercice_state_16 });
    this.props.dispatch(updateState_Ex16(this.state.exercice_state_16));

    const { exercice_state_17 } = this.state;
    this.setState({ exercice_state_17: exercice_state_17 });
    this.props.dispatch(updateState_Ex17(this.state.exercice_state_17));

    this.props.navigation.push("Intro_Screen_PM1");
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
                <Text style={styles.header}>Congratulations!</Text>
                <Text style={styles.text}>
                  {"\n"}Today, you discovered how to take care of your brain in empty moments!
                  {"\n"}{"\n"}Continue today's exercise with your fourth reflection.
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

export default connect(mapStateToProps)(Exercice_16_Congratulations);
