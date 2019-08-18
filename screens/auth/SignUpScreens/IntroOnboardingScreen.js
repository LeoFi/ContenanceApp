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
import { updateNickname } from "./../../../redux-persist/redux/user";

class IntroOnboardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      accessCode: this.props.user.accessCode || ""
    };
  }

  handleChange = nickname => {
    this.setState({ nickname });
  };

  handleSubmit = () => {
    const { nickname } = this.state;
    const { accessCode } = this.state;
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref()
      .child("accounts")
      .child(uid)
      .set({
        nickname,
        accessCode
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
            <>
              <View style={{flex: 1}}>
                <Image
                  source={require("./../../../assets/images/placeholder_background.png")}
                />
              </View>

              <View style={{flex: 1}}>
                <Text style={styles.header}>Hi, I’m Leo.</Text>

                <Text style={styles.text}>
                  {"\n"}And I’m going to be your companion on this journey.
                  {"\n"}
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

                <View style={styles.bottom}>
                  <PrimaryButton
                    label="Next"
                    isBottom={true}
                    onPress={this.handleSubmit}
                    disabled={!this.state.nickname}
                  />
                </View>
              </View>
            </>
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
