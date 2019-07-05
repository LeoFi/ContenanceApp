import React from "react";
import { View, Text, TextInput, StatusBar } from "react-native";
import {
  PrimaryButton,
  SecondaryButton
} from "./../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_1_2 extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#F4F1DE",
      shadowOpacity: 0,
      elevation: 0,
      borderBottomWidth: 0
    },
    headerBackTitle: null,
    headerTitle: (
      <Progress.Bar
        progress={0.4}
        borderWidth={0}
        width={250}
        color={"rgba(44, 59, 81, 1)"}
        unfilledColor={"rgba(255, 255, 255, 1)"}
      />
    ),
    headerTintColor: "#2C3B51"
  };
  constructor(props) {
    super(props);
    this.state = {
        isWritten: "",
    };

    // firebase.database().ref('users/0003').set({name: 'Darya Sudas'}).then(() => {
    //     console.log("INSERTED");
    //     //console.log(firebase.auth().currentUser.uid)
    // }).catch((error) => {
    //     console.log(error);
    // // })
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden />
        <Text style={styles.header}>Second Page of Exercice !</Text>
        <Text style={styles.text}>
          {"\n"}Create an account to start your journey.
        </Text>

        <View style={styles.middle}>
          <TextInput
            style={styles.usernameInput}
            value={this.state.isWritten}
            onChangeText={isWritten => this.setState({ isWritten })}
            placeholder="Write down you first obstacle"
            placeholderTextColor="rgba(44, 59, 81, 0.3)"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <PrimaryButton
          label="Sign Up"
          disabled={
            !this.state.isWritten
          }
          onPress={() => {
            this.props.navigation.navigate("Exercice_1_3");
          }}
        />
      </View>
    );
  }
}
