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

import * as firebase from "firebase";

export default class SU3_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.props.navigation.navigate("Extra_6_Screen_T1");
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Extra_6_Screen_T1");
          }}
          style={styles.skip}
        >
          <Text style={styles.skip_text}>Skip</Text>
        </TouchableOpacity>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
              How often do you check your smartphone or use it on a regular day?
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
    );
  }
}