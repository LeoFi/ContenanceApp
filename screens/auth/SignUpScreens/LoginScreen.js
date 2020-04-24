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

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
      isKeyboard: false
    };
  }

  componentWillMount() {
    this.keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      this._keyboardWillShow
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      this._keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  _keyboardWillShow = () => {
    this.setState({ isKeyboard: true });
  };

  _keyboardWillHide = () => {
    this.setState({ isKeyboard: false });
  };

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
    this.props.navigation.navigate("Home");
  };

  securePassword = () => {
    if (this.state.email && this.state.password) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              paddingLeft: 30,
              paddingRight: 30,
              justifyContent: this.state.isKeyboard
                ? "flex-end"
                : "space-between"
            }}
          >
            <View
              style={{
                flex: 1,
                paddingTop: this.state.isKeyboard ? 30 : 60
              }}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={styles.header}>Log In</Text>
                <Text style={styles.text_account}>
                  Continue your 20-day program
                </Text>

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

                <TextInput
                  //autoFocus={true}
                  onSubmitEditing={Keyboard.dismiss}
                  style={styles.personalDataInput_underline}
                  value={this.state.password}
                  numberOfLines={10}
                  onChangeText={password => this.setState({ password })}
                  placeholderTextColor="rgba(44, 59, 81, 0.3)"
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                />

                <View style={{ paddingTop: 30 }} />
                <LinkText
                  style="grey"
                  textLabel=""
                  linkLabel="Forgot your password?"
                  linkOnPress={() => {
                    this.props.navigation.navigate("ForgotPassword");
                  }}
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
                label="Log In"
                isBottom={true}
                onPress={this.handleSubmit}
                disabled={this.securePassword()}
              />

              <LinkText
                style={styles.link_text}
                textLabel="Don’t have an account? "
                linkLabel="Get started"
                linkOnPress={() => {
                  // this.navigation.navigate("IntroOnboarding")
                  this.props.navigation.push("IntroOnboarding");
                  // this.props.navigation.navigate("IntroOnboarding");
                }}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}
