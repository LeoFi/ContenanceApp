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
import { connect } from "react-redux";

class Exercice_7_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/yellow_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_7_2");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.sub_header_left}>
                  Which apps are your personal danger zones that pull you in?
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}In order to find out, check your most used apps in your
                  settings.
                </Text>
                <Text style={styles.intro_text_grey}>
                  {"\n"}For iOS: Settings > Screen Time >{" "}
                  {this.props.user.nickname}'s iPhone > Last 7 day > scroll down
                  to MOST USED
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}If you do not use a screen time tracker, just reflect on
                  this for a moment.
                </Text>
                <View style={{ flex: 1 }} />
                <View style={styles.tap_pos_relative_exercice}>
                  <Text style={styles.tap_text}>TAP ANYWHERE TO CONTINUE</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Exercice_7_1);
