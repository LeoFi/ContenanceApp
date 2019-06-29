import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class PrimaryButton extends Component {

    render() {
        return (
            <TouchableOpacity
            style={styles.button_primary}
            onPress={this.props.onPress}>
                <Text style={styles.button_text_primary}>
                    {this.props.label}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  button_primary: {
      backgroundColor: '#2C3B51',
      borderWidth: 2,
      borderColor: '#2C3B51',
      borderRadius: 99,
      overflow: 'hidden',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'stretch',
      marginBottom: 15,
  },
  button_text_primary: {
      color: '#F4F1DE',
      fontSize: 17,
      textAlign: 'center',
      fontFamily: 'roboto-black',
      textTransform: 'uppercase',
      letterSpacing: 2,
  },
});