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

export default class HS_Screen_PM4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      buttonIsActive: false,
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
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left_padding}>Please refer to today and the past 3 days.</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
            Using my smartphone was something I did automatically.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{
                  flexDirection: "row"
                }}
              >
                <Radio iconName={"lens"} label={"1"} value={"HS01_D166/1"} />
                <Radio iconName={"lens"} label={"2"} value={"HS01_D166/2"} />
                <Radio iconName={"lens"} label={"3"} value={"HS01_D166/3"} />
                <Radio iconName={"lens"} label={"4"} value={"HS01_D166/4"} />
                <Radio iconName={"lens"} label={"5"} value={"HS01_D166/5"} />
                <Radio iconName={"lens"} label={"6"} value={"HS01_D166/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
            Using my smartphone was something I did without having to consciously remember.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"HS02_D166/1"} />
                <Radio iconName={"lens"} label={"2"} value={"HS02_D166/2"} />
                <Radio iconName={"lens"} label={"3"} value={"HS02_D166/3"} />
                <Radio iconName={"lens"} label={"4"} value={"HS02_D166/4"} />
                <Radio iconName={"lens"} label={"5"} value={"HS02_D166/5"} />
                <Radio iconName={"lens"} label={"6"} value={"HD82_D166/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
            Using my smartphone was something I did without thinking.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"HS03_D166/1"} />
                <Radio iconName={"lens"} label={"2"} value={"HS03_D166/2"} />
                <Radio iconName={"lens"} label={"3"} value={"HS03_D166/3"} />
                <Radio iconName={"lens"} label={"4"} value={"HS03_D166/4"} />
                <Radio iconName={"lens"} label={"5"} value={"HS03_D166/5"} />
                <Radio iconName={"lens"} label={"6"} value={"HS03_D166/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
            Using my smartphone was something I started doing before I realized I was doing it.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"HSc_D166/1"} />
                <Radio iconName={"lens"} label={"2"} value={"HSc_D166/2"} />
                <Radio iconName={"lens"} label={"3"} value={"HSc_D166/3"} />
                <Radio iconName={"lens"} label={"4"} value={"HSc_D166/4"} />
                <Radio iconName={"lens"} label={"5"} value={"HSc_D166/5"} />
                <Radio iconName={"lens"} label={"6"} value={"HSc_D166/6"} />
              </RadioGroup>
            </View>
    
       
            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={ !this.state.buttonIsActive }
                onPress={() => {
                  this.props.navigation.navigate("IN_Screen_PM4");
                }}
              />
            </View>
          </>
        ) : null}
      </View>
    );
  }
}