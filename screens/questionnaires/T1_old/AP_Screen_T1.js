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
import RadioGroup, {
  Radio
} from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";
import * as Progress from "react-native-progress";

import * as firebase from "firebase";

export default class AP_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      progressValue: 52 / 79,
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
        this.setState({ progressValue: 53 / 79 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 54 / 79 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 55 / 79 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValue: 56 / 79 });
      } else if (this.state.show_5 == true) {
        this.setState({ progressValue: 57 / 79 });
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 53 / 79 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 54 / 79 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 55 / 79 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValue: 56 / 79 });
      } else if (this.state.show_5 == true) {
        this.setState({ progressValue: 57 / 79 });
        this.props.navigation.navigate("AC_Screen_T1");
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
          In the last 7 days, I have made a detailed plan regarding...
        </Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
              ... when to use my smartphone consciously (e.g., on the way to
              work).
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AP01_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AP01_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AP01_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AP01_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AP01_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AP01_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
              ... where to use my smartphone consciously (e.g., in the train)
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AP02_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AP02_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AP02_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AP02_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AP02_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AP02_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
              ... what to do on my smartphone to use it consciously (e.g.,
              listen to a TED talk on the smartphone)
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AP03_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AP03_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AP03_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AP03_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AP03_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AP03_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
              ... what I can do in difficult situations to stay true to my
              plans.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AP04_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AP04_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AP04_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AP04_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AP04_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AP04_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_5 ? (
          <>
            <Text style={styles.text_left}>
              ... how to deal with it once I’ve failed doing it.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AP05_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AP05_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AP05_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AP05_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AP05_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AP05_D1/6"} />
              </RadioGroup>
            </View>

            <View style={styles.bottom}>
              <PrimaryButton
                label="Keep Going"
                isBottom={true}
                disabled={!this.state.buttonIsActive}
                onPress={() => {
                  this.props.navigation.navigate("AC_Screen_T1");
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
