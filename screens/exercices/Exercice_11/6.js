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
                    <Path d="M51.2188 56H28.8594V52.8828L40.6719 39.7578C42.4219 37.7734 43.625 36.1641 44.2812 34.9297C44.9531 33.6797 45.2891 32.3906 45.2891 31.0625C45.2891 29.2812 44.75 27.8203 43.6719 26.6797C42.5938 25.5391 41.1562 24.9688 39.3594 24.9688C37.2031 24.9688 35.5234 25.5859 34.3203 26.8203C33.1328 28.0391 32.5391 29.7422 32.5391 31.9297H28.2031C28.2031 28.7891 29.2109 26.25 31.2266 24.3125C33.2578 22.375 35.9688 21.4062 39.3594 21.4062C42.5312 21.4062 45.0391 22.2422 46.8828 23.9141C48.7266 25.5703 49.6484 27.7812 49.6484 30.5469C49.6484 33.9062 47.5078 37.9062 43.2266 42.5469L34.0859 52.4609H51.2188V56Z" fill="#F87B7B"/>
                  </Svg>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    alignSelf: "flex-start"
                  }}
                >
                  <Text style={styles.intro_text_bold}>Name 2 things you can smell.
                  </Text>
                  <Text style={styles.intro_text}>
                    {"\n"}This one might be hard if you are not in a stimulating environment, but there might be more than you think.{"\n"}{"\n"}Maybe it’s your coffee, your laundry detergent or your skin.
                  </Text>
                </View>
                <View style={styles.tap_pos_relative}>
                  <PrimaryButton
                    label="MMMH"
                    onPress={() => {
                      this.props.navigation.navigate("Exercice_11_7");
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