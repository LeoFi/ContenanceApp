import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import RadioGroup, { Radio } from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";

import * as firebase from "firebase";

export default class PI_Screen_T2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      show_6: false,
      buttonIsActive: false
    };
  }

  getChecked = value => {
    const uid = firebase.auth().currentUser.uid;
    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];
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
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
      } else if (this.state.show_6 == true) {
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = value => {
    const uid = firebase.auth().currentUser.uid;
    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];

    if (!value) {
      firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({ [KEY]: 999 })
      .then(() => {});
    }

    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
      {!this.state.show_6 ? (
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("CO_Screen_T2");
            }}
            style={styles.skip}
          >
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        )}

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
            The app has increased my awareness of the importance of addressing my smartphone use.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Strongly disagree"
                labelRight="Strongly agree"
              >
                <Radio iconName={"lens"} label={"1"} value={"PI01_D21/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PI01_D21/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PI01_D21/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PI01_D21/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PI01_D21/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PI01_D21/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
            The app increased my knowledge about healthy smartphone use.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Strongly disagree"
                labelRight="Strongly agree"
              >
                <Radio iconName={"lens"} label={"1"} value={"PI02_D21/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PI02_D21/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PI02_D21/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PI02_D21/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PI02_D21/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PI02_D21/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
            The app changed my attitudes toward improving my smartphone use.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Strongly disagree"
                labelRight="Strongly agree"
              >
                <Radio iconName={"lens"} label={"1"} value={"PI03_D21/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PI03_D21/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PI03_D21/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PI03_D21/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PI03_D21/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PI03_D21/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
            The app increased my intentions / motivation to address my smartphone use.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Strongly disagree"
                labelRight="Strongly agree"
              >
                <Radio iconName={"lens"} label={"1"} value={"PI04_D21/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PI04_D21/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PI04_D21/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PI04_D21/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PI04_D21/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PI04_D21/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_5 ? (
          <>
            <Text style={styles.text_left}>
            The app encourages further help seeking for my current smartphone use.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Strongly disagree"
                labelRight="Strongly agree"
              >
                <Radio iconName={"lens"} label={"1"} value={"PI05_D21/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PI05_D21/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PI05_D21/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PI05_D21/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PI05_D21/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PI05_D21/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_6 ? (
          <>
            <Text style={styles.text_left}>
            Use of this app increased my healthy smartphone use.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Strongly disagree"
                labelRight="Strongly agree"
              >
                <Radio iconName={"lens"} label={"1"} value={"PI06_D21/1"} />
                <Radio iconName={"lens"} label={"2"} value={"PI06_D21/2"} />
                <Radio iconName={"lens"} label={"3"} value={"PI06_D21/3"} />
                <Radio iconName={"lens"} label={"4"} value={"PI06_D21/4"} />
                <Radio iconName={"lens"} label={"5"} value={"PI06_D21/5"} />
                <Radio iconName={"lens"} label={"6"} value={"PI06_D21/6"} />
              </RadioGroup>
            </View>

            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={!this.state.buttonIsActive}
                onPress={() => {
                  this.props.navigation.navigate("CO_Screen_T2");
                }}
              />
            </View>
          </>
        ) : null}

      </View>
    );
  }
}
