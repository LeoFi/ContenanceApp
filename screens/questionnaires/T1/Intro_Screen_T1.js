import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";

import { connect } from "react-redux";

class Intro_Screen_T1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left}>{this.props.user.nickname}, welcome to Contenance</Text>

        <Text style={styles.text_left}>
          {"\n"}Before you start the training, we have a few questions about your smartphone use, your smartphone habits and your well-being.
          {"\n"}{"\n"}This is important for our study and will only take five minutes.
        </Text>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Start Reflection"
            isBottom={true}
            onPress={() => {
                this.props.navigation.navigate('PSU_Screen_T1');
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Intro_Screen_T1);