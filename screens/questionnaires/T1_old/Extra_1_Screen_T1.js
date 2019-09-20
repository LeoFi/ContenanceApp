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

import { connect } from "react-redux";
import * as firebase from "firebase";

class Extra_1_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 63 / 79,
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
     
    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({ Age: userAge });
    this.setState({ progressValue: 64 / 79 });
    this.props.navigation.navigate("Extra_2_Screen_T1");
  };

  render() {
    return (
      <>
        <StatusBar hidden />
        <View
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
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
                  this.setState({ progressValue: 64 / 79 });
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
                    label="Keep Going"
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
  user: state.user
});

export default connect(mapStateToProps)(Extra_1_Screen_T1);
