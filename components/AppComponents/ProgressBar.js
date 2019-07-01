import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
//import { defaultStyle } from './style'

export default class ProgressBar extends Component {

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
                        styles.button_primary,
                        {
                            backgroundColor: buttonProps.disabled ? '#E0DFD0' : '#2C3B51',
                            borderColor: buttonProps.disabled ? '#E0DFD0' : '#2C3B51',
                            marginBottom: buttonProps.isBottom ? 0 : 15,
                        },
                        buttonProps.style
                    ]}
                    onPress={buttonProps.onPress}
                    disabled={buttonProps.disabled}>
                    <Text 
                    style={[
                        styles.button_text_primary,
                        {
                            color: buttonProps.disabled ? 'rgba(44, 59, 81, 0.3)' : '#F4F1DE',
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
        marginBottom: 0,
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