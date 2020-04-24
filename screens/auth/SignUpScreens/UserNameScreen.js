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
import { PrimaryButton } from "../../../components/AppComponents";
import { styles } from "./style";
import * as firebase from "firebase";
import * as Amplitude from "expo-analytics-amplitude";
import { connect } from "react-redux";
import { updateNickname } from "../../../redux-persist/redux/user";

class UserNameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || ""
    };
  }

  componentDidMount = () => {
    Amplitude.logEvent("User Name Screen");
  }

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
    this.props.navigation.navigate("UserAge");
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
                  flex: 1,
                  width: Dimensions.get("window").width - 60,
                  justifyContent: "space-between"
                }}
              >
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={styles.text_header}>
                    How do you like to be called?
                  </Text>

                  <TextInput
                    autoFocus={true}
                    onSubmitEditing={Keyboard.dismiss}
                    style={styles.personalDataInput}
                    value={this.state.nickname}
                    numberOfLines={10}
                    onChangeText={nickname => this.setState({ nickname })}
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    autoCapitalize="none"
                    autoCorrect={false}
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
                  disabled={!this.state.nickname}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserNameScreen);
