import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  StatusBar,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";

// import RadioGroup, { Radio } from "react-native-radio-input";

import RadioGroup, {
  Radio
} from "../../../components/AppComponents/RadioGroup";

import { styles } from "./style";
import { connect } from "react-redux";
import * as firebase from "firebase";
import * as Progress from "react-native-progress";

class PSU_Screen_T2 extends React.Component {
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
      buttonIsActive: false,
      progressValueT2: 0
    };
  }

  getChecked = value => {
    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];
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
        this.setState({ progressValueT2: 1 / 60 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT2: 2 / 60 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValueT2: 3 / 60 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValueT2: 4 / 60 });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValueT2: 5 / 60 });
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValueT2: 6 / 60 });
      } else if (this.state.show_7 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: true });
        this.setState({ progressValueT2: 7 / 60 });
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
        this.setState({ progressValueT2: 8 / 60 });
      } else if (this.state.show_9 == true) {
        this.setState({ buttonIsActive: true });
        this.setState({ progressValueT2: 9 / 60 });
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValueT2: 1 / 60 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT2: 2 / 60 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValueT2: 3 / 60 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValueT2: 4 / 60 });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValueT2: 5 / 60 });
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValueT2: 6 / 60 });
      } else if (this.state.show_7 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: true });
        this.setState({ progressValueT2: 7 / 60 });
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
        this.setState({ progressValueT2: 8 / 60 });
      } else if (this.state.show_9 == true) {
        this.setState({ progressValueT2: 9 / 60 });
        this.props.navigation.navigate("WB_Screen_T2");
      }
    }, 400);
  };

  render() {
    return (
      <>
        <StatusBar hidden />
        <View
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 100,
            backgroundColor: "#F4F1DE"
          }}
        >
          <Progress.Bar
            progress={this.state.progressValueT2}
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
            Please think about the last 7 days
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
                  <Radio iconName={"lens"} label={"1"} value={"PSU01_D21/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU01_D21/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU01_D21/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU01_D21/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU01_D21/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU01_D21/6"} />
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
                  <Radio iconName={"lens"} label={"1"} value={"PSU02_D21/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU02_D21/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU02_D21/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU02_D21/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU02_D21/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU02_D21/6"} />
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
                  <Radio iconName={"lens"} label={"1"} value={"PSU03_D21/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU03_D21/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU03_D21/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU03_D21/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU03_D21/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU03_D21/6"} />
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
                  <Radio iconName={"lens"} label={"1"} value={"PSU04_D21/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU04_D21/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU04_D21/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU04_D21/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU04_D21/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU04_D21/6"} />
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
                  <Radio iconName={"lens"} label={"1"} value={"PSU05_D21/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU05_D21/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU05_D21/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU05_D21/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU05_D21/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU05_D21/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_6 ? (
            <>
              <Text style={styles.text_left}>
                I was often late for appointments because I was engaged on the
                smartphone when I shouldn’t have been.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"PSU06_D21/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU06_D21/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU06_D21/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU06_D21/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU06_D21/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU06_D21/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_7 ? (
            <>
              <Text style={styles.text_left}>
                I found it difficult to switch off my smartphone.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"PSU07_D21/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU07_D21/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU07_D21/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU07_D21/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU07_D21/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU07_D21/6"} />
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
                  <Radio iconName={"lens"} label={"1"} value={"PSU08_D21/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSU08_D21/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSU08_D21/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSU08_D21/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSU08_D21/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSU08_D21/6"} />
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
                  <Radio iconName={"lens"} label={"1"} value={"PSUc_D21/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSUc_D21/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSUc_D21/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSUc_D21/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSUc_D21/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSUc_D21/6"} />
                </RadioGroup>
              </View>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Keep Going"
                  isBottom={true}
                  disabled={!this.state.buttonIsActive}
                  onPress={() => {
                    this.props.navigation.navigate("WB_Screen_T2");
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
  user: state.user
});

export default connect(mapStateToProps)(PSU_Screen_T2);
