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

export default class Exercice_5_Intro extends React.Component {
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
              source={require("../../../assets/images/Day5_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.intro_header_day_light}>Day 5</Text>
              <Text style={styles.intro_header_light}>Habit Loop</Text>

              <Text style={styles.intro_text_light}>
                {"\n"}4 MIN{"\n"}Today, you will discover why you sometimes end up having your smartphone in your hand without having thought about it.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Start"
            isBottom={true}
            style={{backgroundColor: "#FDFDF7", borderColor: "#FDFDF7", color: "#2C3B51"}}
            onPress={() => {
              this.props.navigation.navigate("Exercice_5_1");
            }}
          />
        </View>
      </View>
    );
  }
}