import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import DateTimePicker from "react-native-modal-datetime-picker";

import * as firebase from "firebase";
import { styles } from "./style";

export default class SetRemindersFinalScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: true,
      buttonIsDisabled: true,
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
    this.setState({ buttonIsDisabled: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Set reminders</Text>

        <Text style={styles.text}>
          {"\n"}Set your daily email reminder for new exercises.
        </Text>

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode='time'
          titleIOS='Pick a Time'
        />

        <View style={styles.bottom}>
          <PrimaryButton
            label="Finish Setup"
            isBottom={true}
            disabled={this.state.buttonIsDisabled}
            onPress={() => {
              this.props.navigation.navigate("Conclusion");
            }}
          />
        </View>
      </View>
    );
  }
}
