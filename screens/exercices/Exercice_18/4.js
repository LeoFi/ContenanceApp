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

class Exercice_18_4 extends React.Component {
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
                this.props.navigation.navigate("Exercice_18_Aha_1");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.intro_text}>
                  Et voilà, this is your personal environment design plan to
                  support a better relationship with your smartphone.{"\n"}
                  {"\n"}
                  <Text style={styles.intro_text}>
                    Smartphone GO Situations:
                  </Text>
                  {"\n"}{"\n"}
                  <Text style={styles.text_bold_italic}>{this.props.user_values.SPGoSit1_D18}
                  {"\n"}
                  {this.props.user_values.SPGoSit2_D18}
                  {"\n"}
                  {this.props.user_values.SPGoSit3_D18}</Text>
                  {"\n"}
                  {"\n"}
                  <Text style={styles.intro_text}>
                    Smartphone NO GO Situations:
                  </Text>
                  {"\n"}
                  {"\n"}
                  <Text style={styles.text_bold_italic}>{this.props.user_values.SPNoGoSit1_D18}
                  {"\n"}
                  {this.props.user_values.SPNoGoSit2_D18}
                  {"\n"}
                  {this.props.user_values.SPNoGoSit3_D18}</Text>
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

export default connect(mapStateToProps)(Exercice_18_4);
