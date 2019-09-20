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
      accessCode: this.props.user.accessCode || "",
      iphone5: false
    };
  }

  componentWillMount = () => {
    const screenWidth = Dimensions.get("window").width;
    if (screenWidth === 320) {
      this.setState({ iphone5: true });
    } else {
      this.setState({ iphone5: false });
    }
  };

  handleChange = nickname => {
    this.setState({ nickname });
  };

  handleSubmit = () => {
    const { nickname } = this.state;
    const { accessCode } = this.state;

    firebase
      .database()
      .ref()
      .child("accounts")
      .child(this.props.user.UID)
      .set({
        nickname,
        accessCode
      });
    this.props.dispatch(updateNickname(this.state.nickname));
    this.props.navigation.navigate("Onboarding");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: "#F4F1DE",
          justifyContent: "flex-start"
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="0">
            <ScrollView
              //style={styles.container_scrollview}
              contentContainerStyle={styles.container_scrollview_content_intro}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              ref="_scrollView"
            >
              <View
                style={{
                  flex: 1,
                  width: Dimensions.get("window").width - 60,
                  justifyContent: "space-between"
                }}
              >
                <View style={{ flex: 2, alignItems: "center" }}>
                  <Image
                    source={require("./../../../assets/images/placeholder_background.png")}
                  />
                  <View style={{ height: 40 }} />
                  <Text style={styles.header}>Hi, I’m Leo.</Text>
                  <Text style={styles.text}>
                    {"\n"}And I’m going to be your companion on this journey.
                    How do you like to be called?
                  </Text>
                  <View style={{ height: 40 }} />
                  <TextInput
                    onFocus={() =>
                      setTimeout(() => {
                        this.refs._scrollView.scrollToEnd();
                      }, 50)
                    }
                    style={styles.codeInput}
                    value={this.state.nickname}
                    onChangeText={this.handleChange}
                    placeholder="Your Nickname"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="ascii-capable"
                  />
                  <View style={{ height: 40 }} />
                </View>

                <View>
                  <PrimaryButton
                    label="Next"
                    isBottom={true}
                    onPress={this.handleSubmit}
                    disabled={!this.state.nickname}
                  />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(IntroOnboardingScreen);
