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
        <Text style={styles.header_left}>You made it, {this.props.user.nickname}.</Text>

        <Text style={styles.text_left}>
          {"\n"}There is nothing more to exercise today. Thanks a million for being so brave and tackling your smartphone habits with the 21-day Contenance program.
          {"\n"}{"\n"}This was the active part of the training. We’ll send you an email with information on the next steps.
        </Text>

        <View style={styles.bottom}>
          <PrimaryButton
            label="DONE"
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
