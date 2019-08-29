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
      MeanAct1_D10: this.props.user_values.MeanAct1_D10 || ""
    };
  }

  handleChange_Advice1 = MeanAct1_D10 => {
    this.setState({ MeanAct1_D10 });
  };

  handleSubmit = () => {
    const { MeanAct1_D10 } = this.state;
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        MeanAct1_D10: MeanAct1_D10
      });
    this.props.dispatch(Update_MeanAct1_D10(this.state.MeanAct1_D10));
    this.props.navigation.navigate("Exercice_10_5");
  };

  render() {
    return (
      <View style={{ backgroundColor: "#F4F1DE", flex: 1 }}>
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TouchableWithoutFeedback style={styles.scroll}>
              <View style={styles.container_top}>
                <Text style={styles.sub_header}>Bringing values to life</Text>
                <Text style={styles.intro_text_bold}>
                  {"\n"}What could an activity look like that helps you bring{" "}
                  {this.props.user_values.Value1_D9} to life?
                </Text>
                <Text style={styles.intro_text_grey}>
                  {"\n"}
                  {"\n"}E.g. Learning → Reading a science magazin
                </Text>

                <View>
                  <TextInput
                    style={styles.codeInput}
                    onChangeText={this.handleChange_Advice1}
                    value={this.state.MeanAct1_D10}
                    placeholder="Write down your activity"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Continue"
            disabled={!this.state.MeanAct1_D10}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_10_4);
