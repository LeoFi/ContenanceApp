import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Alert,
  Switch
} from "react-native";
import { PrimaryButton, LinkText } from "../../../components/AppComponents";
import { styles } from "./style";

import * as firebase from "firebase";
import * as Amplitude from "expo-analytics-amplitude";

export default class AccountSetupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
      password_secure: undefined,
      isKeyboard: false,
      acceptedAgreement: false
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

  componentDidMount = () => {
    Amplitude.logEvent("Account Setup Screen");
  };

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
    Amplitude.logEvent("Account Setup");
    this.props.navigation.navigate("Conclusion");
  };

  securePassword = () => {
    if (
      this.state.email &&
      this.state.password &&
      this.state.password_secure &&
      this.state.acceptedAgreement
    ) {
      if (this.state.password === this.state.password_secure) {
        return false;
      } else {
        return true;
      }
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
                ? "flex-start"
                : "space-between"
            }}
          >
            <View
              style={{
                flex: 1,
                paddingTop: this.state.isKeyboard ? 30 : 60
              }}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.text_header_bold}>
                    Your 20-day program is ready.
                  </Text>
                  <Text style={styles.text_account}>
                    Create an account to start.
                  </Text>

                  <TextInput
                    //autoFocus={true}
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

                  <TextInput
                    //autoFocus={true}
                    onSubmitEditing={Keyboard.dismiss}
                    style={styles.personalDataInput_underline}
                    value={this.state.password_secure}
                    numberOfLines={10}
                    onChangeText={password_secure =>
                      this.setState({ password_secure })
                    }
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    placeholder="Confirm password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      paddingTop: 30,
                      width: Dimensions.get("window").width - 60,
                      flex: 1,
                      flexWrap: "wrap"
                    }}
                  >
                    <Switch
                      onValueChange={acceptedAgreement =>
                        this.setState({ acceptedAgreement })
                      }
                      enabled={this.state.acceptedAgreement}
                      value={this.state.acceptedAgreement}
                      trackColor={{ true: "#2C3B51", false: "#E0DFD0" }}
                      thumbColor={"#ffffff"}
                      ios_backgroundColor={"#E0DFD0"}
                      style={{ marginRight: 15 }}
                    />
                    <View>
                      <LinkText
                        style="small"
                        textLabel="I agree to your "
                        linkLabel="Terms & Condition"
                        linkOnPress={() => {
                          this.navigate("Terms");
                        }}
                      />
                      <LinkText
                        style="small"
                        textLabel=" and "
                        linkLabel="Privacy Policy"
                        linkOnPress={() => {
                          this.navigate("Privacy");
                        }}
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                paddingTop: this.state.isKeyboard ? 30 : 0,
                paddingBottom: this.state.isKeyboard ? 30 : 40
              }}
            >
              <PrimaryButton
                label="Create Account"
                isBottom={true}
                onPress={this.handleSubmit}
                disabled={this.securePassword()}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}
