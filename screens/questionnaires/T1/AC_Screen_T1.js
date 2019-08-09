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
  GreyACputButton,
  RadioButtons
} from "../../../components/AppComponents";
import RadioGroup, { Radio } from "react-native-radio-input";
import { styles } from "./style";

import * as firebase from "firebase";

export default class AC_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
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
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.show_3 ? (
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SE_Screen_T1");
            }}
            style={styles.skip}
          >
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.header_left_padding}>
          In the past 7 days, I have...
        </Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
              ...always been aware of my Intentions how to use my smartphone.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AC01_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AC01_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AC01_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AC01_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AC01_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AC01_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
              ... watched carefully that I use my smartphone consciously.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AC02_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AC02_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AC02_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AC02_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AC02_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AC02_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
              ... tried hard to use my smartphone consciously.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AC03_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AC03_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AC03_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AC03_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AC03_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AC03_D1/6"} />
              </RadioGroup>
            </View>

            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={!this.state.buttonIsActive}
                onPress={() => {
                  this.props.navigation.navigate("SE_Screen_T1");
                }}
              />
            </View>
          </>
        ) : null}
      </View>
    );
  }
}
