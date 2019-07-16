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

export default class Exercice_3_Intro extends React.Component {
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
              <Text style={styles.intro_header_day}>Day 3</Text>
              <Text style={styles.intro_header}>Solution Triangle</Text>

              <Text style={styles.intro_text}>
                {"\n"}5 MIN{"\n"}In this exercise, you will discover three factors that help you to improve your relationship with your smartphone. 
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Start"
            isBottom={true}
            onPress={() => {
              this.props.navigation.navigate("Exercice_3_1");
            }}
          />
        </View>
      </View>
    );
  }
}