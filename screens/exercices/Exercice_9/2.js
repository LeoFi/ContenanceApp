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
import { Update_Advice1_D9, Update_Advice2_D9, Update_Advice3_D9 } from "./../../../redux-persist/redux/user_values";

class Exercice_9_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Advice1_D9: this.props.user_values.Advice1_D9 || "",
      Advice2_D9: this.props.user_values.Advice2_D9 || "",
      Advice3_D9: this.props.user_values.Advice3_D9 || ""
    };
  }

  handleChange_Advice1 = Advice1_D9 => {
    this.setState({ Advice1_D9 });
  };

  handleChange_Advice2 = Advice2_D9 => {
    this.setState({ Advice2_D9 });
  };

  handleChange_Advice3 = Advice3_D9 => {
    this.setState({ Advice3_D9 });
  };

  handleSubmit = () => {
    const { Advice1_D9 } = this.state;
    const { Advice2_D9 } = this.state;
    const { Advice3_D9 } = this.state;
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        Advice1_D9: Advice1_D9,
        Advice2_D9: Advice2_D9,
        Advice3_D9: Advice3_D9
      });
      this.props.dispatch(Update_Advice1_D9(this.state.Advice1_D9));
      this.props.dispatch(Update_Advice2_D9(this.state.Advice2_D9));
      this.props.dispatch(Update_Advice3_D9(this.state.Advice3_D9));
      this.props.navigation.navigate("Exercice_9_3");
  };

  render() {
    return (
      <View style={{ backgroundColor: "#F4F1DE", flex: 1 }}>
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TouchableWithoutFeedback style={styles.scroll}>
              <View style={styles.container_scroll}>
                <Text style={styles.sub_header}>
                  Let’s reflect on your values!
                </Text>
                <Text style={styles.text}>
                  Remember the advice your older version gave to you.{"\n"}
                  {"\n"}Write down three things an older version of yourself
                  might advice you to value in this life:
                </Text>

                <View style={{justifyContent: "flex-start", paddingTop: 20}}>
                  <TextInput
                    style={styles.codeInput}
                    onChangeText={this.handleChange_Advice1}
                    value={this.state.Advice1_D9}
                    placeholder="Write down first advice"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                  />
                   <TextInput
                    style={styles.codeInput}
                    onChangeText={this.handleChange_Advice2}
                    value={this.state.Advice2_D9}
                    placeholder="Write down second advice"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                  />
                   <TextInput
                    style={styles.codeInput}
                    onChangeText={this.handleChange_Advice3}
                    value={this.state.Advice3_D9}
                    placeholder="Write down third advice"
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
                    disabled={
                      !this.state.Advice1_D9 ||
                      !this.state.Advice2_D9 ||
                      !this.state.Advice3_D9
                    }
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

export default connect(mapStateToProps)(Exercice_9_2);
