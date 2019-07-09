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
      
      }
    }, 600);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left_padding}>When I am using my smartphone...</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
            ...my mind wanders off and I’m easily distracted.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{
                  flexDirection: "row"
                }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU01_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU01_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU01_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU01_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU01_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU01_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
            ... I don’t pay attention to what I’m doing because I’m daydreaming, worrying, or otherwise distracted.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU02_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU02_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU02_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU02_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU02_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU02_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
            ...I am easily distracted.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU03_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU03_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU03_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU03_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU03_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU03_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
            ...I find it difficult to stay focused on what’s happening in the present.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU04_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU04_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU04_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU04_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU04_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU04_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_5 ? (
          <>
            <Text style={styles.text_left}>
            ...I rush through activities without being really attentive to them.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU05_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU05_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU05_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU05_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU05_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU05_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_6 ? (
          <>
            <Text style={styles.text_left}>
            ... I do jobs or tasks automatically without being aware of what I’m doing.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU06_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU06_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU06_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU06_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU06_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU06_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_7 ? (
          <>
            <Text style={styles.text_left}>
            ...I find myself doing things without paying attention.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU07_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU07_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU07_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU07_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU07_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU07_D1/6"} />
              </RadioGroup>
            </View>
       
            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                onPress={() => {
                  this.props.navigation.navigate("PSF_Screen");
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
