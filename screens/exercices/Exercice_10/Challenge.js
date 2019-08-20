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

class Exercice_10_Challenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/beige_shape_inverted.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_10_Congratulations");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>The Challenge</Text>
                <Text style={styles.text}>
                  {"\n"}Until tomorrow, do a test run of the meaningful
                  smartphone activity that you defined today!
                  {"\n"}
                  {"\n"}Your meaningful activities are:
                  <Text style={styles.text_bold_italic}>
                    {"\n"}
                    {"\n"}
                    {this.props.user_values.MeanSmAct1_D10}

                    {"\n"}
                    {"\n"}
                    {this.props.user_values.MeanSmAct2_D10}

                    {"\n"}
                    {"\n"}
                    {this.props.user_values.MeanSmAct3_D10}
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

export default connect(mapStateToProps)(Exercice_10_Challenge);
