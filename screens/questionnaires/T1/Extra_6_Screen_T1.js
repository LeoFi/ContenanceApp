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
  TextInput
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import RadioGroup, { Radio } from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";

import * as firebase from "firebase";

export default class Extra_6_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      show_6: false,
      buttonIsActive: false,
      additionalSPUse: ""
    };
  }

  handleChange = additionalSPUse => {
    this.setState({ additionalSPUse });
  };

  getChecked = value => {
    const uid = firebase.auth().currentUser.uid;
    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];
    console.log(KEY, KEY_Value);
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({ [KEY]: KEY_Value })
      .then(() => {});

    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
      } else if (this.state.show_6 == true) {
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
      {!this.state.show_6 ? (
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Closing_Screen_T1");
            }}
            style={styles.skip}
          >
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        )}
        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
              What operating system does your smartphone run on?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                isScaleEnabled={false}
                RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
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
                  alignItems: "stretch"
                }}
              >
                <Radio iconName={"lens"} label={"iOS"} value={"System/iOS"} />
                <Radio
                  iconName={"lens"}
                  label={"Android"}
                  value={"System/Android"}
                />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
              Do you additionally use a smartwatch?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                isScaleEnabled={false}
                RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
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
                  alignItems: "stretch"
                }}
              >
                <Radio
                  iconName={"lens"}
                  label={"Yes"}
                  value={"Smartwatch/Yes"}
                />
                <Radio iconName={"lens"} label={"No"} value={"Smartwatch/No"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
              Do you additionally use a tablet?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                isScaleEnabled={false}
                RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
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
                  alignItems: "stretch"
                }}
              >
                <Radio iconName={"lens"} label={"Yes"} value={"Tablet/Yes"} />
                <Radio iconName={"lens"} label={"No"} value={"Tablet/No"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
              Next to your smartphone for private use, do you use any additional
              smartphones?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                isScaleEnabled={false}
                RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
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
                  alignItems: "stretch"
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

        {this.state.show_5 ? (
          <>
            <Text style={styles.text_left}>
              If yes, for which purpose do you use this additional smartphone?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                isScaleEnabled={false}
                RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
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
                  alignItems: "stretch"
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

        {this.state.show_6 ? (
          <>
            <Text style={styles.text_left}>
              Do you receive Versuchspersonenstunden / -marken for this study?
              (only relevant for psychology students)
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                isScaleEnabled={false}
                RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
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
                  alignItems: "stretch"
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
    );
  }
}
