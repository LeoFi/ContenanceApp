import React from "react";
import {
  View,
  Text,
  TextACput,
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

class SE_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
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
        this.setState({ progressValueT1: 61 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT1: 62 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_3 == true) {
        this.setState({ progressValueT1: 63 });
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
        this.setState({ progressValueT1: 61 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValueT1: 62 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_3 == true) {
        this.setState({ progressValueT1: 63 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
        this.props.navigation.navigate("Extra_1_Screen_T1");
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
            I am confident that I can...
          </Text>

          {this.state.show_1 ? (
            <>
              <Text style={styles.text_left}>
                ...use my smartphone consciously even if I first have to find a
                way to integrate this into my daily routine.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"SE01_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"SE01_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"SE01_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"SE01_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"SE01_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"SE01_D1/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_2 ? (
            <>
              <Text style={styles.text_left}>
                ... continue using my smartphone consciously in the long run,
                even if it will be hard sometimes.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"SE02_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"SE02_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"SE02_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"SE02_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"SE02_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"SE02_D1/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_3 ? (
            <>
              <Text style={styles.text_left}>
                ...that I can start using my smartphone consciously again, after
                several days of using it less consciously.
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all true"
                  labelRight="Exactly true"
                >
                  <Radio iconName={"lens"} label={"1"} value={"SE03_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"SE03_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"SE03_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"SE03_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"SE03_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"SE03_D1/6"} />
                </RadioGroup>
              </View>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Continue"
                  isBottom={true}
                  disabled={!this.state.buttonIsActive}
                  onPress={() => {
                    this.props.navigation.navigate("Extra_1_Screen_T1");
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
export default connect(mapStateToProps)(SE_Screen_T1);
