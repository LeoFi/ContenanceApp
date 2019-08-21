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

class Exercice_7_4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/pink_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_7_Aha_1");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.intro_text}>
                  {"\n"}Okay. But, how do{" "}
                  <Text style={styles.text_bold_italic}>
                    {this.props.user_values.AppsRed1_D7}
                    {", "}
                    {this.props.user_values.AppsRed2_D7}
                    {" and "}
                    {this.props.user_values.AppsRed3_D7}
                  </Text>
                  {" "}actually pull you in?{"\n"}{"\n"}Don’t worry, it’s not you, it’s them.
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

export default connect(mapStateToProps)(Exercice_7_4);
