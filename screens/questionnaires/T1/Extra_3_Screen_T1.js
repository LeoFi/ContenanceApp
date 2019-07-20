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
  GreyACputButton,
  RadioButtons
} from "../../../components/AppComponents";
import RadioGroup, { Radio } from "react-native-radio-input";
import { styles } from "./style";

import * as firebase from "firebase";

export default class Extra_3_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonIsActive: false,
      userNationality: ""
    };
  }

  handleChange = userNationality => {
    this.setState({ userNationality });
  };

  handleSubmit = () => {
    const { userNationality } = this.state;
    console.log(userNationality)
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({ Nationality: userNationality });
    this.props.navigation.navigate("Extra_4_Screen_T1");
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset="15"
          style={styles.keyboard_view}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <Text style={styles.text_left}>What is your nationality?</Text>

              <View style={styles.question}>
                <TextInput
                  style={styles.codeInput}
                  onChangeText={this.handleChange}
                  value={this.state.userNationality}
                  placeholder="Your Nationality"
                  placeholderTextColor="rgba(44, 59, 81, 0.3)"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={!this.state.userNationality}
                onPress={this.handleSubmit}
              />
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
