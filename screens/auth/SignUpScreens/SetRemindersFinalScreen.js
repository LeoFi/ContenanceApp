import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import * as firebase from "firebase";
import { styles } from "./style";

export default class SetRemindersFinalScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Set reminders</Text>

        <Text style={styles.text}>
          {"\n"}Set your daily email reminder for new exercises.
        </Text>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Finish Setup"
            isBottom={true}
            onPress={() => {
                this.props.navigation.navigate('Conclusion');
            }}
          />
        </View>
      </View>
    );
  }
}
