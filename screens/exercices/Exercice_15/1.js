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

export default class Exercice_15_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/green_shape_full.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_15_2");
              }}
            >
              <View style={styles.container_scroll}>
              <View style={{ flex: 1 }} />
                <Text style={styles.sub_header_left}>Becoming a director.</Text>
                <Text style={styles.intro_text}>
                  {"\n"}Today, you will become the director of your own
                  imagination! Let’s dive into the beauty of your own mind.
                  {"\n"}
                  {"\n"}With three questions, we will stimulate it a bit today.
                  {"\n"}
                  {"\n"}Look around you and ask yourself...
                </Text>
                <View style={{ flex: 1 }} />
                <View style={styles.tap_pos_relative_exercice}>
                  <Text style={styles.tap_text}>TAP ANYWHERE TO CONTINUE</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
