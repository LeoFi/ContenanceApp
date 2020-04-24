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

export default class Exercice_17_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: "#FDFDF7"}}>
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_17_3");
              }}
            >
              <View style={styles.container_scroll}>
                <Image
                  style={styles.image_height}
                  source={require("../../../assets/images/Exercice17_2.png")}
                  resizeMode="contain"
                />
                <Text style={styles.intro_text}>
                <Text style={styles.intro_text_bold}>Sustainable change </Text>will happen by combining solutions from three factors: the person, the smartphone and the environment.{"\n"}{"\n"}You learned a number of tools on the side of the person in the last days. Now, you’re ready to bring in <Text style={styles.intro_text_bold}>the smartphone </Text> itself!
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
