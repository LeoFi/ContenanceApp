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
import * as Progress from "react-native-progress";

export default class Exercice_6_Challenge extends React.Component {
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
                this.props.navigation.navigate("Exercice_6_Congratulations");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>
                The Challenge
                </Text>
                <Text style={styles.text}>
                  {"\n"}Next time when you catch yourself grabbing the smartphone today, stop for a moment and check your inner state of mind. 
                  {"\n"}{"\n"}Ask yourself: How am I feeling at this moment? 
                  {"\n"}{"\n"} Notice the feeling, you might even try to immerse into it for a moment - and then consciously decide if you want to use your smartphone as a reaction to it.
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

{
  /* <View style={styles.middle}>
  <GreyInputButton label="Email" isBottom={false} />
  <GreyInputButton label="App Notifications" isBottom={true} />
</View>

<PrimaryButton
  label="Sign Up"
  onPress={() => {
    this.props.navigation.navigate("Exercice_1_2");
  }}
/> */
}
