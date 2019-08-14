import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import RadioGroup, { Radio } from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";

import * as firebase from "firebase";

export default class WB_Screen_T1 extends React.Component {
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
      show_8: false,
      show_9: false,
      show_10: false,
      show_11: false,
      show_12: false,
      show_13: false,
      show_14: false,
      show_15: false,
      show_16: false,
      show_17: false,
      show_18: false,
      show_19: false,
      show_20: false,
      show_21: false,
      buttonIsActive: false
    };
  }

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
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
      } else if (this.state.show_7 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: true });
      } else if (this.state.show_8 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: true });
      } else if (this.state.show_9 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: true });
      } else if (this.state.show_10 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: true });
      } else if (this.state.show_11 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: true });
      } else if (this.state.show_12 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: true });
      } else if (this.state.show_13 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: true });
      } else if (this.state.show_14 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: true });
      } else if (this.state.show_15 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: true });
      } else if (this.state.show_16 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: false });
        this.setState({ show_17: true });
      } else if (this.state.show_17 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: false });
        this.setState({ show_17: false });
        this.setState({ show_18: true });
      } else if (this.state.show_18 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: false });
        this.setState({ show_17: false });
        this.setState({ show_18: false });
        this.setState({ show_19: true });
      } else if (this.state.show_19 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: false });
        this.setState({ show_17: false });
        this.setState({ show_18: false });
        this.setState({ show_19: false });
        this.setState({ show_20: true });
      } else if (this.state.show_20 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: false });
        this.setState({ show_17: false });
        this.setState({ show_18: false });
        this.setState({ show_19: false });
        this.setState({ show_20: false });
        this.setState({ show_21: true });
      } else if (this.state.show_21 == true) {
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
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
      } else if (this.state.show_7 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: true });
      } else if (this.state.show_8 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: true });
      } else if (this.state.show_9 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: true });
      } else if (this.state.show_10 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: true });
      } else if (this.state.show_11 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: true });
      } else if (this.state.show_12 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: true });
      } else if (this.state.show_13 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: true });
      } else if (this.state.show_14 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: true });
      } else if (this.state.show_15 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: true });
      } else if (this.state.show_16 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: false });
        this.setState({ show_17: true });
      } else if (this.state.show_17 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: false });
        this.setState({ show_17: false });
        this.setState({ show_18: true });
      } else if (this.state.show_18 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: false });
        this.setState({ show_17: false });
        this.setState({ show_18: false });
        this.setState({ show_19: true });
      } else if (this.state.show_19 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: false });
        this.setState({ show_17: false });
        this.setState({ show_18: false });
        this.setState({ show_19: false });
        this.setState({ show_20: true });
      } else if (this.state.show_20 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: false });
        this.setState({ show_14: false });
        this.setState({ show_15: false });
        this.setState({ show_16: false });
        this.setState({ show_17: false });
        this.setState({ show_18: false });
        this.setState({ show_19: false });
        this.setState({ show_20: false });
        this.setState({ show_21: true });
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
      {!this.state.show_21 ? (
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("MFSU_Screen_T1");
            }}
            style={styles.skip}
          >
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.header_left_padding}>In general</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
              How much of the time do you feel you are making progress towards
              accomplishing your goals?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB01_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB01_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB01_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB01_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB01_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB01_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
              How often do you become absorbed in what you are doing?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB02_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB02_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB02_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB02_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB02_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB02_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
              In general, how often do you feel joyful?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB03_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB03_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB03_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB03_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB03_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB03_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
              In general, how often do you feel anxious?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB04_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB04_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB04_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB04_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB04_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB04_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_5 ? (
          <>
            <Text style={styles.text_left}>
              How often do you achieve the important goals you have set for
              yourself?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB05_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB05_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB05_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB05_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB05_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB05_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_6 ? (
          <>
            <Text style={styles.text_left}>
              In general, how would you say your health is?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB06_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB06_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB06_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB06_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB06_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB06_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_7 ? (
          <>
            <Text style={styles.text_left}>
              In general, to what extent do you lead a purposeful and meaningful
              life?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB07_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB07_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB07_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB07_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB07_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB07_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_8 ? (
          <>
            <Text style={styles.text_left}>
              To what extent do you receive help and support from others when
              you need it?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB08_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB08_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB08_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB08_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB08_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB08_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_9 ? (
          <>
            <Text style={styles.text_left}>
              In general, to what extent do you feel that what you do in your
              life is valuable and worthwhile?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB09_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB09_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB09_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB09_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB09_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB09_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_10 ? (
          <>
            <Text style={styles.text_left}>
              In general, to what extent do you feel excited and interested in
              things?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB10_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB10_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB10_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB10_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB10_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB10_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_11 ? (
          <>
            <Text style={styles.text_left}>
              How lonely do you feel in your daily life?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB11_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB11_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB11_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB11_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB11_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB11_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_12 ? (
          <>
            <Text style={styles.text_left}>
              In general, how often do you feel positive?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB12_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB12_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB12_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB12_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB12_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB12_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_13 ? (
          <>
            <Text style={styles.text_left}>
              In general, how often do you feel angry?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB13_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB13_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB13_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB13_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB13_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB13_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_14 ? (
          <>
            <Text style={styles.text_left}>
              How often are you able to handle your responsibilities?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB14_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB14_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB14_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB14_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB14_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB14_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_15 ? (
          <>
            <Text style={styles.text_left}>
              In general, how often do you feel sad?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB15_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB15_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB15_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB15_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB15_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB15_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_16 ? (
          <>
            <Text style={styles.text_left}>
              How often do you lose track of time while doing something you
              enjoy?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB16_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB16_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB16_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB16_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB16_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB16_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_17 ? (
          <>
            <Text style={styles.text_left}>
              To what extent do you feel loved?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB17_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB17_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB17_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB17_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB17_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB17_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_18 ? (
          <>
            <Text style={styles.text_left}>
              To what extent do you generally feel you have a sense of direction
              in your life?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB18_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB18_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB18_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB18_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB18_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB18_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_19 ? (
          <>
            <Text style={styles.text_left}>
              How satisfied are you with your personal relationships?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB19_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB19_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB19_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB19_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB19_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB19_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_20 ? (
          <>
            <Text style={styles.text_left}>
              In general, to what extent do you feel contented?
            </Text>
            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB20_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB20_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB20_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB20_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB20_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB20_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_21 ? (
          <>
            <Text style={styles.text_left}>
              Taking all things together, how happy would you say you are?
            </Text>
            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"WB21_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"WB21_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"WB21_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"WB21_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"WB21_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"WB21_D1/6"} />
              </RadioGroup>
            </View>

            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={!this.state.buttonIsActive}
                onPress={() => {
                  this.props.navigation.navigate("MFSU_Screen_T1");
                }}
              />
            </View>
          </>
        ) : null}
      </View>
    );
  }
}
