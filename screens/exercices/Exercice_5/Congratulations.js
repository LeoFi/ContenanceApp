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
import * as Progress from "react-native-progress";


import { connect } from "react-redux";
import { updateState_Ex5 } from "./../../../redux-persist/redux/exercices"
import { updateStartingDate } from "./../../../redux-persist/redux/user"


class Exercice_5_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_5: "completed",
    };
  }
 
  handleSubmit = () => {
    const exercice_state_1 = this.state;
    this.setState({ exercice_state_1: exercice_state_1 });
    this.props.dispatch(updateState_Ex1(this.state.exercice_state_1));
    this.props.navigation.push("Home");
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
                  {"\n"}You finished your first exercise. Now you know why this
                  training is called Contenance!
                </Text>

                <View style={styles.bottom}>
                  <PrimaryButton
                    label="Done"
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
  user: state.user,
  exercices: state.exercices
});

export default connect(mapStateToProps)(Exercice_5_Congratulations);
