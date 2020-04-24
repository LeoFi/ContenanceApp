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
  Share,
  Alert
} from "react-native";
import { PrimaryButton, LinkText } from "../../../components/AppComponents";
import { styles } from "./style";
import * as firebase from "firebase";

export default class AccountSetupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
      password_secure: undefined,
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
    this.props.navigation.navigate("Conclusion");
  };

  securePassword = () => {
    if (this.state.email && this.state.password && this.state.password_secure) {
      if (this.state.password === this.state.password_secure) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  // onShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       message:
  //         'React Native | A framework for building native apps using React',
  //     });

  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          paddingTop: this.state.isKeyboard ? 30 : 60,
          paddingLeft: 30,
          paddingRight: 30
        }}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1 }}
        >
          <KeyboardAvoidingView
            behavior="position"
            style={{
              flex: 1,
              justifyContent: this.state.isKeyboard
                ? "flex-start"
                : "space-between"
            }}
          >
            <View>
              <Text style={styles.text_header_bold}>
                Your 20-day program is ready
              </Text>
              <Text style={styles.text_account}>
                Create an account to start
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

              <LinkText
                style="small"
                textLabel="By continuing you indicate that you’ve read and agree to our "
                linkLabel="Terms and Conditions"
                linkOnPress={() => {
                  this.navigate("Log_In");
                }}
              />

              {/* <PrimaryButton onPress={this.onShare} label="Share" /> */}

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
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}