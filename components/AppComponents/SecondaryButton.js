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

        const buttonPropsSecondary = {
            label: this.props.label,
            disabled: false,
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
                        backgroundColor: buttonPropsSecondary.disabled ? 'grey' : 'transparent',
                        borderColor: buttonPropsSecondary.disabled ? 'grey' : '#2C3B51',
                        marginBottom: buttonPropsSecondary.isBottom ? 0 : 15,
                    },
                    buttonPropsSecondary.style
                ]}
                onPress={buttonPropsSecondary.onPress}
                disabled={buttonPropsSecondary.disabled}
                isBottom={buttonPropsSecondary.isBottom}>
                <Text
                style={[
                    styles.button_text_secondary,
                    {
                        color: buttonPropsSecondary.disabled ? 'white' : '#2C3B51',
                    },
                    buttonPropsSecondary.style
                ]}>
                    {buttonPropsSecondary.label}
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
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginBottom: 0,
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