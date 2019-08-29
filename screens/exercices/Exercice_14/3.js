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
import * as firebase from "firebase";
import { connect } from "react-redux";
import {
  Update_Obstacle1_D14,
  Update_Obstacle2_D14,
  Update_Obstacle3_D14
} from "../../../redux-persist/redux/user_values";

class Exercice_14_3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Obstacle1_D14: this.props.user_values.Obstacle1_D14 || "",
      Obstacle2_D14: this.props.user_values.Obstacle2_D14 || "",
      Obstacle3_D14: this.props.user_values.Obstacle3_D14 || ""
    };
  }

  handleChange_Advice1 = Obstacle1_D14 => {
    this.setState({ Obstacle1_D14 });
  };

  handleChange_Advice2 = Obstacle2_D14 => {
    this.setState({ Obstacle2_D14 });
  };

  handleChange_Advice3 = Obstacle3_D14 => {
    this.setState({ Obstacle3_D14 });
  };

  handleSubmit = () => {
    const { Obstacle1_D14 } = this.state;
    const { Obstacle2_D14 } = this.state;
    const { Obstacle3_D14 } = this.state;
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        Obstacle1_D14: Obstacle1_D14,
        Obstacle2_D14: Obstacle2_D14,
        Obstacle3_D14: Obstacle3_D14
      });
    this.props.dispatch(Update_Obstacle1_D14(this.state.Obstacle1_D14));
    this.props.dispatch(Update_Obstacle2_D14(this.state.Obstacle2_D14));
    this.props.dispatch(Update_Obstacle3_D14(this.state.Obstacle3_D14));
    this.props.navigation.navigate("Exercice_14_4");
  };

  render() {
    return (
      <View style={{ backgroundColor: "#F4F1DE", flex: 1 }}>
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TouchableWithoutFeedback style={styles.scroll}>
              <View style={styles.container_top}>
                <Text style={styles.sub_header}>It’s your turn!</Text>
                <Text style={styles.text}>
                  Define your three own obstacles.
                  {"\n"}
                  {"\n"}
                  {this.props.user_values.NewHabitCommit_D13}
                </Text>

                <View style={{ justifyContent: "flex-start", paddingTop: 20 }}>
                  <TextInput
                    style={styles.codeInput}
                    onChangeText={this.handleChange_Advice1}
                    value={this.state.Obstacle1_D14}
                    placeholder="Write down first obstacle"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                  />
                  <TextInput
                    style={styles.codeInput}
                    onChangeText={this.handleChange_Advice2}
                    value={this.state.Obstacle2_D14}
                    placeholder="Write down second obstacle"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                  />
                  <TextInput
                    style={styles.codeInput}
                    onChangeText={this.handleChange_Advice3}
                    value={this.state.Obstacle3_D14}
                    placeholder="Write down third obstacle"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
        <View style={styles.bottom_button}>
                  <PrimaryButton
                    label="Continue"
                    disabled={
                      !this.state.Obstacle1_D14 ||
                      !this.state.Obstacle2_D14 ||
                      !this.state.Obstacle3_D14
                    }
                    onPress={this.handleSubmit}
                  />
                </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_14_3);
