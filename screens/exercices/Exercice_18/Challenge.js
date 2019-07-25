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

export default class Exercice_18_Challenge extends React.Component {
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
                this.props.navigation.navigate("Exercice_3_Congratulations");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>
                The Challenge
                </Text>
                <Text style={styles.text}>
                  {"\n"}From now on, stick to these situations in which you will have your smartphone around - or not.
                  {"\n"}{"\n"}This might be quite a radical change. Here comes a little tip: You can start with implementing one GO and one NO GO per day.
                  {"\n"}{"\n"}Wait, what are my GOs and NO GOs again?  {/* This needs to be a link to a pop-up */}
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}