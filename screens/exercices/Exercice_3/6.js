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

export default class Exercice_3_6 extends React.Component {
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
                this.props.navigation.navigate("Exercice_3_7");
              }}
            >
              <View style={styles.container_scroll_start}>
                <View style={{ flex: 1 }}>
                  <Image
                    style={styles.image_height}
                    source={require("../../../assets/images/Exercice3_3.png")}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.intro_text}>
                    How often is your smartphone more than a hand-reach away
                    from you? Hacks like doing a detox for a day, or to
                    intentionally not use the phone in certain occasions come
                    from the second factor: designing a better{" "}
                    <Text style={styles.intro_text_bold}>environment</Text>,
                    when the smartphone is around us. Deciding on situations
                    where it has to be around and situations where it is not
                    really needed.
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
