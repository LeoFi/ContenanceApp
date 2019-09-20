import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";

import { connect } from "react-redux";
import * as firebase from "firebase";

class Intro_Screen_PM5 extends React.Component {

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
       AC01_D20: EmptyResult,
       AC02_D20: EmptyResult,
       AC03_D20: EmptyResult,
       AP01_D20: EmptyResult,
       AP02_D20: EmptyResult,
       AP03_D20: EmptyResult,
       AP04_D20: EmptyResult,
       AP05_D20: EmptyResult,
       CE01_D20: EmptyResult,
       CE02_D20: EmptyResult,
       CE03_D20: EmptyResult,
       HS01_D20: EmptyResult,
       HS02_D20: EmptyResult,
       HS03_D20: EmptyResult,
       HSc_D20: EmptyResult,
       IN01_D20: EmptyResult,
       IN02_D20: EmptyResult,
       IN03_D20: EmptyResult,
       MFSU01_D20: EmptyResult,
       MFSU02_D20: EmptyResult,
       MFSU03_D20: EmptyResult,
       MFSU04_D20: EmptyResult,
       MFSU05_D20: EmptyResult,
       MFSU06_D20: EmptyResult,
       MFSU07_D20: EmptyResult,
       PSF01_D20: EmptyResult,
       PSF02_D20: EmptyResult,
       PSU01_D20: EmptyResult,
       PSU02_D20: EmptyResult,
       PSU03_D20: EmptyResult,
       PSU04_D20: EmptyResult,
       PSU05_D20: EmptyResult,
       PSU06_D20: EmptyResult,
       PSU07_D20: EmptyResult,
       PSU08_D20: EmptyResult,
       PSUc_D20: EmptyResult,
       SE01_D20: EmptyResult,
       SE02_D20: EmptyResult,
       SE03_D20: EmptyResult,
       SUE01_D20: EmptyResult,
       SUE02_D20: EmptyResult,
       TRP01_D20: EmptyResult,
       TRP02_D20: EmptyResult,
       TRP03_D20: EmptyResult,
       TRPc_D20: EmptyResult
     });
     this.props.navigation.navigate('PSU_Screen_PM5');
  }


  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header_left}>Time to reflect on your progress, {this.props.user.nickname}</Text>

        <Text style={styles.text_left}>
          {"\n"}The <Text style={styles.text_bold}>Support</Text> module is over. 
          {"\n"}{"\n"}Answering the following questions will help us to trace your changes. This is important for our study and will only take ten minutes.
          {"\n"}{"\n"}If you happen to answer these questions at a later point, please do a mental time travel and pretend it is just the end of the <Text style={styles.text_bold}>Support</Text> module.
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

export default connect(mapStateToProps)(Intro_Screen_PM5);