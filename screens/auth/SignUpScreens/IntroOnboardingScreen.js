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
  Image,
  ScrollView,
  Dimensions
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.container_scrollview}
          contentContainerStyle={styles.container_scrollview_content}
          keyboardShouldPersistTaps="handled"
        >
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset="100">
            <View style={{ flex: 1, justifyContent: "flex-start", width: Dimensions.get("window").width - 60 }}>
              <View style={{ alignItems: "center", paddingBottom: 40 }}>
                <Image
                  source={require("./../../../assets/images/placeholder_background.png")}
                />
              </View>
              <Text style={styles.header}>Hi, I’m Leo.</Text>

              <Text style={styles.text}>
                {"\n"}And I’m going to be your companion on this journey. How do
                you like to be called?
              </Text>

              <TextInput
                style={styles.codeInput}
                value={this.state.nickname}
                onChangeText={this.handleChange}
                placeholder="Your Nickname"
                placeholderTextColor="rgba(44, 59, 81, 0.3)"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <View style={{ flex: 1 }} />
              <View
                style={{
                  //flex: 1,
                  alignSelf: "stretch",
                  justifyContent: "flex-end"
                }}
              >
                <PrimaryButton
                  label="Next"
                  isBottom={true}
                  onPress={this.handleSubmit}
                  disabled={!this.state.nickname}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(IntroOnboardingScreen);
