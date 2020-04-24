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

export default class Exercice_14_1 extends React.Component {
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
                this.props.navigation.navigate("Exercice_14_2");
              }}
            >
              <View style={styles.container_scroll}>
                <View style={{ flex: 1 }} />
                <Text style={styles.sub_header_left}>
                  I wanted to, but then it started raining...
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}Life is not predictable. And that is the beauty of it.
                  The key is to be prepared for your ever-changing environment.
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
