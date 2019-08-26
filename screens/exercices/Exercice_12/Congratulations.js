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
import { updateState_Ex12, updateState_Ex13 } from "./../../../redux-persist/redux/exercices"

class Exercice_12_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_12: "completed",
      exercice_state_13: "locked"
    };
  }

 
  handleSubmit = () => {
    const { exercice_state_12 } = this.state;
    this.setState({ exercice_state_12: exercice_state_12 });
    this.props.dispatch(updateState_Ex12(this.state.exercice_state_12));

    const { exercice_state_13 } = this.state;
    this.setState({ exercice_state_13: exercice_state_13 });
    this.props.dispatch(updateState_Ex13(this.state.exercice_state_13));

    this.props.navigation.push("Intro_Screen_PM3");
  };

  render() {
    return (
      <View style={styles.container_background_inverted}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day12_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
                <Text style={styles.header_light}>Congratulations!</Text>
                <Text style={styles.text_light}>
                  {"\n"}Today, you discovered how to accept  emotional triggers and impulses.
                  {"\n"}{"\n"}Continue today’s exercise with your third reflection.
                </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom}>
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

export default connect(mapStateToProps)(Exercice_12_Congratulations);
