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

export default class Exercice_3_8 extends React.Component {
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
                this.props.navigation.navigate("Exercice_3_Aha_1");
              }}
            >
              <View style={styles.container_scroll}>
                <Image
                  style={styles.image_height}
                  source={require("../../../assets/images/Exercice3_5.png")}
                  resizeMode="contain"
                />
                <Text style={styles.sub_header_left}>
                Putting people first
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}We believe that sustainable change will happen by combining solutions from all three factors, but focusing on YOU as a person. 
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
