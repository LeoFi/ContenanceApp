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

export default class MFSU_Screen_T1 extends React.Component {
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
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
      } else if (this.state.show_7 == true) {
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
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
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
      {!this.state.show_7 ? (
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("PSF_Screen_T1");
            }}
            style={styles.skip}
          >
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.header_left_padding}>
          When I am using my smartphone...
        </Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
              ...my mind wanders off and I’m easily distracted.
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
              ... I don’t pay attention to what I’m doing because I’m
              daydreaming, worrying, or otherwise distracted.
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
            <Text style={styles.text_left}>...I am easily distracted.</Text>

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
              ...I find it difficult to stay focused on what’s happening in the
              present.
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
              ...I rush through activities without being really attentive to
              them.
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
              ... I do jobs or tasks automatically without being aware of what
              I’m doing.
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
              ...I find myself doing things without paying attention.
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
    );
  }
}
