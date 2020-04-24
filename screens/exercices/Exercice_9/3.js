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

class Exercice_9_3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/red_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View>
            <TouchableWithoutFeedback
              style={{backgroundColor: "#000000", flex: 1}}
              onPress={() => {
                this.props.navigation.navigate("Exercice_9_4");
              }}
            >
              <View style={styles.container_center}>
                <Text style={styles.sub_header_left}>
                Great!
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}The three things your older version suggested you to value in order to be happier in life are:
                </Text>
                <Text style={styles.text_bold_italic_left}>
                  {"\n"}{this.props.user_values.Advice1_D9}
                  {"\n"}{this.props.user_values.Advice2_D9}
                  {"\n"}{this.props.user_values.Advice3_D9}
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

export default connect(mapStateToProps)(Exercice_9_3);
