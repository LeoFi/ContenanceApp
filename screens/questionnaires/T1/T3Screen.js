import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";
import { connect } from 'react-redux';
import { setNickname } from '../../../redux/app-redux';

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



class T3Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left}>Thank you, {this.props.nickname}.</Text>

        <Text style={styles.text_left}>
          {"\n"}You’re all set and ready to dive into the wide ocean.
          {"\n"}{"\n"}Enjoy your journey!
        </Text>

        <View style={styles.bottom}>
          <PrimaryButton
            label="START EXERCISING"
            isBottom={true}
            onPress={() => {
                this.props.navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(T3Screen);