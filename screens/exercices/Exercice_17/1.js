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

export default class Exercice_17_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: "#F4F1DE"}}>
        <StatusBar hidden />
        <ScrollView>
          <TouchableWithoutFeedback
            style={styles.scroll}
            onPress={() => {
              this.props.navigation.navigate("Exercice_17_2");
            }}
          >
            <View style={styles.container_scroll}>
              <Image
                style={styles.image_height}
                source={require("../../../assets/images/Exercice3_1.png")}
                resizeMode="contain"
              />
              <Text style={styles.intro_text}>
                Are you thinking right now: wait, I’ve seen this before? Guess
                who's back: <Text style={styles.intro_text_bold}>the Solution Triangle from Day 3</Text>! Do you remember
                the three factors?{"\n"}
                {"\n"}… or maybe not. Neither did we in the beginning. Here
                comes a little refresher.
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}
