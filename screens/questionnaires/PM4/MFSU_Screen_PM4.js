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

import * as Progress from "react-native-progress";

export default class MFSU_Screen_PM4 extends React.Component {
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
      progressValue: 11/45,
      buttonIsActive: false,
    };
  }

  getChecked = value => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 12/45 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 13/45 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 14/45 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValue: 15/45 });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValue: 16/45 });
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValue: 17/45 });
      } else if (this.state.show_7 == true) {
        this.setState({ progressValue: 18/45 });
        this.setState({ buttonIsActive: true });
      }
    }, 600);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 12/45 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 13/45 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 14/45 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValue: 15/45 });
      } else if (this.state.show_5 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: true });
        this.setState({ progressValue: 16/45 });
      } else if (this.state.show_6 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: false });
        this.setState({ show_6: false });
        this.setState({ show_7: true });
        this.setState({ progressValue: 17/45 });
      } else if (this.state.show_7 == true) {
        this.setState({ progressValue: 18/45 });
        this.props.navigation.navigate("PSF_Screen_PM4");
      }
    }, 600);
  };

  render() {
    return (<>
      <View
          style={{
            flex: 1,
            width: "100%",
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
        <Text style={styles.header_left_padding}>Please refer to today and the past 3 days.</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, my mind wandered off and I was easily distracted.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU01_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU01_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU01_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU01_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU01_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU01_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I did not pay attention to what I was doing because I was daydreaming, worrying, or otherwise distracted.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU02_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU02_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU02_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU02_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU02_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU02_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I was easily distracted.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU03_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU03_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU03_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU03_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU03_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU03_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I found it difficult to stay focused on what was happening in the present.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU04_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU04_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU04_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU04_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU04_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU04_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_5 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I rushed through activities without being really attentive to them.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU05_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU05_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU05_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU05_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU05_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU05_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_6 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I did jobs or tasks automatically without being aware of what I was doing.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU06_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU06_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU06_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU06_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU06_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU06_D16/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_7 ? (
          <>
            <Text style={styles.text_left}>
            When I was using my smartphone, I found myself doing things without paying attention.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"MFSU07_D16/1"} />
                <Radio iconName={"lens"} label={"2"} value={"MFSU07_D16/2"} />
                <Radio iconName={"lens"} label={"3"} value={"MFSU07_D16/3"} />
                <Radio iconName={"lens"} label={"4"} value={"MFSU07_D16/4"} />
                <Radio iconName={"lens"} label={"5"} value={"MFSU07_D16/5"} />
                <Radio iconName={"lens"} label={"6"} value={"MFSU07_D16/6"} />
              </RadioGroup>
            </View>
       
            <View style={styles.bottom}>
              <PrimaryButton
                label="Keep Going"
                isBottom={true}
                disabled={ !this.state.buttonIsActive }
                onPress={() => {
                  this.props.navigation.navigate("PSF_Screen_PM4");
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