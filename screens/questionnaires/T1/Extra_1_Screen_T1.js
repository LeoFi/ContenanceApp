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
  Keyboard,
  StatusBar,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

import * as firebase from "firebase";

import { connect } from "react-redux";
import { Update_Progress_T1 } from "./../../../redux-persist/redux/user_values";

class Extra_1_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonIsActive: false,
      userAge: "",
      progressValueT1: undefined
    };
  }

  handleChange = userAge => {
    this.setState({ userAge });
  };

  handleSubmit = () => {
    const { userAge } = this.state;
    const progressValueT1 = this.state.progressValueT1
    console.log(userAge);
     
    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({ Age: userAge });
    this.setState({ progressValueT1: 64 });
    this.props.dispatch(Update_Progress_T1(progressValueT1));
    this.props.navigation.navigate("Extra_2_Screen_T1");
  };

  render() {
    return (
      <>
        <StatusBar hidden />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <>
              <TouchableOpacity
                onPress={() => {
                  const progressValueT1 = this.state.progressValueT1
                  this.setState({ progressValueT1: 64 });
                  this.props.dispatch(Update_Progress_T1(progressValueT1));
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
                <View style={styles.question_center}>
                  <Text style={styles.text_bold_center}>What is your age?</Text>
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
const mapStateToProps = state => ({
  user_values: state.user_values,
  user: state.user
});
export default connect(mapStateToProps)(Extra_1_Screen_T1);
