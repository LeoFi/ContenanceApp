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

class Exercice_10_2 extends React.Component {
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TouchableWithoutFeedback
              style={{backgroundColor: "#000000", flex: 1}}
              onPress={() => {
                this.props.navigation.navigate("Exercice_10_3");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.intro_text}>
                  We will have a look at Leo’s values first.
                </Text>
                <Text style={styles.intro_text_bold}>
                  {"\n"}What could activities look like that bring his values to life?
                </Text>
                <Text style={styles.intro_text}>
                {"\n"}Learning → Reading a science magazine 
                {"\n"}{"\n"}Relatedness → Having coffee with his best friends
                {"\n"}{"\n"}Gratefulness → Gifting flowers to someone
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

export default connect(mapStateToProps)(Exercice_10_2);
