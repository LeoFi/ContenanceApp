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

export default class Exercice_3_7 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_3_8");
              }}
            >
              <View style={styles.container_scroll}>
                <Image
                  style={styles.image_height}
                  source={require("../../../assets/images/Exercice3_4.png")}
                  resizeMode="contain"
                />
                <Text style={styles.intro_text}>
                  {"\n"}Interestingly,  most of the strategies and hacks you can find on blogs or in books are mainly focusing on the smartphone and the environment. Although they are highly valuable, we believe in the power of the <Text style={styles.intro_text_bold}>person</Text> to take control. It is you who is in control! You have the power to consciously use the phone, not less but better, for your own benefit.
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
