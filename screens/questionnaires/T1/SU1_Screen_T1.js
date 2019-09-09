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

import * as firebase from "firebase";

export default class SU1_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 69 / 79,
      buttonIsActive: false,
      userNationality: "",
      screenTimeHours: "",
      screenTimeMinutes: "",
      pickupNumber: "",
      modalVisibleIos: false,
      modalVisibleAndroid: false
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

    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        Screen_Time_Hours_D1: screenTimeHours,
        Screen_Time_Minutes_D1: screenTimeMinutes
      });
    this.setState({ progressValue: 70 / 79 });
    this.props.navigation.navigate("SU2_Screen_T1");
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
            progress={this.state.progressValue}
            borderWidth={0}
            borderRadius={0}
            width={null}
            height={10}
            color={"#2C3B51"}
            unfilledColor={"rgba(255, 255, 255, 1)"}
            animated={true}
          />
        </View>
        <View style={styles.container}>
          <ScrollView style={{ alignSelf: "stretch" }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ progressValue: 70 / 79 });
                this.props.navigation.navigate("SU2_Screen_T1");
              }}
              style={styles.skip}
            >
              <Text style={styles.skip_text}>Skip</Text>
            </TouchableOpacity>
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset="15"
              style={styles.keyboard_view}
            >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                  <Text style={styles.text_bold_center}>
                    What is your average screen time per day of the last 7 days?
                  </Text>

                  <Text style={styles.text_left_small_center}>
                    If you do not have a screen time tracker, please skip this
                    question.
                  </Text>

                  <View style={styles.inline}>
                    <TextInput
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
                      linkLabel="Where do I find this in iOS?"
                      linkOnPress={() => {
                        this.setModalVisibleIos(true);
                      }}
                    />
                    <LinkText
                      style={styles.link_text}
                      textLabel=""
                      linkLabel="Where do I find this in Android?"
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
                  >
                    <TouchableHighlight
                      style={styles.close}
                      onPress={() => {
                        this.setModalVisibleIos(!this.state.modalVisibleIos);
                      }}
                    >
                      <Image
                        style={{ marginTop: 20 }}
                        source={require("./../../../assets/images/close.png")}
                      />
                    </TouchableHighlight>
                    {/* <Icon name="close" /> */}

                    <View style={styles.top_security_agreements}>
                      <ScrollView style={styles.container_scroll}>
                        <Text style={styles.text_scroll}>
                          {"\n"}Where do I find this in iOS?
                          {"\n"}
                          {"\n"}
                          <Text style={styles.text_bold}>
                            Activating Screen Time
                          </Text>
                          {"\n"}On your iPhone, go to “Settings” > “Screen Time.
                          Tap “Turn on Screen Time”. Tap “Continue”. Select
                          “This is My iPhone.
                          {"\n"}
                          {"\n"}You can now get a report about how you use your
                          device, apps, and websites,
                          {"\n"}
                          {"\n"}
                          <Text style={styles.text_bold}>
                            Average Screen Time and pick-ups of the last 7 days
                          </Text>
                          {"\n"}On your iPhone, go to “Settings”, choose “Your
                          Name’s iPhone” and tap on “Choose Last 7 Days”. Find
                          Screen Time on top, scroll down for number of pick-ups
                          per day.
                        </Text>
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
                  >
                    <TouchableHighlight
                      style={styles.close}
                      onPress={() => {
                        this.setModalVisibleAndroid(
                          !this.state.modalVisibleAndroid
                        );
                      }}
                    >
                      <Image
                        style={{ marginTop: 20 }}
                        source={require("./../../../assets/images/close.png")}
                      />
                    </TouchableHighlight>
                    {/* <Icon name="close" /> */}

                    <View style={styles.top_security_agreements}>
                      <ScrollView style={styles.container_scroll}>
                        <Text style={styles.text_scroll}>
                          {"\n"}Where do I find this in Android?
                          {"\n"}
                          {"\n"}Not all Android devices support the screentime
                          feature. You need the Android version Pie (9.0) or
                          newer.
                          {"\n"}
                          {"\n"}On your Android phone, go to “Settings” >
                          “Digital Well-Being”.
                          {"\n"}
                          {"\n"}Unfortunately, it gets a little complicated now.
                          Take the daily screen use time per day from the last 7
                          days and calculate the average by adding them up and
                          then dividing by 7.
                        </Text>
                      </ScrollView>
                    </View>
                  </Modal>
                </>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
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
        </View>
      </>
    );
  }
}
