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
import { updateState_Ex5 } from "./../../../redux-persist/redux/exercices"

class Exercice_4_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_4: "completed",
      exercice_state_5: "locked"
    };
  }

 
  handleSubmit = () => {
    const { exercice_state_4 } = this.state;
    this.setState({ exercice_state_4: exercice_state_4 });
    this.props.dispatch(updateState_Ex4(this.state.exercice_state_4));

    const { exercice_state_5 } = this.state;
    this.setState({ exercice_state_5: exercice_state_5 });
    this.props.dispatch(updateState_Ex5(this.state.exercice_state_5));

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
                <Text style={styles.header_light}>Congratulations!</Text>
                <Text style={styles.text_light}>
                  {"\n"}Today, you discovered why you might feel stressed after being on the smartphone.
                  {"\n"}{"\n"}Continue with your first reflection.
                </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Continue"
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

export default connect(mapStateToProps)(Exercice_4_Congratulations);
