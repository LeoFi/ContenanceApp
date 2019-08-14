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

import * as firebase from "firebase";

export default class SU1_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.navigation.navigate("SU2_Screen_T1");
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: "stretch" }}>
          <TouchableOpacity
            onPress={() => {
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
                <Text style={styles.text}>
                  What is your average screen time of the last 7 days?
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
            disabled={
              !this.state.screenTimeHours || !this.state.screenTimeMinutes
            }
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}
