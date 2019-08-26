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
import RadioGroup, { Radio } from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";
import * as Progress from "react-native-progress";

import * as firebase from "firebase";

export default class SU3_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 71/78,
      show_1: true,
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
        this.setState({ show_1: true });
        this.setState({ progressValue: 72 / 78 });
        this.props.navigation.navigate("Extra_6_Screen_T1");
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
        <TouchableOpacity
          onPress={() => {
            this.setState({ progressValue: 72 / 78 });
            this.props.navigation.navigate("Extra_6_Screen_T1");
          }}
          style={styles.skip}
        >
          <Text style={styles.skip_text}>Skip</Text>
        </TouchableOpacity>

        <Text style={styles.header_left_padding}>Please think about the last 7 days</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
              How often did you check your smartphone or used it on a regular day?
            </Text>

            <View style={styles.question}>
            <RadioGroup
                  getChecked={this.getChecked}
                  isScaleEnabled={false}
                  RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
                  RadioStyle={{
                    width: "100%",
                    height: 49,
                    borderRadius: 30,
                    marginBottom: 10,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  labelStyle={{
                    fontSize: 14,
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignItems: "stretch"
                  }}
                >
                <Radio
                  iconName={"lens"}
                  label={"Several times every hour"}
                  value={"Check_Smartphone_D1/Several times every hour"}
                />
                <Radio
                  iconName={"lens"}
                  label={"Every hour"}
                  value={"Check_Smartphone_D1/Every hour"}
                />
                <Radio
                  iconName={"lens"}
                  label={"Several times per day"}
                  value={"Check_Smartphone_D1/Several times per day"}
                />
                <Radio
                  iconName={"lens"}
                  label={"One time per day"}
                  value={"Check_Smartphone_D1/One time per day"}
                />
                <Radio
                  iconName={"lens"}
                  label={"I am not using my smartphone every day"}
                  value={
                    "Check_Smartphone_D1/I am not using my smartphone every day"
                  }
                />
              </RadioGroup>
            </View>
          </>
        ) : null}
      </View>
      </>
    );
  }
}