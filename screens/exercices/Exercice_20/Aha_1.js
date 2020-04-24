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

export default class Exercice_20_Aha_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/blue_aha.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_20_Aha_2");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>
                Aha!
                </Text>
                <Text style={styles.text}>
                  {"\n"}We call this activity <Text style={styles.intro_text_bold}>Daddeln</Text>.
                  {"\n"}{"\n"}Most of us are doing Daddeln almost every day like mindlessly scrolling through Instagram or binge-watching YouTube after a long day of work.
                  {"\n"}{"\n"}At the beginning, this feels incredibly good to exhausted brains. But often, there comes a turning point, where the activity starts making us feel bad. We feel like we’ve spent more time on the device than we intended to.
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}