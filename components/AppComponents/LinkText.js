import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
//import { defaultStyle } from './style'

export default class LinkText extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const buttonProps = {
            textLabel: this.props.textLabel,
            linkLabel: this.props.linkLabel,
            linkOnPress: this.props.linkOnPress,
            style: this.props.style,
        }

        return (
            <TouchableOpacity
                //style={this.props.style}
                onPress={buttonProps.linkOnPress}>
                <Text>
                    <Text style={styles.text}>
                        {buttonProps.textLabel} 
                    </Text>
                    <Text style={styles.link}>
                        {buttonProps.linkLabel}
                    </Text>
                </Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: 'roboto-regular',
    },
    link: {
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: 'roboto-regular',
        textDecorationLine: 'underline',
    },
});