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

export default class Exercice_3_5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_3_6");
              }}
            >
              <View style={styles.container_scroll}>
                <Image
                  style={styles.image_height}
                  source={require("../../../assets/images/Exercice3_2.png")}
                  resizeMode="contain"
                />
                <Text style={styles.intro_text}>
                  {"\n"}Hacks like turning the display to grayscale or switching off notifications are solutions from the first factor of the triangle: your <Text style={styles.intro_text_bold}>smartphone</Text>. Such solutions help us to neutralise addictive features like vibrant colours that make us spend more time on it or notifications that ring, ding and vibrate their way into our attention.
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
