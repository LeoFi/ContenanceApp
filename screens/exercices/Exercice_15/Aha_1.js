import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_15_Aha_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/green_aha.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_15_Aha_2");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>Aha!</Text>
                <Text style={styles.text}>
                  {"\n"}Often, we use our smartphone to fill what we call empty
                  moments.
                  {"\n"}
                  {"\n"}We all experience those moments, usually when waiting
                  somewhere in line, for a train or anything else to happen.
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
