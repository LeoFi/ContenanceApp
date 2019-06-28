import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class SecondaryButton extends React.Component {

    onLoginPress = () => {
        this.props.navigation.navigate('Login');
    }
    
    render() {
        return <TouchableOpacity
            style={styles.button_secondary}
            onPress={this.onLoginPress}
        >
            <Text {...this.props}
            style={styles.button_text_secondary}></Text>
        </TouchableOpacity>
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