import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton,
  RadioButtons
} from "../../../components/AppComponents";
import RadioGroup, { Radio } from "react-native-radio-input";
import { styles } from "./style";

import * as firebase from "firebase";

const options = [
  {
    key: "1",
    text: "1"
  },
  {
    key: "2",
    text: "2"
  },
  {
    key: "3",
    text: "3"
  },
  {
    key: "4",
    text: "4"
  },
  {
    key: "5",
    text: "5"
  },
  {
    key: "6",
    text: "6"
  }
];

export default class T4Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getChecked = (value) => {
    const uid = firebase.auth().currentUser.uid;
    const KEY = value.split("/")[0]
    const KEY_Value = value.split("/")[1];
    console.log(KEY, KEY_Value);
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({[KEY] : KEY_Value})
      .then(() => {});
  };

  render() {
    return (
      <ScrollView style={styles.container_scroll}>
        <Text style={styles.header_left}>In the last 7 days</Text>

        <Text style={styles.text_left}>
        I have used my smartphone to make myself feel better when I was feeling down.
        </Text>
        <TouchableOpacity>
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
            
          >
            <Radio iconName={"lens"} label={"1"} value={"PSU1_T1/1"} />
            <Radio iconName={"lens"} label={"2"} value={"PSU1_T1/2"} />
            <Radio iconName={"lens"} label={"3"} value={"PSU1_T1/3"} />
            <Radio iconName={"lens"} label={"4"} value={"PSU1_T1/4"} />
            <Radio iconName={"lens"} label={"5"} value={"PSU1_T1/5"} />
            <Radio iconName={"lens"} label={"6"} value={"PSU1_T1/6"} />
          </RadioGroup>
        </TouchableOpacity>

        <Text style={styles.text_left}>
        When out of range for some time, I become preoccupied with the thought of missing a call or a message.
        </Text>
        <TouchableOpacity>
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
          >
            <Radio iconName={"lens"} label={"1"} value={"PSU2_T1/1"} />
            <Radio iconName={"lens"} label={"2"} value={"PSU2_T1/2"} />
            <Radio iconName={"lens"} label={"3"} value={"PSU2_T1/3"} />
            <Radio iconName={"lens"} label={"4"} value={"PSU2_T1/4"} />
            <Radio iconName={"lens"} label={"5"} value={"PSU2_T1/5"} />
            <Radio iconName={"lens"} label={"6"} value={"PSU2_T1/6"} />
          </RadioGroup>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}
