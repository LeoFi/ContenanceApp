import React from "react";
import {
  View,
  Text,
  TextACput,
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
import { styles } from "./style";

import * as Progress from "react-native-progress";

import * as firebase from "firebase";

export default class SE_Screen_PM2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      progressValue: 43/45,
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
        this.setState({ progressValue: 44/45 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 45/45 });
      } else if (this.state.show_3 == true) {
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 44/45 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 45/45 });
      } else if (this.state.show_3 == true) {
        this.props.navigation.navigate("Closing_Screen_PM2");
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
              I have done the activities as instructed.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"SE01_D8/1"} />
                <Radio iconName={"lens"} label={"2"} value={"SE01_D8/2"} />
                <Radio iconName={"lens"} label={"3"} value={"SE01_D8/3"} />
                <Radio iconName={"lens"} label={"4"} value={"SE01_D8/4"} />
                <Radio iconName={"lens"} label={"5"} value={"SE01_D8/5"} />
                <Radio iconName={"lens"} label={"6"} value={"SE01_D8/6"} />
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
                <Radio iconName={"lens"} label={"1"} value={"SE02_D8/1"} />
                <Radio iconName={"lens"} label={"2"} value={"SE02_D8/2"} />
                <Radio iconName={"lens"} label={"3"} value={"SE02_D8/3"} />
                <Radio iconName={"lens"} label={"4"} value={"SE02_D8/4"} />
                <Radio iconName={"lens"} label={"5"} value={"SE02_D8/5"} />
                <Radio iconName={"lens"} label={"6"} value={"SE02_D8/6"} />
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
                <Radio iconName={"lens"} label={"1"} value={"SE03_D8/1"} />
                <Radio iconName={"lens"} label={"2"} value={"SE03_D8/2"} />
                <Radio iconName={"lens"} label={"3"} value={"SE03_D8/3"} />
                <Radio iconName={"lens"} label={"4"} value={"SE03_D8/4"} />
                <Radio iconName={"lens"} label={"5"} value={"SE03_D8/5"} />
                <Radio iconName={"lens"} label={"6"} value={"SE03_D8/6"} />
              </RadioGroup>
            </View>

            <View style={styles.bottom}>
              <PrimaryButton
                label="Keep Going"
                isBottom={true}
                disabled={!this.state.buttonIsActive}
                onPress={() => {
                  this.props.navigation.navigate("Closing_Screen_PM2");
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
