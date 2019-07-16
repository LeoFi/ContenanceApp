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
import { updateState_Ex3 } from "./../../../redux-persist/redux/exercices"

class Exercice_3_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_3: "new",
    };
  }

  handleSubmit = () => {
    const { exercice_state_3 } = this.state;
    this.setState({ exercice_state_3: exercice_state_3 });
    this.props.dispatch(updateState_Ex3(this.state.exercice_state_3));
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
                  {"\n"}You now have heard of the three factors of the Solution
                  Triangle to improve your relationship with your smartphone.
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
  exercices: state.exercices
});

export default connect(mapStateToProps)(Exercice_3_Congratulations);
