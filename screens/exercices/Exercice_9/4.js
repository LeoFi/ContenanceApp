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

class Exercice_9_4 extends React.Component {
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
                this.props.navigation.navigate("Exercice_9_5");
              }}
            >
              <View style={styles.container_center}>
                <Text style={styles.sub_header_left}>
                Defining values.
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}In the following, assign a value that is most aligned to
                  these advices.{"\n"}
                  {"\n"}Tip: Values are the things that you believe are
                  important in the way you live and work.{"\n"}
                  {"\n"}Even if the mediation did not work out for you this
                  time, you can still choose 3 values, no problem.
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

export default connect(mapStateToProps)(Exercice_9_4);
