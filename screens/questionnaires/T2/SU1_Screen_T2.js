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
  Modal,
  TouchableHighlight,
  StatusBar,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton,
  LinkText
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";
import {
  Svg,
  Path
} from "react-native-svg";
import * as firebase from "firebase";

import { connect } from "react-redux";
import { Update_Progress_T2 } from "../../../redux-persist/redux/user_values";

class SU1_Screen_T2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonIsActive: false,
      userNationality: "",
      screenTimeHours: "",
      screenTimeMinutes: "",
      pickupNumber: "",
      modalVisibleIos: false,
      modalVisibleAndroid: false,
      progressValueT2: 57 / 60
    };
  }

  handleChangeHours = screenTimeHours => {
    this.setState({ screenTimeHours });
  };

  handleChangeMinutes = screenTimeMinutes => {
    this.setState({ screenTimeMinutes });
  };

  setModalVisibleIos(visible) {
    this.setState({ modalVisibleIos: visible });
  }

  setModalVisibleAndroid(visible) {
    this.setState({ modalVisibleAndroid: visible });
  }

  handleSubmit = () => {
    const { screenTimeHours } = this.state;
    const { screenTimeMinutes } = this.state;
    const progressValueT2 = this.state.progressValueT2;

    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({
        Screen_Time_Hours_D21: screenTimeHours,
        Screen_Time_Minutes_D21: screenTimeMinutes
      });
    this.setState({ progressValueT2: 58 / 60 });
    this.props.dispatch(Update_Progress_T2(progressValueT2));
    this.props.navigation.navigate("SU2_Screen_T2");
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
        <StatusBar hidden />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset="15"
              style={styles.keyboard_view}
            >
              <ScrollView style={{ alignSelf: "stretch" }}>
                <TouchableOpacity
                  onPress={() => {
                    const progressValueT2 = this.state.progressValueT2;
                    this.setState({ progressValueT2: 58 / 60 });
                    this.props.dispatch(Update_Progress_T2(progressValueT2));
                    this.props.navigation.navigate("SU2_Screen_T2");
                  }}
                  style={styles.skip}
                >
                  <Text style={styles.skip_text}>Skip</Text>
                </TouchableOpacity>

                <>
                  <Text style={styles.text_bold_center}>
                    What is your average screen time per day of the last 7 days?
                  </Text>

                  <View style={styles.inline}>
                    <TextInput
                      numberOfLines={10}
                      //multiline={true}
                      style={styles.codeInputLeft}
                      onChangeText={this.handleChangeHours}
                      value={this.state.screenTimeHours}
                      placeholder="Insert hours"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="numeric"
                    />

                    <TextInput
                      numberOfLines={10}
                      //multiline={true}
                      style={styles.codeInputRight}
                      onChangeText={this.handleChangeMinutes}
                      value={this.state.screenTimeMinutes}
                      placeholder="Insert minutes"
                      placeholderTextColor="rgba(44, 59, 81, 0.3)"
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="numeric"
                    />
                  </View>

                  <View style={{ alignItems: "flex-start" }}>
                    <LinkText
                      style={styles.link_text}
                      textLabel=""
                      linkLabel="Where again do I find this in iOS?"
                      linkOnPress={() => {
                        this.setModalVisibleIos(true);
                      }}
                    />
                    <LinkText
                      style={styles.link_text}
                      textLabel=""
                      linkLabel="What if I did not activate the screen time feature?"
                      linkOnPress={() => {
                        this.setModalVisibleAndroid(true);
                      }}
                    />
                  </View>

                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisibleIos}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                    }}
                    style={{
                      flex: 1,
                      justifyContent: "flex-start",
                      alignItems: "flex-start"
                    }}
                  >
                    <TouchableOpacity
                      style={styles.close}
                      onPress={() => {
                        this.setModalVisibleIos(!this.state.modalVisibleIos);
                      }}
                    >
                      <Svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18 15.48L15.48 18L9 11.52L2.52 18L0 15.48L6.48 9L0 2.52L2.52 0L9 6.48L15.48 0L18 2.52L11.52 9L18 15.48Z"
                          fill="#2C3B51"
                        />
                      </Svg>
                    </TouchableOpacity>

                    <View style={styles.top_security_agreements}>
                      <ScrollView>
                        <View
                          style={{
                            paddingTop: 60,
                            paddingLeft: 30,
                            paddingRight: 30,
                            width: Dimensions.get("window").width,
                            alignItems: "center"
                          }}
                        >
                          <Text style={styles.text_scroll}>
                            {"\n"}Where do I find this in iOS?
                            {"\n"}
                            <Text style={styles.text_bold}>
                              Average Screen Time and pick-ups of the last 7
                              days
                            </Text>
                            {"\n"}On your iPhone, go to “Settings”, find "Screen
                            Time" there. Now, choose “Your Name’s iPhone” in the
                            first line on top. Then, tap on "Last 7 Days” on the
                            top right. Find average Screen Time per day of the
                            last 7 days on top. Et voilà!
                          </Text>
                        </View>
                      </ScrollView>
                    </View>
                  </Modal>

                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisibleAndroid}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                    }}
                    style={{
                      flex: 1,
                      justifyContent: "flex-start",
                      alignItems: "flex-start"
                    }}
                  >
                    <TouchableOpacity
                      style={styles.close}
                      onPress={() => {
                        this.setModalVisibleAndroid(
                          !this.state.modalVisibleAndroid
                        );
                      }}
                    >
                      <Svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18 15.48L15.48 18L9 11.52L2.52 18L0 15.48L6.48 9L0 2.52L2.52 0L9 6.48L15.48 0L18 2.52L11.52 9L18 15.48Z"
                          fill="#2C3B51"
                        />
                      </Svg>
                    </TouchableOpacity>

                    <View style={styles.top_security_agreements}>
                      <ScrollView>
                        <View
                          style={{
                            paddingTop: 60,
                            paddingLeft: 30,
                            paddingRight: 30,
                            width: Dimensions.get("window").width,
                            alignItems: "center"
                          }}
                        >
                          <Text style={styles.text_scroll}>
                            {"\n"}No worries, all good.
                            {"\n"}
                            {"\n"}We asked you to acticvate the screen time
                            feature on your iPhone when you started the study.
                            However, if you did not activate it, just skip this
                            question and the next one.
                          </Text>
                        </View>
                      </ScrollView>
                    </View>
                  </Modal>
                </>
              </ScrollView>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Save Number"
                  isBottom={true}
                  disabled={
                    !this.state.screenTimeHours || !this.state.screenTimeMinutes
                  }
                  onPress={this.handleSubmit}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}
const mapStateToProps = state => ({
  user_values: state.user_values,
  user: state.user
});
export default connect(mapStateToProps)(SU1_Screen_T2);
