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

export default class PSF_Screen_PM4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
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
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left_padding}>Please refer to today and the past 3 days.....</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
            I decided what is important for me and decide what I want to use my energy for.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{
                  flexDirection: "row"
                }}
              >
                <Radio iconName={"lens"} label={"1"} value={"PSF01_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSF01_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSF01_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSF01_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSF01_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSF01_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
            I actively committed myself to what I find important, useful or meaningful.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"PSF02_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PSF02_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PSF02_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PSF02_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PSF02_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PSF02_D16/6"} />
              </RadioGroup>
            </View>

        
            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={ !this.state.buttonIsActive }
                onPress={() => {
                  this.props.navigation.navigate("TRP_Screen_PM4");
                }}
              />
            </View>
          </>
        ) : null}
      </View>
    );
  }
}