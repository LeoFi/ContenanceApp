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

export default class Exercice_17_7_android extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/blue_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_17_8");
              }}
            >
              <View style={styles.container_top}>
                <Text style={styles.sub_header_left}>
                  Turning off notifications in Android.
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}Visit Settings > Apps and Notifications > Notifications.
                  {"\n"}
                  {"\n"}Turn off all notifications, banners, and badges, except from apps where real people want your attention.{"\n"}
                  {"\n"}This can be messaging apps like WhatsApp, FB Messenger, Telegram, WeChat etc.
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
