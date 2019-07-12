import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  StatusBar,
} from "react-native";
import { PrimaryButton, SecondaryButton, ExerciceButton, HeaderComponent } from "./../components/AppComponents";
import * as firebase from "firebase";

import { connect } from "react-redux";

class TestScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      exercice_state_1: this.props.exercices.exercice_state_1 || "",
      exercice_state_2: this.props.exercices.exercice_state_2 || ""
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, paddingTop: 50, marginTop: 10 }}>
          <Image
            style={styles.center}
            source={require("./../assets/images/home_1.png")}
          />

          <Text style={styles.header_left}>
            Hey, {this.props.user.nickname} 
            {/* {this.state.exercices.exercice_state_1}! */}
          </Text>

          <Text style={styles.text_left}>
            {"\n"}Continue with your next session.
          </Text>

          <ExerciceButton
            status={this.props.exercices.exercice_state_1}
            label="Day 1 - Contenance"
            isBottom={false}
            //state={this.props.exercices.exercice_state_1}
            onPress={() => {
              console.log(this.props.exercices.exercice_state_1);
              //this.props.navigation.navigate("Intro_Phase_Observe");
            }}
          />

          <ExerciceButton
            state={this.props.exercices.exercice_state_2}
            label="Day 2 - Notice Your Impulses"
            isBottom={true}
            onPress={() => {
              console.log(state);
              this.props.navigation.navigate("Exercice_2_Intro");
            }}
          />
          
         
          <Button title="Signout" onPress={this.onSignoutPress} /> 
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch"
  },
  container_scroll: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignSelf: "stretch"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  middle: {
    justifyContent: "center",
    alignSelf: "stretch"
  },
  inline: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignSelf: "stretch",
    paddingTop: 20
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "stretch"
  },
  keyboard_view: {
    flex: 1
  },
  header: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 10
  },
  header_left: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "left",
    fontFamily: "roboto-black",
    paddingTop: 30,
    alignSelf: "stretch"
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular"
  },
  text_left: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    paddingBottom: 30,
  },
  text_scroll: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular"
  },
  codeInput: {
    marginTop: 43,
    alignSelf: "stretch",
    textAlign: "center",
    height: 40,
    fontSize: 19,
    borderBottomWidth: 2
  },
  usernameInput: {
    marginTop: 43,
    marginBottom: 43,
    alignSelf: "stretch",
    textAlign: "center",
    height: 40,
    fontSize: 19,
    borderBottomWidth: 2
  }
});

const mapStateToProps = state => ({
  user: state.user,
  exercices: state.exercices
});

export default connect(mapStateToProps)(TestScreen);