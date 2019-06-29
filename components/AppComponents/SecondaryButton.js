import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class SecondaryButton extends Component {

    render() {
        return (
            <TouchableOpacity
            style={styles.button_secondary}
            onPress={this.props.onPress}>
                <Text style={styles.button_text_secondary}>
                    {this.props.label}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button_secondary: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 99,
        overflow: 'hidden',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginBottom: 15,
    },
    button_text_secondary: {
        color: '#2C3B51',
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'roboto-black',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
});