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

export default class Exercice_14_5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/green_shape_full.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_14_6");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.intro_text}>
                Have a peak into what Leo came up with.
                </Text>
                <Text style={styles.intro_text_grey}>
                  {"\n"}What could happen in Leo’s case? If I am in the metro,
                  then I will to listen to a TED talk, but:
                </Text>
                <Text style={styles.intro_text_grey_padding}>
                  {"\n"}1. I don’t have enough data to stream it on the go.{"\n"}----> then I will have some podcasts downloaded already{"\n"}
                  {"\n"}2. I don’t have my earphones with me.{"\n"}---->  then I will read the script from the TED talk instead{"\n"}
                  {"\n"}3. I feel overwhelmed by the number of talks and can’t decide.{"\n"}----> then I will listen to the TED talk of the day
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}