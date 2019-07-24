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

export default class Exercice_3_4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <StatusBar hidden />
        <ScrollView>
          <TouchableWithoutFeedback
            style={styles.scroll}
            onPress={() => {
              this.props.navigation.navigate("Exercice_3_5");
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                style={styles.image_height_relative}
                source={require("../../../assets/images/Exercice3_1.png")}
                resizeMode="contain"
              />
              <View style={styles.container_scroll_img}>
                <Text style={styles.sub_header_left}>
                  The Solution Triangle
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}We asked you to reflect on these hacks to introduce the
                  so-called Solution Triangle. It consists of three crucial
                  factors: your smartphone, your environment and you as a
                  person.
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}
