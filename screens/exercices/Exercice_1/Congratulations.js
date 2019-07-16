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

import Moment from "react-moment";
import { connect } from "react-redux";
import { updateState_Ex1 } from "./../../../redux-persist/redux/exercices";
import { updateStartingDate } from "./../../../redux-persist/redux/user";

class Exercice_1_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_1: "completed"
      //starting_date: Moment(startdate, "DD-MM-YYYY"),
    };
  }

  handleSubmit = () => {
    const exercice_state_1 = this.state;
    const starting_date = this.state;
    this.setState({ exercice_state_1: exercice_state_1 });
    this.setState({ starting_date: starting_date });
    this.props.dispatch(updateState_Ex1(this.state.exercice_state_1));
    this.props.dispatch(updateStartingDate(this.state.starting_date));
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
                {"\n"}You finished your first exercise. Now you know why this
                training is called Contenance!
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
  user: state.user,
  exercices: state.exercices
});

export default connect(mapStateToProps)(Exercice_1_Congratulations);
