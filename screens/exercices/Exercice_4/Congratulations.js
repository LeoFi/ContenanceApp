import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground
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
    this.props.navigation.navigate("Anchor");
  };

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/pink_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback style={styles.scroll}>
              <View style={styles.container_scroll}>
                <Text style={styles.header}>Congratulations!</Text>
                <Text style={styles.text}>
                  {"\n"}Today, you discovered why you might feel stressed after being on the smartphone.
                  {"\n"}{"\n"}Continue with your first reflection.
                </Text>

                <View style={styles.bottom}>
                  <PrimaryButton
                    label="Continue"
                    onPress={this.handleSubmit}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  exercices: state.exercices
});

export default connect(mapStateToProps)(Exercice_4_Congratulations);
