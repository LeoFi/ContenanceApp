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
  TouchableHighlight
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

export default class SU2_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 70/78,
      buttonIsActive: false,
      pickupNumber: "",
      modalVisibleIos: false,
      modalVisibleAndroid: false
    };
  }
  handleChangePickups = pickupNumber => {
    this.setState({ pickupNumber });
  };

  setModalVisibleIos(visible) {
    this.setState({ modalVisibleIos: visible });
  }

  setModalVisibleAndroid(visible) {
    this.setState({ modalVisibleAndroid: visible });
  }

  handleSubmit = () => {
    const { pickupNumber } = this.state;

    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        Pickups_Number_D1: pickupNumber
      });
      this.setState({ progressValue: 71 / 78 });
    this.props.navigation.navigate("SU3_Screen_T1");
  };

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            width: "100%",
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
              this.setState({ progressValue: 71 / 78 });
              this.props.navigation.navigate("SU3_Screen_T1");
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
                <Text style={styles.text}>
                  What is your average number of pick-ups per day of the last 7
                  days?
                </Text>

                <Text style={styles.text_left_small_center}>
                  If you do not have a screen time tracker, please skip this
                  question.
                </Text>

                <View style={styles.inline}>
                  <TextInput
                    style={styles.codeInputSU}
                    onChangeText={this.handleChangePickups}
                    value={this.state.pickupNumber}
                    placeholder="Number"
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
                    linkLabel="where do I find this in iOs?"
                    linkOnPress={() => {
                      this.setModalVisibleIos(true);
                    }}
                  />
                  <LinkText
                    style={styles.link_text}
                    textLabel=""
                    linkLabel="where do I find this in android?"
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
                        {"\n"}where do I find this in IOs?
                        {"\n"}
                        {"\n"}
                        <Text style={styles.text_bold}>
                          Activating Screen Time
                        </Text>
                        {"\n"}On your iPhone, go to Settings > Screen Time. Tap
                        Turn On Screen Time. Tap Continue. Select This is My
                        [device].
                        {"\n"}
                        {"\n"}You can now get a report about how you use your
                        device, apps, and websites,
                        {"\n"}
                        {"\n"}
                        <Text style={styles.text_bold}>
                          Average Screen Time and pick-ups of the last 7 days
                        </Text>
                        {"\n"}go to Settings > Screen Time, choose Your Names
                        iPhone > Choose Last 7 days. Find Screen Time on top,
                        scroll down for number of pick-ups per day
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
                        {"\n"}where do I find this in android?
                        {"\n"}
                        {"\n"}On your smartphone, go to Settings > Digital
                        Well-Being
                        {"\n"}
                        {"\n"}Unfortunately, not all smartphones using android
                        are eqipped with a screentime tracker yet.
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
            label="Continue"
            isBottom={true}
            disabled={!this.state.pickupNumber}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
      </>
    );
  }
}
