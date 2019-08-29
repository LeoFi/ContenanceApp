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

export default class Exercice_20_Aha_3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/blue_aha.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_20_Aha_4");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>
                Aha!
                </Text>
                <Text style={styles.text}>
                  {"\n"}There are different stopping cues that you can use:
                  {"\n"}{"\n"} <Text style={styles.intro_text_bold}>1. Time:</Text> I will do Daddeln for ten minutes and set an alarm.
                  {"\n"}{"\n"} <Text style={styles.intro_text_bold}>2. Numbers:</Text> I will do Daddeln and watch two videos.
                  {"\n"}{"\n"} <Text style={styles.intro_text_bold}>3. Situations:</Text> I will do Daddeln while commuting from A to B.
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}