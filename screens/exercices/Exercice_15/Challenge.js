import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_15_Challenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/green_challenge.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_15_Congratulations");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>
                The Challenge
                </Text>
                <Text style={styles.text}>
                  {"\n"}Next time you find yourself in an empty moment today, instead of using your smartphone, try another one of these thought experiments. Or come up with your own! 
                  {"\n"}{"\n"}This might be a bit challenging in the beginning, but once you start practicing, they will come naturally!
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}