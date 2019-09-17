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
import { updateState_Ex3 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex4 } from "./../../../redux-persist/redux/exercices";

class Exercice_3_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_3: "completed",
      exercice_state_4: "locked"
    };
  }

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_3 === "DONE" ||
      this.props.exercices.exercice_state_3 === "completed"
    ) {
    } else {
      const { exercice_state_3 } = this.state;
      this.setState({ exercice_state_3: exercice_state_3 });
      this.props.dispatch(updateState_Ex3(this.state.exercice_state_3));
    }

    if (this.props.exercices.exercice_state_4 === undefined) {
      const { exercice_state_4 } = this.state;
      this.setState({ exercice_state_4: exercice_state_4 });
      this.props.dispatch(updateState_Ex4(this.state.exercice_state_4));
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
              source={require("../../../assets/images/Day3_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}You now have heard of the three factors of the Solution
                Triangle to improve your relationship with your smartphone.
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

export default connect(mapStateToProps)(Exercice_3_Congratulations);
