import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import { PrimaryButton, LinkText } from "../../../components/AppComponents";
import { styles } from "./style";
import * as firebase from "firebase";

export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined
    };
  }

  handleSubmit = () => {
    // const { nickname } = this.state;
    // const uid = firebase.auth().currentUser.uid;
    // firebase
    //   .database()
    //   .ref()
    //   .child("accounts")
    //   .child(uid)
    //   .set({
    //     nickname
    //   });
    // this.props.dispatch(updateNickname(this.state.nickname));
    this.props.navigation.navigate("Start");
  };

  securePassword = () => {
    if (this.state.email) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={styles.keyboard_view}
            behavior="padding"
            enabled
          >
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
                  <Text style={styles.header}>Request password</Text>

                  <TextInput
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    keyboardType="email-address"
                    onSubmitEditing={Keyboard.dismiss}
                    style={styles.personalDataInput_underline}
                    numberOfLines={10}
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    placeholder="Email address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />

                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  width: Dimensions.get("window").width - 60,
                  justifyContent: "flex-end",
                  paddingBottom: 40
                }}
              >
                <PrimaryButton
                  label="REQUEST NEW PASSWORD"
                  isBottom={true}
                  onPress={this.handleSubmit}
                  disabled={this.securePassword()}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </>
    );
  }
}
