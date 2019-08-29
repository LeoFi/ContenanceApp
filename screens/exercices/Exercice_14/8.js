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
import { Update_CopingStrategy3_D14 } from "../../../redux-persist/redux/user_values";

class Exercice_14_8 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CopingStrategy3_D14: this.props.user_values.CopingStrategy3_D14 || ""
    };
  }

  handleChange_Advice1 = CopingStrategy3_D14 => {
    this.setState({ CopingStrategy3_D14 });
  };

  handleSubmit = () => {
    const { CopingStrategy3_D14 } = this.state;
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        CopingStrategy3_D14: CopingStrategy3_D14
      });
    this.props.dispatch(
      Update_CopingStrategy3_D14(this.state.CopingStrategy3_D14)
    );
    this.props.navigation.navigate("Exercice_14_Aha_1");
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
                  Define your own strategies to still realize your plan.
                </Text>

                <View>
                  <Text style={styles.text}>
                    If {this.props.user_values.Obstacle3_D14}, then:
                  </Text>
                  <View
                    style={{ flex: 1, justifyContent: "center", top: -100 }}
                  >
                    <TextInput
                      style={styles.codeInput}
                      onChangeText={this.handleChange_Advice1}
                      value={this.state.CopingStrategy3_D14}
                      placeholder="What can be your third strategy?"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="default"
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Continue"
            disabled={!this.state.CopingStrategy3_D14}
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

export default connect(mapStateToProps)(Exercice_14_8);
