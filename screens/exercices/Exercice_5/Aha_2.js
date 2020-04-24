import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

import { connect } from "react-redux";

class Exercice_5_Aha_2 extends React.Component {
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
                this.props.navigation.navigate("Exercice_5_Challenge");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>
                Aha!
                </Text>
                <Text style={styles.text}>
                  {"\n"}Leo's situational trigger is entering the metro.
                  {"\n"}{"\n"}For you, it is:
                </Text>
                <Text style={styles.text_bold_italic}>
                  {"\n"}{this.props.user_values.SitTrigger1_D5}
                  {"\n"}{this.props.user_values.SitTrigger2_D5}
                  {"\n"}{this.props.user_values.SitTrigger3_D5}
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

export default connect(mapStateToProps)(Exercice_5_Aha_2);
