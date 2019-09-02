import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";
import { connect } from "react-redux";
import * as firebase from "firebase";


class Closing_Screen_T2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left}>Thank you, {this.props.user.nickname}.</Text>

        <Text style={styles.text_left}>
          {"\n"}You’re all set and ready to dive into the wide ocean.
          {"\n"}{"\n"}Enjoy your journey!
        </Text>

        <View style={styles.bottom}>
          <PrimaryButton
            label="START EXERCISING"
            isBottom={true}
            onPress={() => {
              const uid = firebase.auth().currentUser.uid;
              var initialDate = new Date().toString();
              
              firebase
                .database()
                .ref()
                .child("accounts")
                .child(uid)
                .update({
                  Day_21_Done: initialDate
                });

                this.props.navigation.navigate('Home');
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

export default connect(mapStateToProps)(Closing_Screen_T2);
