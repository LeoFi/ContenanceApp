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
      <>
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container_scroll}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Svg width="79" height="79" viewBox="0 0 79 79" fill="none">
                <Circle
                  cx="39.5"
                  cy="39.5"
                  r="37.5"
                  stroke="#F87B7B"
                  stroke-width="4"
                />
                <Path
                  d="M30.8516 38.8906L32.5859 21.875H50.0703V25.8828H36.2656L35.2344 35.1875C36.9062 34.2031 38.8047 33.7109 40.9297 33.7109C44.0391 33.7109 46.5078 34.7422 48.3359 36.8047C50.1641 38.8516 51.0781 41.625 51.0781 45.125C51.0781 48.6406 50.125 51.4141 48.2188 53.4453C46.3281 55.4609 43.6797 56.4688 40.2734 56.4688C37.2578 56.4688 34.7969 55.6328 32.8906 53.9609C30.9844 52.2891 29.8984 49.9766 29.6328 47.0234H33.7344C34 48.9766 34.6953 50.4531 35.8203 51.4531C36.9453 52.4375 38.4297 52.9297 40.2734 52.9297C42.2891 52.9297 43.8672 52.2422 45.0078 50.8672C46.1641 49.4922 46.7422 47.5938 46.7422 45.1719C46.7422 42.8906 46.1172 41.0625 44.8672 39.6875C43.6328 38.2969 41.9844 37.6016 39.9219 37.6016C38.0312 37.6016 36.5469 38.0156 35.4688 38.8438L34.3203 39.7812L30.8516 38.8906Z"
                  fill="#F87B7B"
                />
              </Svg>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignSelf: "flex-start"
              }}
            >
              <Text style={styles.intro_text_bold}>
                Name 5 things you see around you.
              </Text>
              <Text style={styles.intro_text}>
                {"\n"}Maybe it’s a bird or a pencil, or a spot on the ceiling.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="OKAY, GOT THEM"
            onPress={() => {
              this.props.navigation.navigate("Exercice_11_4");
            }}
          />
        </View>
      </>
    );
  }
}
