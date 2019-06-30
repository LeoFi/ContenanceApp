import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
//import { defaultStyle } from './style'

export default class PrimaryButton extends Component {

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
                    style={styles.button_primary}
                    onPress={this.props.onPress}
                    disabled={this.props.disabled}>
                    <Text style={styles.button_text_primary}>
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
        alignSelf: 'stretch',
        letterSpacing: 2,
    },
});