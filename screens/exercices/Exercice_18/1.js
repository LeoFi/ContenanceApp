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

export default class Exercice_18_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: "#FDFDF7" }}>
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_18_2");
              }}
            >
              <View style={styles.container_scroll}>
                <View style={{ flex: 1 }} />
                <Image
                  style={styles.image_height}
                  source={require("../../../assets/images/Exercice18_1.png")}
                  resizeMode="contain"
                />
                <Text style={styles.intro_text}>
                  Yes, it’s the triangle again. Now, it’s time to bring in
                  the{" "}
                  <Text style={styles.intro_text_bold}>
                    last factor: the environment
                  </Text>
                  . Here, you have an active role to play as the architect of
                  your own environment.
                </Text>
                <View style={{ flex: 1 }} />
                <View style={styles.tap_pos_relative_exercice}>
                  <Text style={styles.tap_text}>TAP ANYWHERE TO CONTINUE</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
