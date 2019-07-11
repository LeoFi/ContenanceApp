import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Button,
  Alert,
  Switch,
  Keyboard,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  SwitchButton,
  LinkText
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as firebase from "firebase";

import { connect } from "react-redux";
import { updateNickname } from "./../../../redux-persist/redux/user"


class IntroOnboardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || ""
    };
  }

  handleChange = nickname => {
    this.setState({ nickname });
  };

  handleSubmit = () => {
    const { nickname } = this.state;
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref()
      .child("accounts")
      .child(uid)
      .set({
        nickname
      });
    this.props.dispatch(updateNickname(this.state.nickname));
    this.props.navigation.navigate("Onboarding");
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
            <View style={styles.center}>
              <Image
                source={require("./../../../assets/images/placeholder_background.png")}
              />

              <Text style={styles.header}>Hi, I’m Leo.</Text>

              <Text style={styles.text}>
                {"\n"}And I’m going to be your companion on this journey.{"\n"}
                How do you like to be called?
              </Text>

              <TextInput
                style={styles.usernameInput}
                value={this.state.nickname}
                onChangeText={this.handleChange}
                placeholder="Your Nickname"
                placeholderTextColor="rgba(44, 59, 81, 0.3)"
                autoCapitalize="none"
                autoCorrect={false}
              />

              <PrimaryButton
                label="Sign Up"
                isBottom={true}
                onPress={this.handleSubmit}
                disabled={!this.state.nickname}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(IntroOnboardingScreen);
