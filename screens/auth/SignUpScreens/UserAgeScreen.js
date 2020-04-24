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
import {
  PrimaryButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as firebase from "firebase";
import * as Amplitude from "expo-analytics-amplitude";
import { connect } from "react-redux";
import { updateAge } from "../../../redux-persist/redux/user"

class UserAgeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.user.age || ""
    };
  }

  componentDidMount = () => {
    Amplitude.logEvent("User Age Screen");
  }

  handleSubmit = () => {
    const { age } = this.state;
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref()
      .child("accounts")
      .child(uid)
      .set({
        age
      });
    this.props.dispatch(updateAge(this.state.age));
    this.props.navigation.navigate("WalkthroughIntro");
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
                How old are you?
                </Text>

                <TextInput
                  autoFocus={true}
                  style={styles.personalDataInput}
                  value={this.state.age}
                  numberOfLines={10}
                  onChangeText={age => this.setState({ age })}
                  placeholderTextColor="rgba(44, 59, 81, 0.3)"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
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
                disabled={!this.state.age}
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

export default connect(mapStateToProps)(UserAgeScreen);