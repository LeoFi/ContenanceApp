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

export default class Exercice_13_2 extends React.Component {
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
                this.props.navigation.navigate("Exercice_13_3");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.intro_text}>
                <Text style={styles.intro_text_bold}>{"\n"}Step 1: Choose three triggers
                  {"\n"}{"\n"}For which situations - or feelings - do you want to define a new response?</Text>.
                  View example
                  {"\n"}{"\n"} If I am...
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

{
  /* <View style={styles.middle}>
  <GreyInputButton label="Email" isBottom={false} />
  <GreyInputButton label="App Notifications" isBottom={true} />
</View>

<PrimaryButton
  label="Sign Up"
  onPress={() => {
    this.props.navigation.navigate("Exercice_1_2");
  }}
/> */
}
