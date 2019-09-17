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
  StatusBar,
  Dimensions
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
import * as Progress from "react-native-progress";

import * as firebase from "firebase";

import { connect } from "react-redux";
import { Update_Progress_T1 } from "./../../../redux-persist/redux/user_values";

class MFSU_Screen_T1 extends React.Component {
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
      buttonIsActive: false,
      progressValueT1: undefined
    };
  }

  getChecked = value => {
    const uid = firebase.auth().currentUser.uid;
    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];
    const progressValueT1 = this.state.progressValueT1
    console.log(KEY, KEY_Value);
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({ [KEY]: KEY_Value })
      .then(() => {});

    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValueT1: 33 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT1: 34 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValueT1: 35 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValueT1: 36 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValueT1: 37 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValueT1: 38 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_7 == true) {
        this.setState({ progressValueT1: 39 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    const progressValueT1 = this.state.progressValueT1
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValueT1: 33 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT1: 34 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValueT1: 35 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValueT1: 36 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValueT1: 37 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValueT1: 38 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_7 == true) {
        this.setState({ progressValueT1: 39 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
        this.props.navigation.navigate("PSF_Screen_T1");
      }
    }, 400);
  };

  render() {
    return (
      <>
        <StatusBar hidden />

        <View style={styles.container}>
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.header_left_padding}>
            Please think about the last 7 days
          </Text>

          {this.state.show_1 ? (
            <>
              <Text style={styles.text_left}>
                When I was using my smartphone my mind wandered off and I was
                easily distracted.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"MFSU01_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"MFSU01_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"MFSU01_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"MFSU01_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"MFSU01_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"MFSU01_D1/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_2 ? (
            <>
              <Text style={styles.text_left}>
                When I was using my smartphone I didn't pay attention to what I
                was doing because I was daydreaming, worrying, or otherwise
                distracted.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"MFSU02_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"MFSU02_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"MFSU02_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"MFSU02_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"MFSU02_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"MFSU02_D1/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_3 ? (
            <>
              <Text style={styles.text_left}>
                When I was using my smartphone I was easily distracted.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"MFSU03_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"MFSU03_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"MFSU03_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"MFSU03_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"MFSU03_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"MFSU03_D1/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_4 ? (
            <>
              <Text style={styles.text_left}>
                When I was using my smartphone I found it difficult to stay
                focused on what was happening in the present.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"MFSU04_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"MFSU04_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"MFSU04_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"MFSU04_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"MFSU04_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"MFSU04_D1/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_5 ? (
            <>
              <Text style={styles.text_left}>
                When I was using my smartphone I rushed through activities
                without being really attentive to them.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"MFSU05_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"MFSU05_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"MFSU05_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"MFSU05_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"MFSU05_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"MFSU05_D1/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_6 ? (
            <>
              <Text style={styles.text_left}>
                When I was using my smartphone I did jobs or tasks automatically
                without being aware of what I was doing.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"MFSU06_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"MFSU06_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"MFSU06_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"MFSU06_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"MFSU06_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"MFSU06_D1/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_7 ? (
            <>
              <Text style={styles.text_left}>
                When I was using my smartphone I found myself doing things
                without paying attention.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"MFSU07_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"MFSU07_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"MFSU07_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"MFSU07_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"MFSU07_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"MFSU07_D1/6"} />
                </RadioGroup>
              </View>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Continue"
                  isBottom={true}
                  disabled={!this.state.buttonIsActive}
                  onPress={() => {
                    this.props.navigation.navigate("PSF_Screen_T1");
                  }}
                />
              </View>
            </>
          ) : null}
        </View>
      </>
    );
  }
}
const mapStateToProps = state => ({
  user_values: state.user_values
});
export default connect(mapStateToProps)(MFSU_Screen_T1);
