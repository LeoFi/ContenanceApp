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
import { updateState_Ex10 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex11 } from "./../../../redux-persist/redux/exercices";

class Exercice_10_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_10: "completed",
      exercice_state_11: "locked"
    };
  }

  handleSubmit = () => {
    const { exercice_state_10 } = this.state;
    this.setState({ exercice_state_10: exercice_state_10 });
    this.props.dispatch(updateState_Ex10(this.state.exercice_state_10));

    const { exercice_state_11 } = this.state;
    this.setState({ exercice_state_11: exercice_state_11 });
    this.props.dispatch(updateState_Ex11(this.state.exercice_state_11));
    
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
              source={require("../../../assets/images/Day10_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header}>Congratulations!</Text>
              <Text style={styles.text}>
                {"\n"}Today, you discovered how your smartphone can be a tool to put your values into practice!
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

export default connect(mapStateToProps)(Exercice_10_Congratulations);
