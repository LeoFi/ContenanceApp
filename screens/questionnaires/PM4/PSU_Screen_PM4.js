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
import RadioGroup, {
  Radio
} from "../../../components/AppComponents/RadioGroup";

import * as Progress from "react-native-progress";

import { styles } from "./style";

import * as firebase from "firebase";

export default class PSU_Screen_PM4 extends React.Component {
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
      progressValue: 0,
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
        this.setState({ progressValue: 1/45 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 2/45 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 3/45 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValue: 4/45 });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValue: 5/45 });
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValue: 6/45 });
      } else if (this.state.show_7 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: true });
        this.setState({ progressValue: 7/45 });
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
        this.setState({ progressValue: 8/45 });
      } else if (this.state.show_9 == true) {
        this.setState({ buttonIsActive: true });
        this.setState({ progressValue: 9/45 });
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 1/45 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 2/45 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 3/45 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValue: 4/45 });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValue: 5/45 });
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValue: 6/45 });
      } else if (this.state.show_7 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: true });
        this.setState({ progressValue: 7/45 });
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
        this.setState({ progressValue: 8/45 });
      } else if (this.state.show_9 == true) {
        this.setState({ progressValue: 9/45 });
        this.props.navigation.navigate("SUE_Screen_PM4");
      }
    }, 400);
  };

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            width: "100%",
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 100,
            backgroundColor: "#F4F1DE"
          }}
        >
          <Progress.Bar
            progress={this.state.progressValue}
            borderWidth={0}
            borderRadius={0}
            width={null}
            height={10}
            color={"#2C3B51"}
            unfilledColor={"rgba(255, 255, 255, 1)"}
            animated={true}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.header_left_padding}>
            Please refer to today and the past 3 days.
          </Text>

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
                  <Radio iconName={"lens"} label={"1"} value={"PSU01_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU01_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU01_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU01_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU01_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU01_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_2 ? (
            <>
              <Text style={styles.text_left}>
                When out of range for some time, I became preoccupied with the
                thought of missing a call or a message.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"PSU02_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU02_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU02_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU02_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU02_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU02_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_3 ? (
            <>
              <Text style={styles.text_left}>
                I felt anxious if I had not checked for messages or switched on
                my smartphone for some time.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"PSU03_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU03_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU03_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU03_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU03_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU03_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_4 ? (
            <>
              <Text style={styles.text_left}>
                My friends and family complained about my use of the smartphone.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"PSU04_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU04_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU04_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU04_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU04_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU04_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_5 ? (
            <>
              <Text style={styles.text_left}>
                I found myself engaged on the smartphone for longer periods of
                time than intended.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"PSU05_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU05_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU05_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU05_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU05_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU05_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_6 ? (
            <>
              <Text style={styles.text_left}>
                I was often late for appointments because I had been engaged on
                the smartphone when I shouldn’t have been.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"PSU06_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU06_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU06_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU06_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU06_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU06_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_7 ? (
            <>
              <Text style={styles.text_left}>
                I found it difficult to switch off my smartphone (or use flight
                mode).
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"PSU07_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU07_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU07_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU07_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU07_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU07_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_8 ? (
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
                  <Radio iconName={"lens"} label={"1"} value={"PSU08_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU08_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU08_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU08_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU08_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU08_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_9 ? (
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
                  <Radio iconName={"lens"} label={"1"} value={"PSUc_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSUc_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSUc_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSUc_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSUc_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSUc_D16/6"} />
                </RadioGroup>
              </View>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Continue"
                  isBottom={true}
                  disabled={!this.state.buttonIsActive}
                  onPress={() => {
                    this.props.navigation.navigate("SUE_Screen_PM4");
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
