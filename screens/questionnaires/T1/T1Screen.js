import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";
import { connect } from 'react-redux';
import { setNickname } from './../../../redux/app-redux';

const mapStateToProps = (state) => {
  return {
    nickname: state.nickname,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNickname: (text) => { dispatch(setNickname(text)) },
  };
}



class T1Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left}>{this.props.nickname}, welcome to Contenance</Text>

        <Text style={styles.text_left}>
          {"\n"}Before you start the training, we have a few questions about your smartphone use, your smartphone habits and your well-being.
          {"\n"}{"\n"}This is important for our study and will only take five minutes.
        </Text>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Start Reflection"
            isBottom={true}
            onPress={() => {
                this.props.navigation.navigate('T2');
            }}
          />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(T1Screen);