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

export default class Exercice_21_Intro extends React.Component {
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
              source={require("../../../assets/images/Day21_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.intro_header_day_light}>Day 21</Text>
              <Text style={styles.intro_header_light}>Closing</Text>

              <Text style={styles.intro_text_light}>
                {"\n"}12 MIN{"\n"}Today, you’ll cross the finish line and complete the 21-day training journey.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Start"
            isBottom={true}
            onPress={() => {
              this.props.navigation.navigate("Intro_Screen_T2");
            }}
          />
        </View>
      </View>
    );
  }
}