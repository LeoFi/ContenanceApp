import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
//import { defaultStyle } from './style'

export default class SecondaryButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const buttonProps = {
            label: this.props.label,
            disabled: this.props.disabled,
            onPress: this.props.onPress,
            isBottom: this.props.isBottom,
            style: this.props.style,
        }

        return (
                <TouchableOpacity
                    //style={this.props.style}
                    style={[
                        styles.button_secondary,
                        {
                            backgroundColor: buttonProps.disabled ? '#E0DFD0' : 'transparent',
                            borderColor: buttonProps.disabled ? '#E0DFD0' : '#2C3B51',
                            marginBottom: buttonProps.isBottom ? 0 : 15,
                        },
                        buttonProps.style
                    ]}
                    onPress={buttonProps.onPress}
                    disabled={buttonProps.disabled}>
                    <Text 
                    style={[
                        styles.button_text_secondary,
                        {
                            color: buttonProps.disabled ? 'rgba(44, 59, 81, 0.3)' : '#2C3B51',
                        },
                        buttonProps.style
                    ]}
                    >
                        {buttonProps.label}
                    </Text>
                </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    button_secondary: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#2C3B51',
        borderRadius: 99,
        overflow: 'hidden',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginBottom: 0,
        height: 56
    },
    button_text_secondary: {
        color: '#2C3B51',
        fontSize: 14,
        lineHeight: 23,
        textAlign: 'center',
        fontFamily: 'roboto-black',
        textTransform: 'uppercase',
        alignSelf: 'stretch',
        letterSpacing: 2,
    },
});