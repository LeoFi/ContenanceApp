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

export default class Exercice_3_2_Less2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/pink_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_3_3");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.sub_header_left}>
                Welcome to the world of smartphone hacks!
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}They are supposed to be little tricks helping you shape your smartphone use. Maybe you have tried other things, or this is your first encounter with them.
                  {"\n"}{"\n"}Stay curious, in a few days, you’ll already know more!
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}