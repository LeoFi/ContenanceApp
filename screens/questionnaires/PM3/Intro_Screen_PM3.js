import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";

import { connect } from "react-redux";
import * as firebase from "firebase";

class Intro_Screen_PM3 extends React.Component {

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
       AC01_D12: EmptyResult,
       AC02_D12: EmptyResult,
       AC03_D12: EmptyResult,
       AP01_D12: EmptyResult,
       AP02_D12: EmptyResult,
       AP03_D12: EmptyResult,
       AP04_D12: EmptyResult,
       AP05_D12: EmptyResult,
       CE01_D12: EmptyResult,
       CE02_D12: EmptyResult,
       CE03_D12: EmptyResult,
       HS01_D12: EmptyResult,
       HS02_D12: EmptyResult,
       HS03_D12: EmptyResult,
       HSc_D12: EmptyResult,
       IN01_D12: EmptyResult,
       IN02_D12: EmptyResult,
       IN03_D12: EmptyResult,
       MFSU01_D12: EmptyResult,
       MFSU02_D12: EmptyResult,
       MFSU03_D12: EmptyResult,
       MFSU04_D12: EmptyResult,
       MFSU05_D12: EmptyResult,
       MFSU06_D12: EmptyResult,
       MFSU07_D12: EmptyResult,
       PSF01_D12: EmptyResult,
       PSF02_D12: EmptyResult,
       PSU01_D12: EmptyResult,
       PSU02_D12: EmptyResult,
       PSU03_D12: EmptyResult,
       PSU04_D12: EmptyResult,
       PSU05_D12: EmptyResult,
       PSU06_D12: EmptyResult,
       PSU07_D12: EmptyResult,
       PSU08_D12: EmptyResult,
       PSUc_D12: EmptyResult,
       SE01_D12: EmptyResult,
       SE02_D12: EmptyResult,
       SE03_D12: EmptyResult,
       SUE01_D12: EmptyResult,
       SUE02_D12: EmptyResult,
       TRP01_D12: EmptyResult,
       TRP02_D12: EmptyResult,
       TRP03_D12: EmptyResult,
       TRPc_D12: EmptyResult,
       FeelNoUse_D12: EmptyResult
     });
     this.props.navigation.navigate('PSU_Screen_PM3');
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header_left}>Time to reflect on your progress, {this.props.user.nickname}</Text>

        <Text style={styles.text_left}>
          {"\n"}The <Text style={styles.text_bold}>Vision</Text> module is over. 
          {"\n"}{"\n"}Answering the following questions will help us to trace your changes. This is important for our study and will only take ten minutes.
          {"\n"}{"\n"}If you happen to answer these questions at a later point, please do a mental time travel and pretend it is just the end of the <Text style={styles.text_bold}>Vision</Text> module.
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

export default connect(mapStateToProps)(Intro_Screen_PM3);