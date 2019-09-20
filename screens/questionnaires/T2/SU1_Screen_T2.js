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
      progressValueT2: undefined
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
    this.setState({ progressValueT2: 70 });
    this.props.dispatch(Update_Progress_T2(progressValueT2));
    this.props.navigation.navigate("SU2_Screen_T2");
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
                    const progressValueT2 = this.state.progressValueT2;
                    this.setState({ progressValueT2: 70 });
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
                       
                          <Text style={styles.text_bold}>
                            Average Screen Time and pick-ups of the last 7 days
                          </Text>
                          {"\n"}On your iPhone, go to “Settings”, find "Screen Time" there. Now, choose “Your
                          Name’s iPhone” in the first line on top. Then, tap on  "Last 7 Days” on the top right. Find average 
                          Screen Time per day of the last 7 days on top. Et voilà!
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
                          {"\n"}No worries, all good.
                          {"\n"}
                          {"\n"}We asked you to acticvate the screen time feature on your iPhone when you started the study. However, if you did not activate it, just skip this question and the next one.
                         
                        </Text>
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
