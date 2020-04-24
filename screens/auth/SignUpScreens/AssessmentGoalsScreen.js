import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Alert
} from "react-native";
import { PrimaryButton, SelectButton } from "../../../components/AppComponents";
import { styles } from "./style";

import * as firebase from "firebase";
import * as Amplitude from "expo-analytics-amplitude";

export default class AssessmentGoalsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result_1: 0,
      result_2: 0,
      result_3: 0,
      result_4: 0
    };
  }

  componentDidMount = () => {
    Amplitude.logEvent("Assessment Goals Screen");
  }

  handleSubmit = () => {
    // const { age } = this.state;
    // const uid = firebase.auth().currentUser.uid;
    // firebase
    //   .database()
    //   .ref()
    //   .child("accounts")
    //   .child(uid)
    //   .set({
    //     age
    //   });
    // this.props.dispatch(updateAge(this.state.age));
    this.props.navigation.navigate("AssessmentMeditation");
  };

  getResponse_1(result_1) {
    this.setState({ result_1});
  }
  getResponse_2(result_2) {
    this.setState({ result_2 });
  }
  getResponse_3(result_3) {
    this.setState({ result_3 });
  }
  getResponse_4(result_4) {
    this.setState({ result_4 });
  }

  totalValue = () => {
    return this.state.result_1 + this.state.result_2 + this.state.result_3 + this.state.result_4
  };

  render() {
    return (
      <>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={styles.keyboard_view}
            behavior="padding"
            enabled
          > */}
        <View
          style={{
            paddingTop: 60,
            paddingLeft: 30,
            paddingRight: 30,
            flex: 1,
            alignItems: "center",
            alignSelf: "stretch",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flex: 4,
              width: Dimensions.get("window").width - 60,
              justifyContent: "space-between"
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.text_header}>
              Select all the goals that matter to you.
              </Text>
              <Text style={styles.text_subheader}>
                {"\n"}Pick up to three goals.{"\n"}
              </Text>

              <SelectButton
                label="Reduce screen time"
                colour="green"
                num={this.totalValue()}
                max={3}
                callback={this.getResponse_1.bind(this)}
              />
              <SelectButton
                label="Increase awareness of own use"
                colour="green"
                num={this.totalValue()}
                max={3}
                callback={this.getResponse_2.bind(this)}
              />
              <SelectButton
                label="Increase meaningful use"
                colour="green"
                num={this.totalValue()}
                max={3}
                callback={this.getResponse_3.bind(this)}
              />
              <SelectButton
                label="Change smartphone habits"
                colour="green"
                num={this.totalValue()}
                max={3}
                callback={this.getResponse_4.bind(this)}
              />
            </View>
          </View>
          <View
            style={{
              //flex: 1,
              width: Dimensions.get("window").width - 60,
              justifyContent: "flex-end",
              paddingBottom: 40
            }}
          >
            <PrimaryButton
              label="Continue"
              isBottom={true}
              onPress={this.handleSubmit}
              disabled={this.totalValue() == 0 ||  this.totalValue() > 3}
            />
          </View>
        </View>
        {/* </KeyboardAvoidingView>
        </TouchableWithoutFeedback> */}
      </>
    );
  }
}