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
import { updateState_Ex8 } from "./../../../redux-persist/redux/exercices";

class Exercice_8_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_8: "completed"
    };
  }

  handleSubmit = () => {
    const { exercice_state_8 } = this.state;
    this.setState({ exercice_state_8: exercice_state_8 });
    this.props.dispatch(updateState_Ex8(this.state.exercice_state_8));

    this.props.navigation.push("Intro_Screen_PM2");
  };

  render() {
    return (
      <View style={styles.container_background_inverted}>
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day8_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}You discovered how your smartphone can be a tool for
                mindfulness.
                {"\n"}
                {"\n"}Continue today’s exercise with your second reflection.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
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

export default connect(mapStateToProps)(Exercice_8_Congratulations);
