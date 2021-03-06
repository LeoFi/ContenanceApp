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

export default class MFSU_Screen extends React.Component {
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
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
      } else if (this.state.show_7 == true) {
        this.setState({ buttonIsActive: true });
      }
    }, 600);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left_padding}>Please refer to today and the past 3 days.</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, my mind wandered off and I was easily distracted.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{
                  flexDirection: "row"
                }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU01_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU01_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU01_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU01_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU01_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU01_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I did not pay attention to what I was doing because I was daydreaming, worrying, or otherwise distracted.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU02_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU02_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU02_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU02_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU02_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU02_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I was easily distracted.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU03_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU03_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU03_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU03_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU03_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU03_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I found it difficult to stay focused on what was happening in the present.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU04_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU04_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU04_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU04_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU04_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU04_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_5 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I rushed through activities without being really attentive to them.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU05_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU05_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU05_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU05_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU05_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU05_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_6 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I did jobs or tasks automatically without being aware of what I was doing.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU06_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU06_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU06_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU06_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU06_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU06_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_7 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I found myself doing things without paying attention.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU07_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU07_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU07_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU07_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU07_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU07_D16/6"} />
              </RadioGroup>
            </View>
       
            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={ !this.state.buttonIsActive }
                onPress={() => {
                  this.props.navigation.navigate("PSF_Screen_PM4");
                }}
              />
            </View>
          </>
        ) : null}
      </View>
    );
  }
}