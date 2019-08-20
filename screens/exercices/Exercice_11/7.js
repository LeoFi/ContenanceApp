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

import { Svg, Path, Circle, Ellipse } from "react-native-svg";

export default class Exercice_11_3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/yellow_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View>
              <View style={styles.container_scroll}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Svg
                    width="79"
                    height="79"
                    viewBox="0 0 79 79"
                    fill="none"
                  >
                    <Circle cx="39.5" cy="39.5" r="37.5" stroke="#F87B7B" stroke-width="4"/>
                    <Path d="M43.1094 56H38.75V27.1016L30.0078 30.3125V26.375L42.4297 21.7109H43.1094V56Z" fill="#F87B7B"/>
                  </Svg>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    alignSelf: "flex-start"
                  }}
                >
                  <Text style={styles.intro_text_bold}>Name 1 thing you can taste.
                  </Text>
                  <Text style={styles.intro_text}>
                    {"\n"}What does the inside of your mouth taste like right now?{"\n"}{"\n"}Maybe a bit like gum, coffee, or the sandwich from lunch?
                  </Text>
                </View>
                <View style={styles.tap_pos_relative}>
                  <PrimaryButton
                    label="YUMMY"
                    onPress={() => {
                      this.props.navigation.navigate("Exercice_11_Aha_1");
                    }}
                  />
                </View>
              </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}