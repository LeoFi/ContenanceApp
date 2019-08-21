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

export default class Exercice_14_2 extends React.Component {
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
                this.props.navigation.navigate("Exercice_14_3");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.intro_text}>
                  Visualize{" "}
                  <Text style={styles.intro_text_bold}>three scenarios </Text>in
                  which it’s going to be a challenge to stick to your newly
                  defined plan.
                </Text>
                <Text style={styles.intro_text_grey}>
                  {"\n"}What could happen in Leo’s case? If I am in the metro,
                  then I will to listen to a TED talk, but:
                </Text>
                <Text style={styles.intro_text_grey_padding}>
                  {"\n"}1. I don’t have enough data to stream it on the go.{"\n"}
                  {"\n"}2. I don’t have my earphones with me.{"\n"}
                  {"\n"}3. I feel overwhelmed by the number of talks and can’t decide.
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}