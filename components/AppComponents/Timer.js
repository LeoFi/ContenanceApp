import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
//import { defaultStyle } from './style'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 10 };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentDidUpdate() {
    if (this.state.timer === 0) {
      clearInterval(this.interval);

      Alert.alert("Timer is Done")
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.header}> {this.state.timer} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        color: '#2C3B51',
        fontSize: 34,
        lineHeight: 37,
        textAlign: 'center',
        fontFamily: 'roboto-black',
        paddingBottom: 10,
    },
});
