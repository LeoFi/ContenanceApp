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
import { updateState_Ex4 } from "./../../../redux-persist/redux/exercices"

class Exercice_4_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_4: "completed",
    };
  }

 
  handleSubmit = () => {
    const { exercice_state_4 } = this.state;
    this.setState({ exercice_state_4: exercice_state_4 });
    this.props.dispatch(updateState_Ex4(this.state.exercice_state_4));
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
              source={require("../../../assets/images/Day4_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
                <Text style={styles.header}>Congratulations!</Text>
                <Text style={styles.text}>
                  {"\n"}Today, you discovered why you might feel stressed after being on the smartphone.
                  {"\n"}{"\n"}Continue with your first reflection.
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

export default connect(mapStateToProps)(Exercice_4_Congratulations);
