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
    Dimensions
  } from "react-native";
  import {
    PrimaryButton,
    SecondaryButton,
    ExerciceButton,
    HeaderComponent
  } from "./../../components/AppComponents";
  import * as firebase from "firebase";
  
  import { connect } from "react-redux";
  
  class SupportScreen extends React.Component {
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
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>
              Support
              {/* {this.state.exercices.exercice_state_1}! */}
            </Text>
  
            <Image
              style={styles.center}
              source={require("./../../assets/images/ObservePhase.png")}
            />
  
            <View style={styles.bottom}>
              <ExerciceButton
                status={this.props.exercices.exercice_state_1}
                label="Day 17 - Taking Control on the Smartphone"
                isBottom={false}
                //state={this.props.exercices.exercice_state_1}
                onPress={() => {
                  console.log(this.props.exercices.exercice_state_1);
                  //this.props.navigation.navigate("Intro_Phase_Observe");
                }}
              />
  
              <ExerciceButton
                state={this.props.exercices.exercice_state_2}
                label="Day 18 - Taking Control of the Environment"
                isBottom={false}
                onPress={() => {
                  console.log(state);
                  this.props.navigation.navigate("Exercice_2_Intro");
                }}
              />
  
              <ExerciceButton
                status={this.props.exercices.exercice_state_1}
                label="Day 19 - Me, the Smartphone and Others"
                isBottom={false}
                //state={this.props.exercices.exercice_state_1}
                onPress={() => {
                  console.log(this.props.exercices.exercice_state_1);
                  //this.props.navigation.navigate("Intro_Phase_Observe");
                }}
              />
  
              <ExerciceButton
                state={this.props.exercices.exercice_state_2}
                label="Day 20 - Daddeln is Okay"
                isBottom={false}
                onPress={() => {
                  console.log(state);
                  this.props.navigation.navigate("Exercice_2_Intro");
                }}
              />

            </View>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingBottom: 10,
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
      position: "relative",
      top: 30,
      left: 0
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
      paddingLeft: 30,
      paddingRight: 30,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      //height: Dimensions.get("window").height / 2,
      position: "relative",
      bottom: 0,
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
      paddingTop: 10,
      paddingBottom: 0
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
      paddingBottom: 30
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
  
  export default connect(mapStateToProps)(SupportScreen);
  