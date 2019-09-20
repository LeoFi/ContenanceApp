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

import { connect } from "react-redux";
import * as firebase from "firebase";

class HS_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      progressValue: 45 / 79,
      buttonIsActive: false
    };
  }

  getChecked = value => {
     
    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];
    console.log(KEY, KEY_Value);
    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({ [KEY]: KEY_Value })
      .then(() => {});

    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 46 / 79 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 47 / 79 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 48 / 79 });
      } else if (this.state.show_4 == true) {
        this.setState({ progressValue: 49 / 79 });
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 46 / 79 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 47 / 79 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 48 / 79 });
      } else if (this.state.show_4 == true) {
        this.setState({ progressValue: 49 / 79 });
        this.props.navigation.navigate("IN_Screen_T1");
      }
    }, 400);
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
        <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
          <Text style={styles.skip_text}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.header_left_padding}>
          Please think about the last 7 days
        </Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
              Using my smartphone was something I did automatically.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"HS01_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"HS01_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"HS01_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"HS01_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"HS01_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"HS01_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
              Using my smartphone was something I did without having to
              consciously remember.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"HS02_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"HS02_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"HS02_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"HS02_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"HS02_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"HS02_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
              Using my smartphone was something I did without thinking.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"HS03_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"HS03_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"HS03_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"HS03_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"HS03_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"HS03_D1/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
              Using my smartphone was something I started doing before I
              realized I was doing it.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"HSc_D1/1"} />
                <Radio iconName={"lens"} label={"2"} value={"HSc_D1/2"} />
                <Radio iconName={"lens"} label={"3"} value={"HSc_D1/3"} />
                <Radio iconName={"lens"} label={"4"} value={"HSc_D1/4"} />
                <Radio iconName={"lens"} label={"5"} value={"HSc_D1/5"} />
                <Radio iconName={"lens"} label={"6"} value={"HSc_D1/6"} />
              </RadioGroup>
            </View>

            <View style={styles.bottom}>
              <PrimaryButton
                label="Keep Going"
                isBottom={true}
                disabled={!this.state.buttonIsActive}
                onPress={() => {
                  this.props.navigation.navigate("IN_Screen_T1");
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
  user: state.user
});

export default connect(mapStateToProps)(HS_Screen_T1);
