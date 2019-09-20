import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";

import { connect } from "react-redux";
import * as firebase from "firebase";

class Intro_Screen_PM2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || ""
    };
  }

  handleSubmit = () => {
    const EmptyResult = "999";
    
   firebase
     .database()
     .ref("questionnaires")
     .child(this.props.user.UID)
     .update({
       AC01_D8: EmptyResult,
       AC02_D8: EmptyResult,
       AC03_D8: EmptyResult,
       AP01_D8: EmptyResult,
       AP02_D8: EmptyResult,
       AP03_D8: EmptyResult,
       AP04_D8: EmptyResult,
       AP05_D8: EmptyResult,
       CE01_D8: EmptyResult,
       CE02_D8: EmptyResult,
       CE03_D8: EmptyResult,
       HS01_D8: EmptyResult,
       HS02_D8: EmptyResult,
       HS03_D8: EmptyResult,
       HSc_D8: EmptyResult,
       IN01_D8: EmptyResult,
       IN02_D8: EmptyResult,
       IN03_D8: EmptyResult,
       MFSU01_D8: EmptyResult,
       MFSU02_D8: EmptyResult,
       MFSU03_D8: EmptyResult,
       MFSU04_D8: EmptyResult,
       MFSU05_D8: EmptyResult,
       MFSU06_D8: EmptyResult,
       MFSU07_D8: EmptyResult,
       PSF01_D8: EmptyResult,
       PSF02_D8: EmptyResult,
       PSU01_D8: EmptyResult,
       PSU02_D8: EmptyResult,
       PSU03_D8: EmptyResult,
       PSU04_D8: EmptyResult,
       PSU05_D8: EmptyResult,
       PSU06_D8: EmptyResult,
       PSU07_D8: EmptyResult,
       PSU08_D8: EmptyResult,
       PSUc_D8: EmptyResult,
       SE01_D8: EmptyResult,
       SE02_D8: EmptyResult,
       SE03_D8: EmptyResult,
       SUE01_D8: EmptyResult,
       SUE02_D8: EmptyResult,
       TRP01_D8: EmptyResult,
       TRP02_D8: EmptyResult,
       TRP03_D8: EmptyResult,
       TRPc_D8: EmptyResult
     });
     this.props.navigation.navigate("PSU_Screen_PM2");
  }




  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header_left}>
            Time to reflect on your progress, {this.props.user.nickname}
          </Text>

          <Text style={styles.text_left}>
            {"\n"}The <Text style={styles.text_bold}>Reflect</Text> module is
            over.
            {"\n"}
            {"\n"}Answering the following questions will help us to trace your
            changes. This is important for our study and will only take ten
            minutes.
            {"\n"}
            {"\n"}If you happen to answer these questions at a later point,
            please do a mental time travel and pretend it is just the end of the{" "}
            <Text style={styles.text_bold}>Reflect</Text> module.
          </Text>
        </ScrollView>
        <View style={{ flex: 1 }} />

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Start Reflecting"
            isBottom={true}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Intro_Screen_PM2);
