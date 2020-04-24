import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  Alert
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as firebase from "firebase";
import { connect } from "react-redux";
import {
  Update_Advice1_D9,
  Update_Advice2_D9,
  Update_Advice3_D9
} from "./../../../redux-persist/redux/user_values";

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

    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({
        Advice1_D9: this.state.Advice1_D9,
        Advice2_D9: this.state.Advice2_D9,
        Advice3_D9: this.state.Advice3_D9
      });
    this.props.dispatch(Update_Advice1_D9(this.state.Advice1_D9));
    this.props.dispatch(Update_Advice2_D9(this.state.Advice2_D9));
    this.props.dispatch(Update_Advice3_D9(this.state.Advice3_D9));
    this.props.navigation.navigate("Exercice_9_3");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: "#FDFDF7",
          justifyContent: "flex-start"
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="0">
            <ScrollView
              contentContainerStyle={styles.container_scrollview_content}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              ref="_scrollView"
            >
              <View
                style={{
                  flex: 1,
                  width: Dimensions.get("window").width - 60,
                  height: Dimensions.get("window").height - 110
                }}
              >
                <Text style={styles.sub_header}>
                  Let’s reflect on your values!
                </Text>
                <Text style={styles.text}>
                  Remember the advice your older version gave to you.{"\n"}
                  {"\n"}Write down three things an older version of yourself
                  might advice you to value in this life:
                </Text>

                <View style={{ paddingTop: 20 }}>
                  <TextInput
                    onFocus={() =>
                      setTimeout(() => {
                        this.refs._scrollView.scrollToEnd();
                      }, 50)
                    }
                    numberOfLines={10}
                    //multiline={true}
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
                    onFocus={() =>
                      setTimeout(() => {
                        this.refs._scrollView.scrollToEnd();
                      }, 50)
                    }
                    numberOfLines={10}
                    //multiline={true}
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
                    onFocus={() =>
                      setTimeout(() => {
                        this.refs._scrollView.scrollToEnd();
                      }, 50)
                    }
                    numberOfLines={10}
                    //multiline={true}
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

                <View style={{ flex: 1 }} />

                <View style={styles.bottom}>
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
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values,
  user: state.user
});

export default connect(mapStateToProps)(Exercice_9_2);
