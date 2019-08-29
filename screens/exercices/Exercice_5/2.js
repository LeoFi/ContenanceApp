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

export default class Exercice_5_2 extends React.Component {
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
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_5_3");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.sub_header_left}>
                  Changing habits is tough
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}Habits are a double-edged sword. They can work for or
                  against you. To achieve a positive relationship to your
                  smartphone, we have to identify your{" "}
                  <Text style={styles.intro_text_bold}>
                    very personal Habit DNA!
                  </Text>
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}