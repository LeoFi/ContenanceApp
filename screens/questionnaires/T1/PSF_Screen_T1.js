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

class PSF_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
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
        this.setState({ progressValueT1: 40 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_2 == true) {
        this.setState({ progressValueT1: 41 });
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
        this.setState({ progressValueT1: 40 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_2 == true) {
        this.setState({ progressValueT1: 41 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
        this.props.navigation.navigate("TRP_Screen_T1");
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
                I decided what is important for me and decided what I want to
                use my energy for.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Never"
                  labelRight="Always"
                >
                  <Radio iconName={"lens"} label={"1"} value={"PSF01_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSF01_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSF01_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSF01_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSF01_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSF01_D1/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_2 ? (
            <>
              <Text style={styles.text_left}>
                I actively committed myself to what I find important, useful or
                meaningful.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Never"
                  labelRight="Always"
                >
                  <Radio iconName={"lens"} label={"1"} value={"PSF02_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"PSF02_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"PSF02_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"PSF02_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"PSF02_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"PSF02_D1/6"} />
                </RadioGroup>
              </View>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Continue"
                  isBottom={true}
                  disabled={!this.state.buttonIsActive}
                  onPress={() => {
                    this.props.navigation.navigate("TRP_Screen_T1");
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
export default connect(mapStateToProps)(PSF_Screen_T1);
