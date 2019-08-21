import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";

import { connect } from "react-redux";

class Intro_Screen_PM4 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left}>Time to reflect on your progress, {this.props.user.nickname}</Text>

        <Text style={styles.text_left}>
          {"\n"}The <Text style={styles.text_bold}>Plan</Text> module is over. 
          {"\n"}{"\n"}Answering the following questions will help us to trace your changes. This is important for our study and will only take ten minutes.
          {"\n"}{"\n"}If you happen to answer these questions at a later point, please do a mental time travel and pretend it is just the end of the <Text style={styles.text_bold}>Observe</Text> module.
        </Text>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Start Reflection"
            isBottom={true}
            onPress={() => {
                this.props.navigation.navigate('PSU_Screen_PM4');
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

export default connect(mapStateToProps)(Intro_Screen_PM4);