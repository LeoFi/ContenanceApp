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

export default class Exercice_17_9 extends React.Component {
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
                this.props.navigation.navigate("Exercice_17_10");
              }}
            >
              <View style={styles.container_scroll}>
              <Text style={styles.sub_header_left}>
              2. Design a home screen that feels like home.
                </Text>
                <Text style={styles.intro_text}>
                {"\n"}This is how it works:{"\n"}{"\n"}Limit your first page of apps to just tools – the apps you use for quick in-and-out tasks like Maps, Camera, Calendar, Notes, Music, or the Mobility app of your choice.{"\n"}{"\n"}Move the rest of your apps, especially mindless choices, off the first page and into folders.
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
