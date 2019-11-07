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
  Dimensions
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
  Update_Obstacle1_D14,
  Update_Obstacle2_D14,
  Update_Obstacle3_D14
} from "../../../redux-persist/redux/user_values";

class Exercice_14_3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Obstacle1_D14: this.props.user_values.Obstacle1_D14 || "",
      Obstacle2_D14: this.props.user_values.Obstacle2_D14 || "",
      Obstacle3_D14: this.props.user_values.Obstacle3_D14 || ""
    };
  }

  handleChange_Advice1 = Obstacle1_D14 => {
    this.setState({ Obstacle1_D14 });
  };

  handleChange_Advice2 = Obstacle2_D14 => {
    this.setState({ Obstacle2_D14 });
  };

  handleChange_Advice3 = Obstacle3_D14 => {
    this.setState({ Obstacle3_D14 });
  };

  handleSubmit = () => {
    const { Obstacle1_D14 } = this.state;
    const { Obstacle2_D14 } = this.state;
    const { Obstacle3_D14 } = this.state;
    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({
        Obstacle1_D14: Obstacle1_D14,
        Obstacle2_D14: Obstacle2_D14,
        Obstacle3_D14: Obstacle3_D14
      });
    this.props.dispatch(Update_Obstacle1_D14(this.state.Obstacle1_D14));
    this.props.dispatch(Update_Obstacle2_D14(this.state.Obstacle2_D14));
    this.props.dispatch(Update_Obstacle3_D14(this.state.Obstacle3_D14));
    this.props.navigation.navigate("Exercice_14_4");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: "#F4F1DE",
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
                <Text style={styles.sub_header}>It’s your turn!</Text>
                <Text style={styles.text}>
                  Define your three own obstacles.
                  {"\n"}
                  {"\n"}
                  <Text style={styles.text_bold_italic}>
                    {this.props.user_values.NewHabitCommit_D13}
                  </Text>
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
                    value={this.state.Obstacle1_D14}
                    placeholder="Write down first obstacle"
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
                    value={this.state.Obstacle2_D14}
                    placeholder="Write down second obstacle"
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
                    value={this.state.Obstacle3_D14}
                    placeholder="Write down third obstacle"
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
                      !this.state.Obstacle1_D14 ||
                      !this.state.Obstacle2_D14 ||
                      !this.state.Obstacle3_D14
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

export default connect(mapStateToProps)(Exercice_14_3);
