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
  Dimensions,
  StatusBar
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

export default class Extra_2_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      progressValue: 64 / 79,
      buttonIsActive1: false,
      buttonIsActive2: false,
      buttonIsActive3: false
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
        this.setState({ buttonIsActive1: true });
      } else if (this.state.show_2 == true) {
        this.setState({ buttonIsActive2: true });
      } else if (this.state.show_3 == true) {
        this.setState({ buttonIsActive3: true });
      } else if (this.state.show_4 == true) {
        this.setState({ buttonIsActive4: true });
      }
    }, 400);
  };

  handleClick = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 65 / 79 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 66 / 79 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 67 / 79 });
      } else if (this.state.show_4 == true) {
        this.setState({ progressValue: 68 / 79 });
        this.props.navigation.navigate("Extra_3_Screen_T1");
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 65 / 79 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 66 / 79 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 67 / 79 });
      } else if (this.state.show_4 == true) {
        this.setState({ progressValue: 68 / 79 });
        this.props.navigation.navigate("Extra_3_Screen_T1");
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
          <ScrollView style={{ alignSelf: "stretch" }} showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
              <Text style={styles.skip_text}>Skip</Text>
            </TouchableOpacity>
            {this.state.show_1 ? (
              <>
                <Text style={styles.text_bold_center}>
                  What gender do you most identify with?
                </Text>

                <View style={styles.question}>
                  <RadioGroup
                    getChecked={this.getChecked}
                    isScaleEnabled={false}
                    RadioGroupStyle={{
                      flexDirection: "column",
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                    RadioStyle={{
                      width: "100%",
                      height: 49,
                      borderRadius: 30,
                      marginBottom: 10,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    labelStyle={{
                      fontSize: 14,
                      paddingLeft: 20,
                      paddingRight: 20,
                      alignItems: "stretch",
                      color: "#2C3B51",
                      textAlign: "center"
                    }}
                  >
                    <Radio
                      iconName={"lens"}
                      label={"Female"}
                      value={"Gender/Female"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Male"}
                      value={"Gender/Male"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Other"}
                      value={"Gender/Other"}
                    />
                  </RadioGroup>
                </View>
              </>
            ) : null}

            {this.state.show_2 ? (
              <>
                <Text style={styles.text_bold_center}>
                  What is the highest degree or level of school you have
                  completed?{"\n"}
                  <Text style={styles.text_left_small}>
                  {"\n"}If currently enrolled, highest degree received.
                  </Text>
                </Text>

                <View style={styles.question}>
                  <RadioGroup
                    getChecked={this.getChecked}
                    isScaleEnabled={false}
                    RadioGroupStyle={{
                      flexDirection: "column",
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                    RadioStyle={{
                      width: "100%",
                      height: 49,
                      borderRadius: 30,
                      marginBottom: 10,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    labelStyle={{
                      fontSize: 14,
                      paddingLeft: 20,
                      paddingRight: 20,
                      alignItems: "stretch",
                      color: "#2C3B51",
                      textAlign: "center"
                    }}
                  >
                    <Radio
                      iconName={"lens"}
                      label={"No schooling completed"}
                      value={"Education/No schooling completed"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Nursery school to 8th grade"}
                      value={"Education/Nursery school to 8th grade"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Some high school, no diploma"}
                      value={"Education/Some high school, no diploma"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={
                        "High school graduate, diploma or the equivalent (for example: Abitur)"
                      }
                      value={
                        "Education/High school graduate, diploma or the equivalent (for example: Abitur)"
                      }
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Some college credit, no degree"}
                      value={"Education/Some college credit, no degree"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Trade/technical/vocational training"}
                      value={"Education/Trade/technical/vocational training"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Associate degree"}
                      value={"Education/Associate degree"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Bachelor’s degree"}
                      value={"Education/Bachelor’s degree"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Master’s degree"}
                      value={"Education/Master’s degree"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Professional degree"}
                      value={"Education/Professional degree"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Doctorate degree"}
                      value={"Education/Doctorate degree"}
                    />
                  </RadioGroup>
                </View>
              </>
            ) : null}

            {this.state.show_3 ? (
              <>
                <Text style={styles.text_bold_center}>Are you currently:</Text>

                <View style={styles.question}>
                  <RadioGroup
                    getChecked={this.getChecked}
                    isScaleEnabled={false}
                    RadioGroupStyle={{
                      flexDirection: "column",
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                    RadioStyle={{
                      width: "100%",
                      height: 49,
                      borderRadius: 30,
                      marginBottom: 10,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    labelStyle={{
                      fontSize: 14,
                      paddingLeft: 20,
                      paddingRight: 20,
                      alignItems: "stretch",
                      color: "#2C3B51",
                      textAlign: "center"
                    }}
                  >
                    <Radio
                      iconName={"lens"}
                      label={"Employed for wages"}
                      value={"Employment/Employed for wages"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Self-employed"}
                      value={"Employment/Self-employed"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Out of work and looking for work"}
                      value={"Employment/Out of work and looking for work"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Out of work but not currently looking for work"}
                      value={
                        "Employment/Out of work but not currently looking for work"
                      }
                    />
                    <Radio
                      iconName={"lens"}
                      label={"A homemaker"}
                      value={"Employment/A homemaker"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"A student"}
                      value={"Employment/A student"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Military"}
                      value={"Employment/Military"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Retired"}
                      value={"Employment/Retired"}
                    />
                    <Radio
                      iconName={"lens"}
                      label={"Unable to work"}
                      value={"Employment/Unable to work"}
                    />
                  </RadioGroup>
                </View>
              </>
            ) : null}

            {this.state.show_4 ? (
              <>
                <Text style={styles.text_bold_center}>Do you have children?</Text>

                <View style={styles.question}>
                  <RadioGroup
                    getChecked={this.getChecked}
                    isScaleEnabled={false}
                    RadioGroupStyle={{
                      flexDirection: "column",
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                    RadioStyle={{
                      width: "100%",
                      height: 49,
                      borderRadius: 30,
                      marginBottom: 10,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    labelStyle={{
                      fontSize: 14,
                      paddingLeft: 20,
                      paddingRight: 20,
                      alignItems: "stretch",
                      color: "#2C3B51",
                      textAlign: "center"
                    }}
                  >
                    <Radio iconName={"lens"} label={"Yes"} value={"Kids/Yes"} />
                    <Radio iconName={"lens"} label={"No"} value={"Kids/No"} />
                  </RadioGroup>
                </View>
              </>
            ) : null}
          </ScrollView>

          {this.state.show_1 ? (
            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={!this.state.buttonIsActive1}
                onPress={this.handleClick}
              />
            </View>
          ) : null}

          {this.state.show_2 ? (
            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={!this.state.buttonIsActive2}
                onPress={this.handleClick}
              />
            </View>
          ) : null}

          {this.state.show_3 ? (
            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={!this.state.buttonIsActive3}
                onPress={this.handleClick}
              />
            </View>
          ) : null}

          {this.state.show_4 ? (
            <View style={styles.bottom}>
              <PrimaryButton
                label="Continue"
                isBottom={true}
                disabled={!this.state.buttonIsActive4}
                onPress={() => {
                  this.props.navigation.navigate("Extra_3_Screen_T1");
                }}
              />
            </View>
          ) : null}
        </View>
      </>
    );
  }
}
