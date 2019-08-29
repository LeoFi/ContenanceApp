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

class Exercice_20_2 extends React.Component {
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
                this.props.navigation.navigate("Exercice_20_3");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.intro_text}>
                  Now, do your favourite mindless activity on your smartphone
                  for five minutes.{"\n"}
                  {"\n"}This might be {this.props.user_values.AppsRed1_D7},{" "}
                  {this.props.user_values.AppsRed2_D7} or{" "}
                  {this.props.user_values.AppsRed3_D7}.{"\n"}
                  {"\n"}Enjoy it to the fullest!{"\n"}
                  {"\n"}Start the timer in the next screen.
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

export default connect(mapStateToProps)(Exercice_20_2);
