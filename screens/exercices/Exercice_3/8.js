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
              <View style={styles.container_scroll_start}>
                <View style={{ flex: 1 }}>
                  <Image
                    style={styles.image_height}
                    source={require("../../../assets/images/Exercice3_5.png")}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={styles.sub_header_left}>
                    Putting people first
                  </Text>
                  <Text style={styles.intro_text}>
                    We believe that sustainable change will happen by combining
                    solutions from all the three factors, but we will focus on
                    you as a person by building mental skills.
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
