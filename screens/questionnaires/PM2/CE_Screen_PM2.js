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

export default class SE_Screen_PM2 extends React.Component {
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
        <Text style={styles.header_left_padding}>In the last 4 days, I have...</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
            ... done the activities as instructed.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{
                  flexDirection: "row"
                }}
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
            ... done the daily challenge.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
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
            ... enjoyed doing the program.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                RadioGroupStyle={{ flexDirection: "row" }}
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
                label="ContACue"
                isBottom={true}
                onPress={() => {
                  this.props.navigation.navigate("SE_Screen");
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
    label="ContACue"
    isBottom={true}
    onPress={() => {
      this.props.navigation.navigate("WB_Screen");
    }}
  />
</View>; */
