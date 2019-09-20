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

import { connect } from "react-redux";
import { Update_Progress_T1 } from "./../../../redux-persist/redux/user_values";

class SU2_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonIsActive: false,
      pickupNumber: "",
      modalVisibleIos: false,
      modalVisibleAndroid: false,
      progressValueT1: undefined
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
    const progressValueT1 = this.state.progressValueT1;

    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({
        Pickups_Number_D1: pickupNumber
      });
    this.setState({ progressValueT1: 71 });
    this.props.dispatch(Update_Progress_T1(progressValueT1));
    this.props.navigation.navigate("SU3_Screen_T1");
  };

  render() {
    return (
      <>
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
                    const progressValueT1 = this.state.progressValueT1;
                    this.setState({ progressValueT1: 71 });
                    this.props.dispatch(Update_Progress_T1(progressValueT1));
                    this.props.navigation.navigate("SU3_Screen_T1");
                  }}
                  style={styles.skip}
                >
                  <Text style={styles.skip_text}>Skip</Text>
                </TouchableOpacity>

                <>
                  <Text style={styles.text_bold_center}>
                    What is your average number of pick-ups per day of the last
                    7 days?
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
                      linkLabel="Where do I find this in iOS?"
                      linkOnPress={() => {
                        this.setModalVisibleIos(true);
                      }}
                    />
                    <LinkText
                      style={styles.link_text}
                      textLabel=""
                      linkLabel="If you haven’t used screentime yet, click here."
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
                            Pick-ups of the last 7 days
                          </Text>
                          {"\n"}Again, go to Settings > Screen Time, choose Your Names
                          iPhone > Choose Last 7 days. Find Screen Time on top,
                          scroll down for number of pick-ups per day. If your
                          phone operates in German, watch out for
                          "Aktivierungen".
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
                          {"\n"}Please activate the screen time feature.
                          {"\n"}
                          {"\n"}To get the screen time feature (“Bildschirmzeit”), make sure your OS is updated to iOS 12. This is possible for devices starting from iPhone 5S.
                          {"\n"}
                          {"\n"}On your iPhone, go to “Settings” > “Screen Time. Tap “Turn on Screen Time”. Tap “Continue”. Select “This is My iPhone. You can now get a report about how you use your device, apps, and websites.
                          Great, Thank you for activating it. We will ask you again about your screen time later in the study.
                        </Text>
                      </ScrollView>
                    </View>
                  </Modal>
                </>
              </ScrollView>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Continue"
                  isBottom={true}
                  disabled={!this.state.pickupNumber}
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
export default connect(mapStateToProps)(SU2_Screen_T1);
