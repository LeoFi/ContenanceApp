import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";

import { connect } from "react-redux";
import * as firebase from "firebase";

class Intro_Screen_PM4 extends React.Component {

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
       AC01_D16: EmptyResult,
       AC02_D16: EmptyResult,
       AC03_D16: EmptyResult,
       AP01_D16: EmptyResult,
       AP02_D16: EmptyResult,
       AP03_D16: EmptyResult,
       AP04_D16: EmptyResult,
       AP05_D16: EmptyResult,
       CE01_D16: EmptyResult,
       CE02_D16: EmptyResult,
       CE03_D16: EmptyResult,
       HS01_D16: EmptyResult,
       HS02_D16: EmptyResult,
       HS03_D16: EmptyResult,
       HSc_D16: EmptyResult,
       IN01_D16: EmptyResult,
       IN02_D16: EmptyResult,
       IN03_D16: EmptyResult,
       MFSU01_D16: EmptyResult,
       MFSU02_D16: EmptyResult,
       MFSU03_D16: EmptyResult,
       MFSU04_D16: EmptyResult,
       MFSU05_D16: EmptyResult,
       MFSU06_D16: EmptyResult,
       MFSU07_D16: EmptyResult,
       PSF01_D16: EmptyResult,
       PSF02_D16: EmptyResult,
       PSU01_D16: EmptyResult,
       PSU02_D16: EmptyResult,
       PSU03_D16: EmptyResult,
       PSU04_D16: EmptyResult,
       PSU05_D16: EmptyResult,
       PSU06_D16: EmptyResult,
       PSU07_D16: EmptyResult,
       PSU08_D16: EmptyResult,
       PSUc_D16: EmptyResult,
       SE01_D16: EmptyResult,
       SE02_D16: EmptyResult,
       SE03_D16: EmptyResult,
       SUE01_D16: EmptyResult,
       SUE02_D16: EmptyResult,
       TRP01_D16: EmptyResult,
       TRP02_D16: EmptyResult,
       TRP03_D16: EmptyResult,
       TRPc_D16: EmptyResult,
       FeelNoUse_D16: EmptyResult
     });
     this.props.navigation.navigate('PSU_Screen_PM4');
  }



  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header_left}>Time to reflect on your progress, {this.props.user.nickname}</Text>

        <Text style={styles.text_left}>
          {"\n"}The <Text style={styles.text_bold}>Plan</Text> module is over. 
          {"\n"}{"\n"}Answering the following questions will help us to trace your changes. This is important for our study and will only take ten minutes.
          {"\n"}{"\n"}If you happen to answer these questions at a later point, please do a mental time travel and pretend it is just the end of the <Text style={styles.text_bold}>Plan</Text> module.
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

export default connect(mapStateToProps)(Intro_Screen_PM4);