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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container_scroll}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_5_3");
              }}
            >
              <View>
                <View style={{ flex: 1, justifyContent: "center" }}>
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

                <View style={styles.tap_pos_relative_exercice}>
                  <Text style={styles.tap_text}>TAP ANYWHERE TO CONTINUE</Text>
                </View>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
