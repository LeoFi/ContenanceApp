import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  Modal,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton,
  LinkText
} from "../../../components/AppComponents";
import { styles } from "./style";

import {
  Svg,
  Path,
  Circle,
  Ellipse,
  G,
  Defs,
  ClipPath,
  Rect
} from "react-native-svg";

import { TagSelect } from "react-native-tag-select";
import { connect } from "react-redux";
import * as firebase from "firebase";
import {
  Update_NewHabitTrigger1_D13,
  Update_NewHabitTrigger2_D13,
  Update_NewHabitTrigger3_D13
} from "./../../../redux-persist/redux/user_values";

class Exercice_13_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      NewHabitTrigger1_D13: this.props.user_values.NewHabitTrigger1_D13 || "",
      NewHabitTrigger2_D13: this.props.user_values.NewHabitTrigger2_D13 || "",
      NewHabitTrigger3_D13: this.props.user_values.NewHabitTrigger3_D13 || "",
      modalVisibleExample: false
    };
  }

  setModalVisibleExample(visible) {
    this.setState({ modalVisibleExample: visible });
  }

  handleSubmit = () => {
    let NewHabitTrigger = [];
    for (const prop in this.tag.itemsSelected) {
      NewHabitTrigger.push(this.tag.itemsSelected[prop]);
    }

    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        NewHabitTrigger1_D13: NewHabitTrigger[0],
        NewHabitTrigger2_D13: NewHabitTrigger[1],
        NewHabitTrigger3_D13: NewHabitTrigger[2]
      });
    this.props.dispatch(
      Update_NewHabitTrigger1_D13(this.state.NewHabitTrigger1_D13)
    );
    this.props.dispatch(
      Update_NewHabitTrigger2_D13(this.state.NewHabitTrigger2_D13)
    );
    this.props.dispatch(
      Update_NewHabitTrigger3_D13(this.state.NewHabitTrigger3_D13)
    );
    this.props.navigation.navigate("Exercice_13_3");
  };

  render() {
    const data = [
      "" + this.props.user_values.EmTrigger1_D6 + "",
      "" + this.props.user_values.EmTrigger2_D6 + "",
      "" + this.props.user_values.EmTrigger3_D6 + "",
      "" + this.props.user_values.SitTrigger1_D5 + "",
      "" + this.props.user_values.SitTrigger2_D5 + "",
      "" + this.props.user_values.SitTrigger3_D5 + ""
    ];
    return (
      <View style={{ backgroundColor: "#F4F1DE", flex: 1 }}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_top}>
            <Text style={styles.sub_header_left}>
              Step 1: Choose three triggers
            </Text>
            <Text style={styles.intro_text_bold}>
              {"\n"}For which of your situations - or feelings - do you want to define a
              new response?
            </Text>
            <LinkText
              style={styles.link_text}
              textLabel=""
              linkLabel="View example"
              linkOnPress={() => {
                this.setModalVisibleExample(true);
              }}
            />

            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisibleExample}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <TouchableOpacity
                style={styles.close}
                onPress={() => {
                  this.setModalVisibleExample(!this.state.modalVisibleExample);
                }}
              >
                <Image
                  style={{ marginTop: 20 }}
                  source={require("./../../../assets/images/close.png")}
                />
              </TouchableOpacity>

              <View style={styles.top_security_agreements}>
                <Svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                  <G clip-path="url(#clip0)">
                    <Path
                      d="M32.5 65C26.1077 65 19.945 63.1532 14.6363 59.6521L3.46592 63.123C3.01563 63.2628 2.52468 63.1418 2.19143 62.8086C1.85818 62.4748 1.73718 61.9844 1.87702 61.5341L5.3479 50.3637C1.84677 45.055 0 38.8923 0 32.5C0 23.8191 3.38062 15.6574 9.519 9.519C15.6574 3.38062 23.8191 0 32.5 0C41.1809 0 49.3426 3.38062 55.481 9.519C61.6194 15.6574 65 23.8191 65 32.5C65 41.1809 61.6194 49.3426 55.481 55.481C49.3426 61.6194 41.1809 65 32.5 65ZM14.8406 56.9896C15.094 56.9896 15.3455 57.0659 15.5592 57.2127C20.5575 60.6464 26.4157 62.4609 32.5 62.4609C49.0208 62.4609 62.4609 49.0208 62.4609 32.5C62.4609 15.9792 49.0208 2.53906 32.5 2.53906C15.9792 2.53906 2.53906 15.9792 2.53906 32.5C2.53906 38.5843 4.3536 44.4425 7.78728 49.4408C8.00697 49.7612 8.06847 50.1648 7.95292 50.5363L5.01762 59.9819L14.4637 57.0471C14.5872 57.0089 14.7142 56.9896 14.8406 56.9896Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M32.5793 9.26562C32.5784 9.26562 32.5774 9.26562 32.5764 9.26562H32.5C31.7988 9.26562 31.2305 8.69731 31.2305 7.99609C31.2305 7.29488 31.7988 6.72656 32.5 6.72656H32.5823C33.2835 6.72855 33.8504 7.29785 33.8489 7.99907C33.8474 8.69929 33.2791 9.26562 32.5793 9.26562Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M49.8136 16.4319C49.4888 16.4319 49.164 16.3085 48.9165 16.061C45.6539 12.8029 41.5538 10.6085 37.0583 9.71434C36.3705 9.57746 35.9242 8.90898 36.0611 8.22165C36.1979 7.53382 36.8659 7.087 37.5537 7.22387C42.5426 8.21619 47.0921 10.6506 50.7107 14.2643C51.2067 14.7597 51.2072 15.5636 50.7117 16.0595C50.4638 16.308 50.1385 16.4319 49.8136 16.4319Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M30.0195 41.9922C30.0456 40.4427 30.2214 39.2188 30.5469 38.3203C30.8724 37.4219 31.5365 36.4258 32.5391 35.332L35.0977 32.6953C36.1914 31.4583 36.7383 30.1302 36.7383 28.7109C36.7383 27.3438 36.3802 26.276 35.6641 25.5078C34.9479 24.7266 33.9062 24.3359 32.5391 24.3359C31.2109 24.3359 30.1432 24.6875 29.3359 25.3906C28.5286 26.0938 28.125 27.0378 28.125 28.2227H24.5117C24.5378 26.1133 25.2865 24.4141 26.7578 23.125C28.2422 21.8229 30.1693 21.1719 32.5391 21.1719C35 21.1719 36.9141 21.8359 38.2812 23.1641C39.6615 24.4792 40.3516 26.2891 40.3516 28.5938C40.3516 30.8724 39.2969 33.1185 37.1875 35.332L35.0586 37.4414C34.1081 38.4961 33.6328 40.013 33.6328 41.9922H30.0195ZM29.8633 48.1836C29.8633 47.5977 30.0391 47.1094 30.3906 46.7188C30.7552 46.3151 31.2891 46.1133 31.9922 46.1133C32.6953 46.1133 33.2292 46.3151 33.5938 46.7188C33.9583 47.1094 34.1406 47.5977 34.1406 48.1836C34.1406 48.7695 33.9583 49.2578 33.5938 49.6484C33.2292 50.026 32.6953 50.2148 31.9922 50.2148C31.2891 50.2148 30.7552 50.026 30.3906 49.6484C30.0391 49.2578 29.8633 48.7695 29.8633 48.1836Z"
                      fill="#2C3B51"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0">
                      <Rect width="65" height="65" fill="white" />
                    </ClipPath>
                  </Defs>
                </Svg>
                <Text style={styles.intro_text_grey}>
                  E.g. Leo, for which situation - or feeling - do you want to
                  define a new response?{"\n"}
                  {"\n"}If I am in the metro...{"\n"}If I am lonely...
                </Text>
              </View>
            </Modal>

            <Text style={styles.intro_text}>{"\n"}If I am...</Text>

            <TagSelect
              data={data}
              max={3}
              ref={tag => {
                this.tag = tag;
              }}
              onMaxError={() => {
                //Alert.alert("Ops", "Max reached");
              }}
              onItemPress={() => {
                if (this.tag.totalSelected === 3) {
                  let NewHabitTrigger = [];
                  for (const prop in this.tag.itemsSelected) {
                    NewHabitTrigger.push(this.tag.itemsSelected[prop]);
                  }
                  this.setState({ allSelected: true });
                  this.setState({
                    NewHabitTrigger1_D13: NewHabitTrigger[0]
                  });
                  this.setState({
                    NewHabitTrigger2_D13: NewHabitTrigger[1]
                  });
                  this.setState({
                    NewHabitTrigger3_D13: NewHabitTrigger[2]
                  });
                } else {
                  this.setState({ allSelected: false });
                }
              }}
              containerStyle={{
                flexDirection: "column",
                alignItems: "stretch",
                paddingTop: 40,
                width: Dimensions.get("window").width - 50
              }}
              itemLabelStyle={styles.button_grey_input_text}
              itemStyle={{
                borderRadius: 99,
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#E2DFD1",
                borderWidth: 0,
                height: 50,
                width: "100%"
              }}
              itemStyleSelected={{
                backgroundColor: "#4CBB92"
              }}
              itemLabelStyleSelected={{
                fontFamily: "roboto-bold"
              }}
            />
          </View>
        </ScrollView>
        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Continue"
            disabled={!this.state.allSelected}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_13_2);
