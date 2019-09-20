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

class SU2_Screen_T2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonIsActive: false,
      pickupNumber: "",
      modalVisibleIos: false,
      modalVisibleAndroid: false,
      progressValueT2: undefined
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
    const progressValueT2 = this.state.progressValueT2;

    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({
        Pickups_Number_D21: pickupNumber
      });
    this.setState({ progressValueT2: 71 });
    this.props.dispatch(Update_Progress_T2(progressValueT2));
    this.props.navigation.navigate("SU3_Screen_T2");
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
                    this.setState({ progressValueT2: 71 });
                    this.props.dispatch(Update_Progress_T2(progressValueT2));
                    this.props.navigation.navigate("SU3_Screen_T2");
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
                      linkLabel="where do I find this in iOs?"
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
                          {"\n"}where do I find this in IOs?
                          {"\n"}
                          {"\n"}
                        
              
                          <Text style={styles.text_bold}>
                            Average pick-ups of the last 7 days
                          </Text>
                          {"\n"}Again, go to Settings > Screen Time, choose Your Names
                          iPhone > Choose Last 7 days. Find Screen Time on top,
                          scroll down for average number of pick-ups per day. If your
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
                        {"\n"}No worries, all good.
                          {"\n"}
                          {"\n"}We asked you to acticvate the screen time feature on your iPhone when you started the study. However, if you did not activate it, just skip this question.
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
export default connect(mapStateToProps)(SU2_Screen_T2);
