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
  GreyInputButton,
  RadioButtons
} from "../../../components/AppComponents";

import RadioGroup, { Radio } from "react-native-radio-input";
import { styles } from "./style";
import { Svg, Circle, Path } from "react-native-svg";

import * as firebase from "firebase";

export default class PSU_Screen_T1 extends React.Component {
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
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.show_10 ? (
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SUE_Screen_T1");
            }}
            style={styles.skip}
          >
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.header_left_padding}>In the last 7 days</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
              I have used my smartphone to make myself feel better when I was
              feeling down.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"PSU01_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSU01_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSU01_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSU01_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSU01_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSU01_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
              When out of range for some time, I become preoccupied with the
              thought of missing a call or a message.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"PSU02_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSU02_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSU02_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSU02_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSU02_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSU02_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
              If I don’t have a smartphone, my friends would find it hard to get
              in touch with me.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"PSU03_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSU03_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSU03_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSU03_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSU03_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSU03_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
              I feel anxious if I have not checked for messages or switched on
              my smartphone for some time.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"PSU04_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSU04_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSU04_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSU04_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSU04_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSU04_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_5 ? (
          <>
            <Text style={styles.text_left}>
              My friends and family complain about my use of the smartphone.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"PSU05_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSU05_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSU05_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSU05_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSU05_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSU05_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_6 ? (
          <>
            <Text style={styles.text_left}>
              I find myself engaged on the smartphone for longer periods of time
              than intended.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"PSU06_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSU06_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSU06_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSU06_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSU06_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSU06_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_7 ? (
          <>
            <Text style={styles.text_left}>
              I am often late for appointments because I’m engaged on the
              smartphone when I shouldn’t be.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"PSU07_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSU07_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSU07_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSU07_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSU07_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSU07_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_8 ? (
          <>
            <Text style={styles.text_left}>
              I find it difficult to switch off my smartphone.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"PSU08_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSU08_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSU08_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSU08_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSU08_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSU08_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_9 ? (
          <>
            <Text style={styles.text_left}>
              I have been told that I spend too much time on my smartphone.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"PSU09_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSU09_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSU09_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSU09_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSU09_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSU09_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_10 ? (
          <>
            <Text style={styles.text_left}>
              I found my smartphone use problematic.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"PSUc_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSUc_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSUc_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSUc_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSUc_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSUc_D1/6"} />
              </RadioGroup>
            </View>

            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={!this.state.buttonIsActive}
                onPress={() => {
                  this.props.navigation.navigate("SUE_Screen_T1");
                }}
              />
            </View>
          </>
        ) : null}
      </View>
    );
  }
}
