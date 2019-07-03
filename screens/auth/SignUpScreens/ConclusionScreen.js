import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import * as firebase from "firebase";
import { styles } from "./style";

export default class ConclusionScreen extends React.Component {
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
        <Text style={styles.header}>So, here’s your plan</Text>

        <Text style={styles.text}>
          {"\n"}In five steps, you’ll explore your own smartphone behavior, find out what drives you and define new habits based on your values.
        </Text>

        <Image style={{marginTop: 20}} source={require('./../../../assets/images/your_plan.png')} />

        <Text style={styles.text}>
          {"\n"}5 steps, 21 exercises, 
          {"\n"}around 5 min per exercise, 
          {"\n"}6 reflections.
        </Text>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Finish Setup"
            isBottom={true}
            onPress={() => {
                this.props.navigation.navigate('T1');
            }}
          />
        </View>
      </View>
    );
  }
}
