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
import RadioGroup, {
  Radio
} from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";

import * as Progress from "react-native-progress";

import * as firebase from "firebase";

export default class SE_Screen_PM4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      progressValue: 43 / 48,
      buttonIsActive: false,
      AltNoAvail_D16: ""
    };
  }

  handleChange = AltNoAvail_D16 => {
    this.setState({ AltNoAvail_D16 });
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
        this.setState({ progressValue: 44 / 48 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 45 / 48 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 46 / 48 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValue: 47 / 48 });
      } else if (this.state.show_5 == true) {
        this.setState({ progressValue: 48 / 48 });
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 44 / 48 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 45 / 48 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 46 / 48 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValue: 47 / 48 });
      } else if (this.state.show_5 == true) {
        this.setState({ progressValue: 48 / 48 });
        this.props.navigation.navigate("Closing_Screen_PM4");
      }
    }, 400);
  };

  handleClick = () => {
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({ AltNoAvail_D16: this.state.AltNoAvail_D16 })
      .then(() => {});

    setTimeout(() => {
      if (this.state.show_5 == true) {
        this.setState({ progressValue: 48 / 48 });
        this.props.navigation.navigate("Closing_Screen_PM3");
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
          {this.state.show_4 || this.state.show_5 ? null : (
            <Text style={styles.header_left_padding}>
              Please refer to today and the past 3 days.
            </Text>
          )}

          {this.state.show_1 ? (
            <>
              <Text style={styles.text_left}>
                I have done the activities as instructed.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"SE01_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"SE01_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"SE01_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"SE01_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"SE01_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"SE01_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_2 ? (
            <>
              <Text style={styles.text_left}>
                I have done the daily challenge.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"SE02_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"SE02_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"SE02_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"SE02_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"SE02_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"SE02_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_3 ? (
            <>
              <Text style={styles.text_left}>
                I have enjoyed doing the program.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"SE03_D16/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"SE03_D16/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"SE03_D16/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"SE03_D16/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"SE03_D16/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"SE03_D16/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_4 ? (
            <>
              <Text style={styles.text_bold_center}>
                How would you feel if you could no longer use the 21-day
                program?
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
                    label={"Very disappointed"}
                    value={"FeelNoUse_D16/Very_Disappointed"}
                  />
                  <Radio
                    iconName={"lens"}
                    label={"Somewhat disappointed"}
                    value={"FeelNoUse_D16/Somewhat_Disappointed"}
                  />
                  <Radio
                    iconName={"lens"}
                    label={"Not disappointed (it really isn’t that useful)"}
                    value={"FeelNoUse_D16/Not_Disappointed"}
                  />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_5 ? (
            <>
              <Text style={styles.text_bold_center}>
                What would you likely use as an alternative if the 21-day
                program were no longer available?
              </Text>

              <View style={styles.question}>
                <TextInput
                  style={styles.codeInputBig}
                  onChangeText={this.handleChange}
                  value={this.state.AltNoAvail_D16}
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
                  disabled={!this.state.AltNoAvail_D16}
                  onPress={this.handleClick}
                />
              </View>
            </>
          ) : null}
        </View>
      </>
    );
  }
}
