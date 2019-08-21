import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { connect } from "react-redux";
import { styles } from "./style";

class Exercice_14_Challenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/beige_shape_inverted.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_14_Congratulations");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>
                The Challenge
                </Text>
                <Text style={styles.text}>
                  {"\n"}Until you come back tomorrow, do a test-run of one of your newly defined coping plans!
                  {"\n"}{"\n"}There might be challenges to realize my plan: {this.props.user_values.NewHabitCommit_D13}. But I am prepared.
                  {"\n"}{"\n"}<Text style={styles.intro_text_bold}>If {this.props.user_values.Obstacle1_D14}, then {this.props.user_values.CopingStrategy1_D14}.</Text>.
                  {"\n"}{"\n"}<Text style={styles.intro_text_bold}>If {this.props.user_values.Obstacle2_D14}, then {this.props.user_values.CopingStrategy2_D14}.</Text>.
                  {"\n"}{"\n"}<Text style={styles.intro_text_bold}>If {this.props.user_values.Obstacle3_D14}, then {this.props.user_values.CopingStrategy3_D14}.</Text>.
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_14_Challenge);
