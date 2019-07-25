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

export default class Exercice_11_Challenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/beige_shape_inverted.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_11_Congratulations");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>
                The Challenge
                </Text>
                <Text style={styles.text}>
                  {"\n"}The next time you are using
                  {"\n"}{"\n"}{AppsRed1_D7}
                  {"\n"}{"\n"}{AppsRed2_D7}
                  {"\n"}{"\n"}{AppsRed3_D7}
                  {"\n"}{"\n"}give it a try and do the trick to find:
                  {"\n"}5 things you can see
                  {"\n"}4 things you can touch
                  {"\n"}3 things you can hear
                  {"\n"}2 things you can smell
                  {"\n"}1 thing you can taste
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}