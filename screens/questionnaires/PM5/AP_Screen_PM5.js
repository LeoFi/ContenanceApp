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

import * as Progress from "react-native-progress";
import { connect } from "react-redux";
import * as firebase from "firebase";

class AP_Screen_PM5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      progressValue: 31/45,
      buttonIsActive: false,
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
        this.setState({ progressValue: 32/45 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 33/45 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 34/45 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValue: 35/45 });
      } else if (this.state.show_5 == true) {
        this.setState({ progressValue: 36/45 });
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValue: 32/45 });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
        this.setState({ progressValue: 33/45 });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
        this.setState({ progressValue: 34/45 });
      } else if (this.state.show_4 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: false });
        this.setState({ show_5: true });
        this.setState({ progressValue: 35/45 });
      } else if (this.state.show_5 == true) {
        this.setState({ progressValue: 36/45 });
        this.props.navigation.navigate("AC_Screen_PM5");
      }
    }, 400);
  };

  render() {
    return (
      <>
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
            I have made a detailed plan regarding when to use my smartphone consciously (e.g., on the way to work).
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AP01_D20/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AP01_D20/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AP01_D20/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AP01_D20/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AP01_D20/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AP01_D20/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
            I have made a detailed plan regarding where to use my smartphone consciously (e.g., in the train)
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AP02_D20/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AP02_D20/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AP02_D20/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AP02_D20/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AP02_D20/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AP02_D20/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
            I have made a detailed plan regarding what to do on my smartphone to use it consciously (e.g., listen to a TED talk on the smartphone)
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AP03_D20/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AP03_D20/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AP03_D20/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AP03_D20/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AP03_D20/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AP03_D20/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
            I have made a detailed plan regarding what I can do in difficult situations to stay true to my plans.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AP04_D20/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AP04_D20/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AP04_D20/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AP04_D20/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AP04_D20/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AP04_D20/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_5 ? (
          <>
            <Text style={styles.text_left}>
            I have made a detailed plan regarding how to deal with it once I’ve failed doing it.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AP05_D20/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AP05_D20/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AP05_D20/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AP05_D20/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AP05_D20/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AP05_D20/6"} />
              </RadioGroup>
            </View>
        
       
            <View style={styles.bottom}>
              <PrimaryButton
                label="Keep Going"
                isBottom={true}
                disabled={ !this.state.buttonIsActive }
                onPress={() => {
                  this.props.navigation.navigate("AC_Screen_PM5");
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

export default connect(mapStateToProps)(AP_Screen_PM5);
