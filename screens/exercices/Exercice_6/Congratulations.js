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
import { updateState_Ex6 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex7 } from "./../../../redux-persist/redux/exercices";

class Exercice_6_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_6: "completed",
      exercice_state_7: "locked"
    };
  }

  handleSubmit = () => {
    const { exercice_state_6 } = this.state;
    this.setState({ exercice_state_6: exercice_state_6 });
    this.props.dispatch(updateState_Ex6(this.state.exercice_state_6));

    if (this.props.exercices.exercice_state_7 === undefined) {
      const exercice_state_7 = this.state.exercice_state_7;
      this.setState({ exercice_state_7: exercice_state_7 });
      this.props.dispatch(updateState_Ex7(this.state.exercice_state_7));
    } else {
      //
    }
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
              source={require("../../../assets/images/Day6_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}Today, you discovered how emotions can trigger you to
                unconsciously use your smartphone. We will come back to this at
                a later point.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
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

export default connect(mapStateToProps)(Exercice_6_Congratulations);
