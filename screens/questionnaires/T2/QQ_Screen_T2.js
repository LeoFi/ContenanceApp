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
  Keyboard
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

import * as firebase from "firebase";

export default class QQ_Screen_T2 extends React.Component {
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
      QQ1: ""
    };
  }

  handleChange = QQ1 => {
    this.setState({ QQ1 });
  };

  handleSubmit = () => {
    const { QQ1 } = this.state;
    //console.log(QQ1);
    const uid = firebase.auth().currentUser.uid;
    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];

    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({ QQ1: QQ1, [KEY]: KEY_Value });

    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
      } else if (this.state.show_7 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: true });
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
      } else if (this.state.show_13 == true) {
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
      } else if (this.state.show_7 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: false });
        this.setState({ show_8: true });
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
      }
    }, 400);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <>
            {!this.state.show_13 ? (
              <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
                <Text style={styles.skip_text}>Skip</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Closing_Screen_T2");
                }}
                style={styles.skip}
              >
                <Text style={styles.skip_text}>Skip</Text>
              </TouchableOpacity>
            )}

            <Text style={styles.header_left_padding}>The 21-days program</Text>

            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset="15"
              style={styles.keyboard_view}
            >
              {this.state.show_1 ? (
                <>
                  <Text style={styles.text}>
                    Would you say your relationship to your smartphone changed
                    due to the 21-days program? If yes, how?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.QQ1}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
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
                    Which additional strategies (e.g. checking screen time or
                    setting app use limits) did you apply to improve your
                    smartphone use?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}

              {this.state.show_3 ? (
                <>
                  <Text style={styles.text}>
                    In your opinion: What was missing or disappointing in the
                    21-days program?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}

              {this.state.show_4 ? (
                <>
                  <Text style={styles.text}>
                    What did you like the most about the 21-days program?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}

              {this.state.show_5 ? (
                <>
                  <Text style={styles.text}>
                    Which 3 exercises did you like best? Why?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}

              {this.state.show_6 ? (
                <>
                  <Text style={styles.text}>
                    Which 3 exercises did you like the least? Why?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}

              {this.state.show_7 ? (
                <>
                  <Text style={styles.text}>
                    How would you describe your experience with the
                    functionalities of the app?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}

              {this.state.show_8 ? (
                <>
                  <Text style={styles.text}>
                    What are your thoughts on the design and layout of the app?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}

              {this.state.show_9 ? (
                <>
                  <Text style={styles.text}>
                    How likely is it that you
                    recommend the 21-days program to a friend or colleague?
                    Assuming that the 21-days program could be
                    purchased as an app.
                  </Text>

                  <View style={styles.question}>
                    <RadioGroup
                      getChecked={this.handleSubmit}
                      RadioGroupStyle={{flexDirection: "column" }}
                      labelLeft="Very unlikely"
                      labelRight="Very likely"
                    >
                      <Radio
                        iconName={"lens"}
                        label={"0"}
                        value={"QQ9_NPS/0"}
                      />
                      <Radio
                        iconName={"lens"}
                        label={"1"}
                        value={"QQ9_NPS/1"}
                      />
                      <Radio
                        iconName={"lens"}
                        label={"2"}
                        value={"QQ9_NPS/2"}
                      />
                      <Radio
                        iconName={"lens"}
                        label={"3"}
                        value={"QQ9_NPS/3"}
                      />
                      <Radio
                        iconName={"lens"}
                        label={"4"}
                        value={"QQ9_NPS/4"}
                      />
                      <Radio
                        iconName={"lens"}
                        label={"5"}
                        value={"QQ9_NPS/5"}
                      />
                      <Radio
                        iconName={"lens"}
                        label={"6"}
                        value={"QQ9_NPS/6"}
                      />
                      <Radio
                        iconName={"lens"}
                        label={"7"}
                        value={"QQ9_NPS/7"}
                      />
                      <Radio
                        iconName={"lens"}
                        label={"8"}
                        value={"QQ9_NPS/8"}
                      />
                      <Radio
                        iconName={"lens"}
                        label={"9"}
                        value={"QQ9_NPS/9"}
                      />
                      <Radio
                        iconName={"lens"}
                        label={"10"}
                        value={"QQ9_NPS/10"}
                      />
                    </RadioGroup>
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}

              {this.state.show_10 ? (
                <>
                  <Text style={styles.text}>
                    What price do you think is the best for the product?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}

              {this.state.show_11 ? (
                <>
                  <Text style={styles.text}>
                    What price do you consider to be expensive for the product,
                    but just acceptable?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}

              {this.state.show_12 ? (
                <>
                  <Text style={styles.text}>
                    What price do you find too cheap for the product, so that
                    you would doubt the quality?
                  </Text>

                  <View style={styles.question}>
                    <TextInput
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
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
                      style={styles.codeInput_QQ}
                      onChangeText={this.handleChange}
                      value={this.state.userAge}
                      placeholder="Your Answer"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <View style={styles.bottom}>
                    <PrimaryButton
                      label="Continue"
                      isBottom={true}
                      disabled={!this.state.userAge}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </>
              ) : null}
            </KeyboardAvoidingView>
          </>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
