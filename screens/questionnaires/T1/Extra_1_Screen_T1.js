import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

import * as firebase from "firebase";

export default class Extra_1_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 63/78,
      buttonIsActive: false,
      userAge: ""
    };
  }

  handleChange = userAge => {
    this.setState({ userAge });
  };

  handleSubmit = () => {
    const { userAge } = this.state;
    console.log(userAge);
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({ Age: userAge });
      this.setState({ progressValue: 64 / 78 });
    this.props.navigation.navigate("Extra_2_Screen_T1");
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <>
            <TouchableOpacity
              onPress={() => {
                this.setState({ progressValue: 64 / 78 });
                this.props.navigation.navigate("Extra_2_Screen_T1");
              }}
              style={styles.skip}
            >
              <Text style={styles.skip_text}>Skip</Text>
            </TouchableOpacity>
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset="15"
              style={styles.keyboard_view}
            >
              <Text style={styles.text}>What is your age?</Text>

              <View style={styles.question}>
                <TextInput
                  style={styles.codeInput}
                  onChangeText={this.handleChange}
                  value={this.state.userAge}
                  placeholder="Your Age"
                  placeholderTextColor="rgba(44, 59, 81, 0.3)"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Continue"
                  isBottom={true}
                  disabled={!this.state.userAge}
                  onPress={this.handleSubmit}
                />
              </View>
            </KeyboardAvoidingView>
          </>
        </View>
      </TouchableWithoutFeedback>
      </>
    );
  }
}
