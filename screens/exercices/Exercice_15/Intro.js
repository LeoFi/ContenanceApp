import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_15_Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.background_intro}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day15_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.intro_header_day_light}>Day 15</Text>
              <Text style={styles.intro_header_light}>Beauty of Imagination</Text>

              <Text style={styles.intro_text_light}>
                {"\n"}4 MIN{"\n"}In this exercise, you will discover a playful tool to fill empty moments. 
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Start"
            isBottom={true}
            style={{backgroundColor: "#F4F1DE", borderColor: "#F4F1DE", color: "#2C3B51"}}
            onPress={() => {
              this.props.navigation.navigate("Exercice_15_1");
            }}
          />
        </View>
      </View>
    );
  }
}