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

export default class Exercice_4_Intro extends React.Component {
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
              source={require("../../../assets/images/Day1_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.intro_header_day}>Day 4</Text>
              <Text style={styles.intro_header}>Keep Breathing</Text>

              <Text style={styles.intro_text}>
                {"\n"}10 MIN{"\n"}Today, you will discover why you might feel stressed after being on the smartphone and do your first reflection.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Start"
            isBottom={true}
            onPress={() => {
              this.props.navigation.navigate("Exercice_4_1");
            }}
          />
        </View>
      </View>
    );
  }
}