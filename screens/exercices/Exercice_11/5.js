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

export default class Exercice_11_5 extends React.Component {
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
                  d="M35.1641 36.8281H38.4219C40.4688 36.7969 42.0781 36.2578 43.25 35.2109C44.4219 34.1641 45.0078 32.75 45.0078 30.9688C45.0078 26.9688 43.0156 24.9688 39.0312 24.9688C37.1562 24.9688 35.6562 25.5078 34.5312 26.5859C33.4219 27.6484 32.8672 29.0625 32.8672 30.8281H28.5312C28.5312 28.125 29.5156 25.8828 31.4844 24.1016C33.4688 22.3047 35.9844 21.4062 39.0312 21.4062C42.25 21.4062 44.7734 22.2578 46.6016 23.9609C48.4297 25.6641 49.3438 28.0312 49.3438 31.0625C49.3438 32.5469 48.8594 33.9844 47.8906 35.375C46.9375 36.7656 45.6328 37.8047 43.9766 38.4922C45.8516 39.0859 47.2969 40.0703 48.3125 41.4453C49.3438 42.8203 49.8594 44.5 49.8594 46.4844C49.8594 49.5469 48.8594 51.9766 46.8594 53.7734C44.8594 55.5703 42.2578 56.4688 39.0547 56.4688C35.8516 56.4688 33.2422 55.6016 31.2266 53.8672C29.2266 52.1328 28.2266 49.8438 28.2266 47H32.5859C32.5859 48.7969 33.1719 50.2344 34.3438 51.3125C35.5156 52.3906 37.0859 52.9297 39.0547 52.9297C41.1484 52.9297 42.75 52.3828 43.8594 51.2891C44.9688 50.1953 45.5234 48.625 45.5234 46.5781C45.5234 44.5938 44.9141 43.0703 43.6953 42.0078C42.4766 40.9453 40.7188 40.3984 38.4219 40.3672H35.1641V36.8281Z"
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
                Name 3 things you hear.
              </Text>
              <Text style={styles.intro_text}>
                {"\n"}Maybe you can hear a clock, a bird or your tummy rumbling.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottom_button}>
          <PrimaryButton
            label="YEP"
            onPress={() => {
              this.props.navigation.navigate("Exercice_11_6");
            }}
          />
        </View>
      </>
    );
  }
}
