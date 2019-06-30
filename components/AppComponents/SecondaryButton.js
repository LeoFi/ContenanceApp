import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
//import { defaultStyle } from './style'

export default class SecondaryButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            switch: false,
            switchValue: false,
            switchValueOn: "",
            switchValueOff: "",
        };
    }

    render() {

        return (
                <TouchableOpacity
                    //style={this.props.style}
                    style={styles.button_secondary}
                    onPress={this.props.onPress}
                    disabled={this.props.disabled}>
                    <Text style={styles.button_text_secondary}>
                        {this.props.label}
                    </Text>
                </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        marginBottom: 56,
        alignSelf: 'stretch',
    },
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