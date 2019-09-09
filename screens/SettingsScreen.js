import React from "react";
import { ScrollView, StyleSheet, View, Image, Alert, Text } from "react-native";
import SettingsList, { Item } from "react-native-settings-list";
import PrimaryButton from "./../components/AppComponents/PrimaryButton"

import * as firebase from "firebase";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#F4F1DE",
      shadowOpacity: 0,
      elevation: 0,
      borderBottomWidth: 0
    },
    headerBackTitle: null,
    headerTitle: "Settings",
    headerTintColor: "#2C3B51",
    headerTitleStyle: {
      color: "#2C3B51",
      fontSize: 30,
      lineHeight: 37,
      textAlign: "left",
      fontFamily: "roboto-black",
      paddingTop: 15,
      paddingBottom: 80,
      alignSelf: "stretch"
    }
  };
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = { switchValue: false };
  }

  onValueChange(value) {
    this.setState({ switchValue: value });
  }

  render() {
    var bgColor = "#DCE3F4";

    return (
      <>
        <View style={{ height: 50, backgroundColor: "#F4F1DE" }} />
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: "#F4F1DE", flex: 1 }}>
            <SettingsList borderColor="#868D91" defaultItemSize={50}>
              <SettingsList.Item
                titleStyle={styles.text_left}
                backgroundColor="#F4F1DE"
                title="FAQ"
                onPress={() => this.props.navigation.navigate("Faq")}
              />
              <SettingsList.Item
                titleStyle={styles.text_left}
                backgroundColor="#F4F1DE"
                title="Security Agreements"
                onPress={() =>
                  this.props.navigation.navigate("SecurityAgreements")
                }
              />
              <SettingsList.Item
                titleStyle={styles.text_left}
                backgroundColor="#F4F1DE"
                title="Contact us"
                onPress={() => this.props.navigation.navigate("ContactUs")}
              />
            </SettingsList>
          </View>
        </View>

        {/* <View style={styles.bottom}>
          <PrimaryButton
            label="LOG OUT"
            isBottom={true}
            onPress={() => {
              firebase.auth().signOut();
            }}
          />
        </View> */}
      </>
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
    backgroundColor: "#F4F1DE"
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
    position: "relative",
    alignSelf: "stretch",
    //paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    bottom: 30
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
    alignSelf: "stretch"
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
