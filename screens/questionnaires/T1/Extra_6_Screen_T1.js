import React from "react";
import {
  View,
  Text,
  TextACput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  TextInput,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import RadioGroup, {
  Radio
} from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";
import * as Progress from "react-native-progress";

import * as firebase from "firebase";

//this.props.navigation.navigate("Closing_Screen_T1");

import { connect } from "react-redux";
import { Update_Progress_T1 } from "./../../../redux-persist/redux/user_values";

class Extra_6_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      show_6: false,
      show_7: false,
      buttonIsActive: false,
      expectation: "",
      progressValueT1: undefined
    };
  }

  handleChange = expectation => {
    this.setState({ expectation });
  };

  getChecked = value => {
    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];
    const progressValueT1 = this.state.progressValueT1;
    console.log(KEY, KEY_Value);
    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({ [KEY]: KEY_Value })
      .then(() => {});

    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValueT1: 73 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT1: 74 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValueT1: 75 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValueT1: 76 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValueT1: 77 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValueT1: 78 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_7 == true) {
        this.setState({ progressValueT1: 79 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    const progressValueT1 = this.state.progressValueT1;
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValueT1: 73 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT1: 74 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValueT1: 75 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValueT1: 76 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValueT1: 77 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValueT1: 78 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_7 == true) {
        this.setState({ progressValueT1: 79 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
        this.props.navigation.navigate("Closing_Screen_T1");
      }
    }, 400);
  };

  handleClick = () => {
    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({ Expectation: this.state.expectation })
      .then(() => {});

    setTimeout(() => {
      if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT1: 74 / 79 });
      }
    }, 400);
  };

  render() {
    return (
      <>
        <StatusBar hidden />

        <View style={styles.container}>
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
          {this.state.show_1 ? (
            <>
              <Text style={styles.text_bold_center}>
                Is this the longest questionnaire you have ever answered? It is
                the longest of the whole study. Promised.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  isScaleEnabled={false}
                  RadioGroupStyle={{
                    flexDirection: "column",
                    paddingTop: 20,
                    paddingBottom: 20
                  }}
                  RadioStyle={{
                    width: "100%",
                    height: 49,
                    borderRadius: 30,
                    marginBottom: 10,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  labelStyle={{
                    fontSize: 14,
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: "stretch",
                    color: "#2C3B51",
                    textAlign: "center"
                  }}
                >
                  <Radio
                    iconName={"lens"}
                    label={"Hell yeah"}
                    value={"Joke/Yes"}
                  />
                  <Radio
                    iconName={"lens"}
                    label={"No, easy peasy"}
                    value={"Joke/No"}
                  />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_2 ? (
            <>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                  behavior="padding"
                  keyboardVerticalOffset="15"
                  style={styles.keyboard_view}
                >
                  <Text style={styles.text_bold_center}>
                    Why did you sign-up for the 21-day program?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInputBig}
                      onChangeText={this.handleChange}
                      value={this.state.expectation}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="default"
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.expectation}
                      onPress={this.handleClick}
                    />
                  </View>
                </KeyboardAvoidingView>
              </TouchableWithoutFeedback>
            </>
          ) : null}

          {this.state.show_3 ? (
            <>
              <Text style={styles.text_bold_center}>
                Do you additionally use a smartwatch?
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  isScaleEnabled={false}
                  RadioGroupStyle={{
                    flexDirection: "column",
                    paddingTop: 20,
                    paddingBottom: 20
                  }}
                  RadioStyle={{
                    width: "100%",
                    height: 49,
                    borderRadius: 30,
                    marginBottom: 10,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  labelStyle={{
                    fontSize: 14,
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: "stretch",
                    color: "#2C3B51",
                    textAlign: "center"
                  }}
                >
                  <Radio
                    iconName={"lens"}
                    label={"Yes"}
                    value={"Smartwatch/Yes"}
                  />
                  <Radio
                    iconName={"lens"}
                    label={"No"}
                    value={"Smartwatch/No"}
                  />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_4 ? (
            <>
              <Text style={styles.text_bold_center}>
                Do you additionally use a tablet?
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  isScaleEnabled={false}
                  RadioGroupStyle={{
                    flexDirection: "column",
                    paddingTop: 20,
                    paddingBottom: 20
                  }}
                  RadioStyle={{
                    width: "100%",
                    height: 49,
                    borderRadius: 30,
                    marginBottom: 10,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  labelStyle={{
                    fontSize: 14,
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: "stretch",
                    color: "#2C3B51",
                    textAlign: "center"
                  }}
                >
                  <Radio iconName={"lens"} label={"Yes"} value={"Tablet/Yes"} />
                  <Radio iconName={"lens"} label={"No"} value={"Tablet/No"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_5 ? (
            <>
              <Text style={styles.text_bold_center}>
                Next to your smartphone for private use, do you use any
                additional smartphones?
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  isScaleEnabled={false}
                  RadioGroupStyle={{
                    flexDirection: "column",
                    paddingTop: 20,
                    paddingBottom: 20
                  }}
                  RadioStyle={{
                    width: "100%",
                    height: 49,
                    borderRadius: 30,
                    marginBottom: 10,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  labelStyle={{
                    fontSize: 14,
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: "stretch",
                    color: "#2C3B51",
                    textAlign: "center"
                  }}
                >
                  <Radio
                    iconName={"lens"}
                    label={"Yes"}
                    value={"AdditionalSP/Yes"}
                  />
                  <Radio
                    iconName={"lens"}
                    label={"No"}
                    value={"AdditionalSP/No"}
                  />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_6 ? (
            <>
              <Text style={styles.text_bold_center}>
                If yes, for which purpose do you use this additional smartphone?
                If no, please skip this question.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  isScaleEnabled={false}
                  RadioGroupStyle={{
                    flexDirection: "column",
                    paddingTop: 20,
                    paddingBottom: 20
                  }}
                  RadioStyle={{
                    width: "100%",
                    height: 49,
                    borderRadius: 30,
                    marginBottom: 10,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  labelStyle={{
                    fontSize: 14,
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: "stretch",
                    color: "#2C3B51",
                    textAlign: "center"
                  }}
                >
                  <Radio
                    iconName={"lens"}
                    label={"Work"}
                    value={"AdditionalSPUse/Work"}
                  />
                  <Radio
                    iconName={"lens"}
                    label={"Other"}
                    value={"AdditionalSPUse/Other"}
                  />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_7 ? (
            <>
              <Text style={styles.text_bold_center}>
                Do you receive Versuchspersonenstunden / -marken for this study?
                (only relevant for psychology students)
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  isScaleEnabled={false}
                  RadioGroupStyle={{
                    flexDirection: "column",
                    paddingTop: 20,
                    paddingBottom: 20
                  }}
                  RadioStyle={{
                    width: "100%",
                    height: 49,
                    borderRadius: 30,
                    marginBottom: 10,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  labelStyle={{
                    fontSize: 14,
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: "stretch",
                    color: "#2C3B51",
                    textAlign: "center"
                  }}
                >
                  <Radio iconName={"lens"} label={"Yes"} value={"VP/Yes"} />
                  <Radio iconName={"lens"} label={"No"} value={"VP/No"} />
                </RadioGroup>
              </View>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Continue"
                  isBottom={true}
                  disabled={!this.state.buttonIsActive}
                  onPress={() => {
                    this.props.navigation.navigate("Closing_Screen_T1");
                  }}
                />
              </View>
            </>
          ) : null}
        </View>
      </>
    );
  }
}
const mapStateToProps = state => ({
  user_values: state.user_values,
  user: state.user
});
export default connect(mapStateToProps)(Extra_6_Screen_T1);
