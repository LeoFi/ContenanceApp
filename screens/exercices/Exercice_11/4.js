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

export default class Exercice_11_4 extends React.Component {
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
                    <Path d="M47.1641 44.5391H51.8984V48.0781H47.1641V56H42.8047V48.0781H27.2656V45.5234L42.5469 21.875H47.1641V44.5391ZM32.1875 44.5391H42.8047V27.8047L42.2891 28.7422L32.1875 44.5391Z" fill="#F87B7B"/>
                  </Svg>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    alignSelf: "flex-start"
                  }}
                >
                  <Text style={styles.intro_text_bold}>Find 4 things you can touch around you.
                  </Text>
                  <Text style={styles.intro_text}>
                    {"\n"}Maybe this is your hair, your cup of tea or someone next to you.
                  </Text>
                </View>
                <View style={styles.tap_pos_relative}>
                  <PrimaryButton
                    label="Done"
                    onPress={() => {
                      this.props.navigation.navigate("Exercice_11_5");
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