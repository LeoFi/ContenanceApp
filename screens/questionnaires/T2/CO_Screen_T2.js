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
import RadioGroup, {
  Radio
} from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";

import { connect } from "react-redux";
import * as firebase from "firebase";

class CO_Screen_T2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
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
        this.props.navigation.navigate("QQ_Screen_T2");
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
          <Text style={styles.skip_text}>Skip</Text>
        </TouchableOpacity>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
              Have you been on holidays during the time of the program?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                isScaleEnabled={false}
                RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
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
                  alignItems: "stretch"
                }}
              >
                <Radio iconName={"lens"} label={"Yes"} value={"Holiday/Yes"} />
                <Radio iconName={"lens"} label={"No"} value={"Holiday/No"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
              If yes, in which week have you been on holidays?{"\n"}
              If no, please skip the question
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                isScaleEnabled={false}
                RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
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
                  alignItems: "stretch"
                }}
              >
                <Radio
                  iconName={"lens"}
                  label={"Week 1 (Day 1-7)"}
                  value={"HolidaysWeek/Week 1 (Day 1-7)"}
                />
                <Radio
                  iconName={"lens"}
                  label={"Week 2 (Day 7-14)"}
                  value={"HolidaysWeek/Week 2 (Day 7-14)"}
                />
                <Radio
                  iconName={"lens"}
                  label={"Week 3 (Day 14-21)"}
                  value={"HolidaysWeek/Week 3 (Day 14-21)"}
                />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
              Have you used any additional strategies to change your smartphone
              use?
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                isScaleEnabled={false}
                RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
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
                  alignItems: "stretch"
                }}
              >
                <Radio
                  iconName={"lens"}
                  label={"Yes"}
                  value={"AddStratYN_D21//Yes"}
                />
                <Radio
                  iconName={"lens"}
                  label={"No"}
                  value={"AddStratYN_D21/No"}
                />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
              If yes, what strategies have you used?{"\n"}
              If no, please skip the question
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                isScaleEnabled={false}
                RadioGroupStyle={{ flexDirection: "column", paddingTop: 20 }}
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
                  alignItems: "stretch"
                }}
              >
                <Radio
                  iconName={"lens"}
                  label={"Flightmode"}
                  value={"AddStrat_D21/Flightmode"}
                />
                <Radio
                  iconName={"lens"}
                  label={"App Use Limits"}
                  value={"AddStrat_D21/App Use Limits"}
                />
                <Radio
                  iconName={"lens"}
                  label={"Downtime"}
                  value={"AddStrat_D21/Downtime"}
                />
                <Radio
                  iconName={"lens"}
                  label={"Alarm as Reminder"}
                  value={"AddStrat_D21/Alarm as Reminder"}
                />
                <Radio
                  iconName={"lens"}
                  label={"Other"}
                  value={"AddStrat_D21/Other"}
                />
              </RadioGroup>
            </View>

            <View style={styles.bottom}>
              <PrimaryButton
                label="Keep Going"
                isBottom={true}
                disabled={!this.state.buttonIsActive}
                onPress={() => {
                  this.props.navigation.navigate("QQ_Screen_T2");
                }}
              />
            </View>
          </>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(CO_Screen_T2);

