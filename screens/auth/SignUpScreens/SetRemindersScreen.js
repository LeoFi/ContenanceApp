import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import * as firebase from "firebase";
import { styles } from "./style";

export default class SetRemindersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Set reminders</Text>

        <Text style={styles.text}>
          {"\n"}You’ll get one new exercise every day. How do you like to be
          notified about it?
        </Text>

        <View style={styles.middle}>
          <GreyInputButton
            label="Email"
            isBottom={false}
            onPress={() =>
              this.setState({
                active1: !this.state.active1,
                active2: false,
              })
            }
            isActive={this.state.active1}
          />
          <GreyInputButton
            label="App Notifications"
            isBottom={true}
            onPress={() =>
              this.setState({
                active1: false,
                active2: !this.state.active2,
              })
            }
            isActive={this.state.active2}
          />
        </View>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Next"
            isBottom={true}
            disabled={ !this.state.active1 && !this.state.active2 }
            onPress={() => {
              this.props.navigation.navigate("SetRemindersFinal");
            }}
          />
        </View>
      </View>
    );
  }
}
