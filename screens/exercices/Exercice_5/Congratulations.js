import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";

import { connect } from "react-redux";
import { updateState_Ex5 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex6 } from "./../../../redux-persist/redux/exercices";

class Exercice_5_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_5: "completed",
      exercice_state_6: "locked"
    };
  }

  handleSubmit = () => {
    const exercice_state_5 = this.state;
    this.setState({ exercice_state_5: exercice_state_5 });
    this.props.dispatch(updateState_Ex5(this.state.exercice_state_5));

    const exercice_state_6 = this.state;
    this.setState({ exercice_state_6: exercice_state_6 });
    this.props.dispatch(updateState_Ex6(this.state.exercice_state_6));

    this.props.navigation.push("Home");
  };

  render() {
    return (
      <View style={styles.container_background_inverted}>
        <StatusBar hidden />

        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day5_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header}>Congratulations!</Text>
              <Text style={styles.text}>
                {"\n"}You just completed the first step to change your habits: identifying your situational triggers. We will build on them later on in the program!
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

export default connect(mapStateToProps)(Exercice_5_Congratulations);
