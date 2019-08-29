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

class Exercice_10_1 extends React.Component {
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TouchableWithoutFeedback
              style={{backgroundColor: "#000000", flex: 1}}
              onPress={() => {
                this.props.navigation.navigate("Exercice_10_2");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.sub_header_left}>
                How can you realize what is important to you and bring your values to life?
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}Your three values are:
                </Text>
                <Text style={styles.text_bold_italic}>
                  {"\n"}{this.props.user_values.Value1_D9}
                  {"\n"}{this.props.user_values.Value2_D9}
                  {"\n"}{this.props.user_values.Value3_D9}
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

export default connect(mapStateToProps)(Exercice_10_1);
