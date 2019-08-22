import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { updateOnboarding } from "./../../../redux-persist/redux/user";


class Closing_Screen_T1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname,
      onboardingDone: true
    };
  }

  handleSubmit = () => {
    const uid = firebase.auth().currentUser.uid;
    const onboardingDone = this.state.onboardingDone;
    this.setState({ onboardingDone: onboardingDone });
    this.props.dispatch(updateOnboarding(this.state.onboardingDone));
    firebase
      .database()
      .ref()
      .child("accounts")
      .child(uid)
      .update({
        onboardingDone
      });
    this.props.navigation.push('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left}>Thank you, {this.props.user.nickname}.</Text>

        <Text style={styles.text_left}>
          {"\n"}You’re all set and ready to dive into the wide ocean.
          {"\n"}{"\n"}Enjoy your journey!
        </Text>

        <View style={styles.bottom}>
          <PrimaryButton
            label="START EXERCISING"
            isBottom={true}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Closing_Screen_T1);
