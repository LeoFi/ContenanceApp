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
import { Update_CopingStrategy1_D14 } from "../../../redux-persist/redux/user_values";

class Exercice_14_6 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CopingStrategy1_D14: this.props.user_values.CopingStrategy1_D14 || ""
    };
  }

  handleChange_Advice1 = CopingStrategy1_D14 => {
    this.setState({ CopingStrategy1_D14 });
  };

  handleSubmit = () => {
    const { CopingStrategy1_D14 } = this.state;

    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({
        CopingStrategy1_D14: CopingStrategy1_D14
      });
    this.props.dispatch(
      Update_CopingStrategy1_D14(this.state.CopingStrategy1_D14)
    );
    this.props.navigation.navigate("Exercice_14_7");
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
                <Text style={styles.sub_header}>It’s your turn!</Text>
                <Text style={styles.text}>
                  Define your own strategies to still realize your plan.
                </Text>

                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={styles.text}>
                    If{" "}
                    <Text style={styles.text_bold_italic}>
                      {this.props.user_values.Obstacle1_D14}
                    </Text>
                    , then:{"\n"}
                  </Text>
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
                    value={this.state.CopingStrategy1_D14}
                    placeholder="What can be your first strategy?"
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
                    disabled={!this.state.CopingStrategy1_D14}
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

export default connect(mapStateToProps)(Exercice_14_6);
