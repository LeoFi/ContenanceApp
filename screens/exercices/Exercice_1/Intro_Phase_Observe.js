import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Button,
  StatusBar,
  ImageBackground
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  HeaderComponent
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_1_Intro extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  render() {
    return (
      <ImageBackground source={require("../../../assets/images/pink_shape.png")} style={{width: '100%', backgroundColor: "#F4F1DE"}}>
        <StatusBar hidden />
        <ScrollView style={styles.container_scroll}>
          <View>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
              // this.setState({progress: 0.9})
              this.props.navigation.navigate("Exercice_1_Intro");
              }}
            >
              <View style={styles.container}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/images/placeholder.png")}
                />
                <Text style={styles.intro_header}>Understand</Text>
                <Text style={styles.intro_text}>
                  {"\n"}Welcome the the wide ocean!{"\n"}This is how being on
                  the smartphone can feel like with all its’ great
                  opportunities. But sometimes, it’s hard to navigate There are
                  impulse waves pulling you underwater when you’re hit by them.
                  {"\n"}Leo explores how being in the digital ocean feels.
                </Text>
                <Text style={styles.intro_text_bold}>
                {"\n"}This module is all about observing yourself while you’re on
                  the smartphone. No judgements, no changes. Just observe
                  yourself in the wide, digital ocean.
                </Text>
                <View style={styles.bottom}>
                  <Text style={styles.tap_text}>TAP ANYWHERE TO CONTINUE.</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
