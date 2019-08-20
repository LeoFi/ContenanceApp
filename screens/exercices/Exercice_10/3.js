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

class Exercice_10_3 extends React.Component {
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
          <View>
            <TouchableWithoutFeedback
              style={{backgroundColor: "#000000", flex: 1}}
              onPress={() => {
                this.props.navigation.navigate("Exercice_10_4");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.intro_text_bold}>
                  {"\n"}What could activities on his smartphone look like that put his values into practice?
                </Text>
                <Text style={styles.intro_text}>
                {"\n"}Learning → Listening to a TED talk on his smartphone
                {"\n"}{"\n"}Relatedness → Sending his best friend a thoughtful message
                {"\n"}{"\n"}Gratefulness → starting a gratefulness journal in the notes
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

export default connect(mapStateToProps)(Exercice_10_3);
