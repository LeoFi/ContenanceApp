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
import * as Progress from "react-native-progress";

import { connect } from "react-redux";

class Exercice_6_Aha_3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/beige_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_6_Challenge");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>Aha!</Text>
                <Text style={styles.text}>
                  {"\n"}Your emotional triggers to use the smartphone are:
                  <Text style={styles.text_bold_italic}>
                    {"\n"}{"\n"}
                    {this.props.user_values.EmTrigger1_D6}
                    {"\n"}
                    {this.props.user_values.EmTrigger2_D6}
                    {"\n"}
                    {this.props.user_values.EmTrigger3_D6}
                  </Text>
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}


const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_6_Aha_3);
