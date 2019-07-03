import React from "react";
import { ScrollView, StyleSheet, View, Image, Alert } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { PrimaryButton, SecondaryButton } from "./../components/AppComponents";
import SettingsList from "react-native-settings-list";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor:'#F4F1DE', borderColor:'#c8c7cc' }}>
          <SettingsList style={{ flex: 1, backgroundColor:'#F4F1DE'}}>
            <SettingsList.Item 
            title="Profile"
            onPress={() => Alert.alert('Route To Profile')}
            />
            <SettingsList.Item
            title="Reminders"
            onPress={() => Alert.alert('Route To Reminders')}
            />
            <SettingsList.Item
            title="FAQ"
            onPress={() => Alert.alert('Route To FAQ')}
            />
            <SettingsList.Item
            title="Security Agreements"
            onPress={() => Alert.alert('Route To Security Agreements')}
            />
            <SettingsList.Item
            title="Contact Us"
            onPress={() => Alert.alert('Route To Contact Us')}
            />
          </SettingsList>
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
    fontSize: 34,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 10
  },
  header_left: {
    color: "#2C3B51",
    fontSize: 34,
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