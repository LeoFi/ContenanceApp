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

export default class IN_Screen_PM5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
 

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

      
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left_padding}>For the next few days, I intend...</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
            ... to avoid mindless activities on my smartphone.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{
                  flexDirection: "row"
                }}
              >
                <Radio iconName={"lens"} label={"1"} value={"IN01_D206/1"} />
                <Radio iconName={"lens"} label={"2"} value={"IN01_D206/2"} />
                <Radio iconName={"lens"} label={"3"} value={"IN01_D206/3"} />
                <Radio iconName={"lens"} label={"4"} value={"IN01_D206/4"} />
                <Radio iconName={"lens"} label={"5"} value={"IN01_D206/5"} />
                <Radio iconName={"lens"} label={"6"} value={"IN01_D206/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
            ... to use my smartphone more consciously.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"IN02_D206/1"} />
                <Radio iconName={"lens"} label={"2"} value={"IN02_D206/2"} />
                <Radio iconName={"lens"} label={"3"} value={"IN02_D206/3"} />
                <Radio iconName={"lens"} label={"4"} value={"IN02_D206/4"} />
                <Radio iconName={"lens"} label={"5"} value={"IN02_D206/5"} />
                <Radio iconName={"lens"} label={"6"} value={"IN02_D206/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
            ... to use my smartphone less.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"IN03_D206/1"} />
                <Radio iconName={"lens"} label={"2"} value={"IN03_D206/2"} />
                <Radio iconName={"lens"} label={"3"} value={"IN03_D206/3"} />
                <Radio iconName={"lens"} label={"4"} value={"IN03_D206/4"} />
                <Radio iconName={"lens"} label={"5"} value={"IN03_D206/5"} />
                <Radio iconName={"lens"} label={"6"} value={"IN03_D206/6"} />
              </RadioGroup>
            </View>
    
    
            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                onPress={() => {
                  this.props.navigation.navigate("AP_Screen_PM5");
                }}
              />
            </View>
          </>
        ) : null}
      </View>
    );
  }
}


  /* <View style={styles.bottom}>
  <PrimaryButton
    label="Continue"
    isBottom={true}
    onPress={() => {
      this.props.navigation.navigate("WB_Screen");
    }}
  />
</View>; */
