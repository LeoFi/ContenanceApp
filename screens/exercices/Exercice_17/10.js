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

export default class Exercice_17_10 extends React.Component {
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
                this.props.navigation.navigate("Exercice_17_Aha_1");
              }}
            >
              <View style={styles.container_scroll}>
              <Text style={styles.sub_header_left}>
              3. Free yourself from Social Media apps.
                </Text>
                <Text style={styles.intro_text}>
                {"\n"}Wheeew, this one is tough but effective! If you really want to use your phone more consciously, we recommend removing all the major social media apps from your phone.{"\n"}{"\n"}It’s the easiest way to cut back, as these apps can easily gobble up so much of our time. Train yourself to use them from your smartphone browser or computer only (if at all).
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
