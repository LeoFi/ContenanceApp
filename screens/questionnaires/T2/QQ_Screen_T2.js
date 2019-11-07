import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  StatusBar
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import RadioGroup, {
  Radio
} from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";

import { connect } from "react-redux";
import * as firebase from "firebase";
import * as Progress from "react-native-progress";

class QQ_Screen_T2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      show_6: false,
      show_7: false,
      show_8: false,
      show_9: false,
      show_10: false,
      show_11: false,
      show_12: false,
      show_13: false,
      buttonIsActive: false,
      QQ1: "",
      QQ2: "",
      QQ3: "",
      QQ4: "",
      QQ5: "",
      QQ7: "",
      QQ8: "",
      QQ9: "",
      QQ10: "",
      QQ11: "",
      QQ12: "",
      QQ13: "",
      progressValueT2: 44 / 60
    };
  }

  handleChangeQQ1 = QQ1 => {
    this.setState({
      QQ1
    });
  };

  handleChangeQQ2 = QQ2 => {
    this.setState({
      QQ2
    });
  };

  handleChangeQQ3 = QQ3 => {
    this.setState({
      QQ3
    });
  };

  handleChangeQQ4 = QQ4 => {
    this.setState({
      QQ4
    });
  };

  handleChangeQQ5 = QQ5 => {
    this.setState({
      QQ5
    });
  };

  handleChangeQQ7 = QQ7 => {
    this.setState({
      QQ7
    });
  };

  handleChangeQQ8 = QQ8 => {
    this.setState({
      QQ8
    });
  };

  handleChangeQQ9 = QQ9 => {
    this.setState({
      QQ9
    });
  };

  handleChangeQQ10 = QQ10 => {
    this.setState({
      QQ10
    });
  };

  handleChangeQQ11 = QQ11 => {
    this.setState({
      QQ11
    });
  };

  handleChangeQQ12 = QQ12 => {
    this.setState({
      QQ12
    });
  };

  handleChangeQQ13 = QQ13 => {
    this.setState({
      QQ13
    });
  };

  handleSubmit = () => {
    setTimeout(() => {
      this.refs._scrollView.scrollTo({
        x: 0,
        y: 0,
        animated: true
      });
    }, 50);

    const {
      QQ1,
      QQ2,
      QQ3,
      QQ4,
      QQ5,
      QQ7,
      QQ8,
      QQ9,
      QQ10,
      QQ11,
      QQ12,
      QQ13
    } = this.state;

    if (this.state.show_1 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ1: QQ1 });
    } else if (this.state.show_2 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ2: QQ2 });
    } else if (this.state.show_3 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ3: QQ3 });
    } else if (this.state.show_4 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ4: QQ4 });
    } else if (this.state.show_5 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ5: QQ5 });
    } else if (this.state.show_7 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ7: QQ7 });
    } else if (this.state.show_8 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ8: QQ8 });
    } else if (this.state.show_9 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ9: QQ9 });
    } else if (this.state.show_10 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ10: QQ10 });
    } else if (this.state.show_11 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ11: QQ11 });
    } else if (this.state.show_12 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ12: QQ12 });
    } else if (this.state.show_13 == true) {
      firebase
        .database()
        .ref("questionnaires")
        .child(this.props.user.UID)
        .update({ QQ13: QQ13 });
    }

    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValueT2: 45 / 60 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT2: 46 / 60 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValueT2: 47 / 60 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValueT2: 48 / 60 });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValueT2: 49 / 60 });
      } else if (this.state.show_7 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: true });
        this.setState({ progressValueT2: 51 / 60 });
      } else if (this.state.show_8 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: true });
        this.setState({ progressValueT2: 52 / 60 });
      } else if (this.state.show_9 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: true });
        this.setState({ progressValueT2: 53 / 60 });
      } else if (this.state.show_10 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: true });
        this.setState({ progressValueT2: 54 / 60 });
      } else if (this.state.show_11 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: true });
        this.setState({ progressValueT2: 55 / 60 });
      } else if (this.state.show_12 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: true });
        this.setState({ progressValueT2: 56 / 60 });
      } else if (this.state.show_13 == true) {
        this.setState({ buttonIsActive: true });
        this.setState({ progressValueT2: 57 / 60 });
        this.props.navigation.navigate("SU1_Screen_T2");
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValueT2: 45 / 60 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT2: 46 / 60 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValueT2: 47 / 60 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValueT2: 48 / 60 });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValueT2: 49 / 60 });
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValueT2: 50 / 60 });
      } else if (this.state.show_7 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: true });
        this.setState({ progressValueT2: 51 / 60 });
      } else if (this.state.show_8 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: true });
        this.setState({ progressValueT2: 52 / 60 });
      } else if (this.state.show_9 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: true });
        this.setState({ progressValueT2: 53 / 60 });
      } else if (this.state.show_10 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: true });
        this.setState({ progressValueT2: 54 / 60 });
      } else if (this.state.show_11 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: true });
        this.setState({ progressValueT2: 55 / 60 });
      } else if (this.state.show_12 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: false });
        this.setState({ show_9: false });
        this.setState({ show_10: false });
        this.setState({ show_11: false });
        this.setState({ show_12: false });
        this.setState({ show_13: true });
        this.setState({ progressValueT2: 56 / 60 });
      } else if (this.state.show_13 == true) {
        this.setState({ progressValueT2: 57 / 60 });
        this.props.navigation.navigate("SU1_Screen_T2");
      }
    }, 400);
  };

  getChecked = value => {
    setTimeout(() => {
      this.refs._scrollView.scrollTo({
        x: 0,
        y: 0,
        animated: true
      });
    }, 50);

    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];
    console.log(KEY, KEY_Value);
    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({ [KEY]: KEY_Value })
      .then(() => {});

    setTimeout(() => {
      if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValueT2: 51 / 60 });
      }
    }, 400);
  };

  render() {
    return (
      <>
        <StatusBar hidden />
        <View
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 100,
            backgroundColor: "#F4F1DE"
          }}
        >
          <Progress.Bar
            progress={this.state.progressValueT2}
            borderWidth={0}
            borderRadius={0}
            width={null}
            height={10}
            color={"#2C3B51"}
            unfilledColor={"rgba(255, 255, 255, 1)"}
            animated={true}
          />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={
                styles.container_scrollview_content_questionnaire
              }
              keyboardShouldPersistTaps="handled"
              ref="_scrollView"
            >
              <KeyboardAvoidingView
                behavior={this.state.show_6 ? "height" : "padding"}
                keyboardVerticalOffset="60"
              >
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.skipQuestion}
                    style={styles.skip}
                  >
                    <Text style={styles.skip_text}>Skip</Text>
                  </TouchableOpacity>

                  <Text style={styles.header_left_padding}>
                    The 21-days program
                  </Text>
                  {this.state.show_1 ? (
                    <>
                      <Text style={styles.text}>
                        Would you say your relationship to your smartphone
                        changed due to the 21-days program? If yes, how?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ1}
                          value={this.state.QQ1}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />

                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ1}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_2 ? (
                    <>
                      <Text style={styles.text}>
                        What is the primary benefit that you have received from
                        the 21-day program?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ2}
                          value={this.state.QQ2}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ2}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_3 ? (
                    <>
                      <Text style={styles.text}>
                        What type of person do you think would benefit most from
                        the 21-day program?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ3}
                          value={this.state.QQ3}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ3}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_4 ? (
                    <>
                      <Text style={styles.text}>
                        What did you like the most about the 21-day program?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ4}
                          value={this.state.QQ4}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ4}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_5 ? (
                    <>
                      <Text style={styles.text}>
                        How could the 21-day program be improved to better meet
                        your needs?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ5}
                          value={this.state.QQ5}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ5}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_6 ? (
                    <>
                      <Text style={styles.text}>
                        How likely is it that you recommend the 21-days program
                        to a friend or colleague? Assuming that the 21-days
                        program could be purchased as an app.
                      </Text>

                      <View style={styles.question_padding}>
                        <RadioGroup
                          getChecked={this.getChecked}
                          isScaleEnabled={false}
                          QQLabel={true}
                          labelLeft="Very Unlikely"
                          labelRight="Very Likely"
                          RadioGroupStyle={{
                            flexDirection: "column",
                            paddingTop: 20,
                            paddingBottom: 20
                          }}
                          RadioStyle={{
                            width: "100%",
                            height: 49,
                            borderRadius: 30,
                            marginBottom: 10,
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                          labelStyle={{
                            fontSize: 14,
                            paddingLeft: 20,
                            paddingRight: 20,
                            alignItems: "stretch",
                            color: "#2C3B51",
                            textAlign: "center"
                          }}
                        >
                          <Radio
                            iconName={"lens"}
                            label={"1"}
                            value={"QQ6_NPS/1"}
                          />
                          <Radio
                            iconName={"lens"}
                            label={"2"}
                            value={"QQ6_NPS/2"}
                          />
                          <Radio
                            iconName={"lens"}
                            label={"3"}
                            value={"QQ6_NPS/3"}
                          />
                          <Radio
                            iconName={"lens"}
                            label={"4"}
                            value={"QQ6_NPS/4"}
                          />
                          <Radio
                            iconName={"lens"}
                            label={"5"}
                            value={"QQ6_NPS/5"}
                          />
                          <Radio
                            iconName={"lens"}
                            label={"6"}
                            value={"QQ6_NPS/6"}
                          />
                          <Radio
                            iconName={"lens"}
                            label={"7"}
                            value={"QQ6_NPS/7"}
                          />
                          <Radio
                            iconName={"lens"}
                            label={"8"}
                            value={"QQ6_NPS/8"}
                          />
                          <Radio
                            iconName={"lens"}
                            label={"9"}
                            value={"QQ6_NPS/9"}
                          />
                          <Radio
                            iconName={"lens"}
                            label={"10"}
                            value={"QQ6_NPS/10"}
                          />
                        </RadioGroup>
                      </View>

                      <View style={styles.bottom} />
                    </>
                  ) : null}

                  {this.state.show_7 ? (
                    <>
                      <Text style={styles.text}>
                        What price do you think is the best for the product?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ7}
                          value={this.state.QQ7}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ7}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_8 ? (
                    <>
                      <Text style={styles.text}>
                        What price do you consider to be expensive for the
                        product, but just acceptable?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ8}
                          value={this.state.QQ8}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ8}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_9 ? (
                    <>
                      <Text style={styles.text}>
                        What price do you find too cheap for the product, so
                        that you would doubt the quality?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ9}
                          value={this.state.QQ9}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ9}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_10 ? (
                    <>
                      <Text style={styles.text}>
                        You did the 21-day program within an app. In your
                        opinion, what is the best format for the 21-day program?
                      </Text>
                      <Text style={styles.text_small_QQ}>
                        For example App, Online video course, Offline workshop
                        in a group, Offline workshop with a coach, Book etc.
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ10}
                          value={this.state.QQ10}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      {/* <View style={{ flex: 1 }} /> */}
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ10}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_11 ? (
                    <>
                      <Text style={styles.text}>
                        How would you describe your user experience with the
                        functionalities of the app?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ11}
                          value={this.state.QQ11}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ11}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_12 ? (
                    <>
                      <Text style={styles.text}>
                        What are your thoughts on the design and layout of the
                        app?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ12}
                          value={this.state.QQ12}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ12}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}

                  {this.state.show_13 ? (
                    <>
                      <Text style={styles.text}>
                        Do you want to make any additional comments?
                      </Text>

                      <View style={styles.question}>
                        <TextInput
                          onFocus={() =>
                            setTimeout(() => {
                              this.refs._scrollView.scrollToEnd();
                            }, 50)
                          }
                          numberOfLines={10}
                          //multiline={true}
                          style={styles.codeInput_QQ}
                          onChangeText={this.handleChangeQQ13}
                          value={this.state.QQ13}
                          placeholder="Your Answer"
                          placeholderTextColor="rgba(44, 59, 81, 0.3)"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                      </View>

                      <View style={{ flex: 1 }} />
                      <View style={styles.bottom}>
                        <PrimaryButton
                          label="Keep Going"
                          isBottom={true}
                          disabled={!this.state.QQ13}
                          onPress={this.handleSubmit}
                        />
                      </View>
                    </>
                  ) : null}
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(QQ_Screen_T2);
