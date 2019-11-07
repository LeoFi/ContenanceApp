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
import { Svg, Path } from "react-native-svg";
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
      progressValueT1: 70 / 79
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
    this.setState({ progressValueT1: 71 / 79 });
    this.props.dispatch(Update_Progress_T1(progressValueT1));
    this.props.navigation.navigate("SU3_Screen_T1");
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
            progress={this.state.progressValueT1}
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
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset="15"
              style={styles.keyboard_view}
            >
              <ScrollView style={{ alignSelf: "stretch" }}>
                <TouchableOpacity
                  onPress={() => {
                    const progressValueT1 = this.state.progressValueT1;
                    this.setState({ progressValueT1: 71 / 79 });
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
                      numberOfLines={10}
                      //multiline={true}
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
                            {"\n"}where do I find this in IOs?
                            {"\n"}
                            {"\n"}
                            <Text style={styles.text_bold}>
                              Pick-ups of the last 7 days
                            </Text>
                            {"\n"}Again, go to Settings > Screen Time, choose
                            Your Names iPhone > Choose Last 7 days. Find Screen
                            Time on top, scroll down for number of pick-ups per
                            day. If your phone operates in German, watch out for
                            "Aktivierungen".
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
                            {"\n"}Please activate the screen time feature.
                            {"\n"}
                            {"\n"}To get the screen time feature
                            (“Bildschirmzeit”), make sure your OS is updated to
                            iOS 12. This is possible for devices starting from
                            iPhone 5S.
                            {"\n"}
                            {"\n"}On your iPhone, go to “Settings” > “Screen
                            Time. Tap “Turn on Screen Time”. Tap “Continue”.
                            Select “This is My iPhone. You can now get a report
                            about how you use your device, apps, and websites.
                            Great, Thank you for activating it. We will ask you
                            again about your screen time later in the study.
                          </Text>
                        </View>
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
