import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";

export default class Exercice_4_Aha_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/beige_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_4_Aha_2");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>
                Aha!
                </Text>
                <Text style={styles.text}>
                  {"\n"}Being on smart devices has an effect on your physiology.
                  {"\n"}{"\n"}Email Apnea is the phenomenon that people are unconsciously holding their breath or breathing shallowly while checking emails.
                  {"\n"}{"\n"}By doing so you put your body in "fight or flight" mode, which shoots up your heart rate and creates a feeling of stress.
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}