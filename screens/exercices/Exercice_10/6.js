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
import * as firebase from "firebase";
import { connect } from "react-redux";
import { Update_MeanAct1_D10 } from "./../../../redux-persist/redux/user_values";

class Exercice_10_4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      MeanAct2_D10: this.props.user_values.MeanAct2_D10 || ""
    };
  }

  handleChange_Advice1 = MeanAct2_D10 => {
    this.setState({ MeanAct2_D10 });
  };

  handleSubmit = () => {
    const { MeanAct2_D10 } = this.state;
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        MeanAct2_D10: MeanAct2_D10
      });
    this.props.dispatch(Update_MeanAct1_D10(this.state.MeanAct2_D10));
    this.props.navigation.navigate("Exercice_10_7");
  };

  render() {
    return (
      <View style={{ backgroundColor: "#F4F1DE" }}>
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback style={styles.scroll}>
              <View style={styles.container_scroll}>
                <Text style={styles.sub_header}>Bringing values to life</Text>
                <Text style={styles.intro_text_bold}>
                {"\n"}What could an activity look like that helps you bring {this.props.user_values.Value2_D9} to life?
                </Text>
                <Text style={styles.intro_text_grey}>{"\n"}{"\n"}E.g. Relatedness → Having coffee with his best friends</Text>
                

                <View>
                  <TextInput
                    style={styles.codeInput}
                    onChangeText={this.handleChange_Advice1}
                    value={this.state.MeanAct2_D10}
                    placeholder="Write down your activity"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.tap_pos_relative}>
                  <PrimaryButton
                    label="Continue"
                    disabled={!this.state.MeanAct2_D10}
                    onPress={this.handleSubmit}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_10_4);
