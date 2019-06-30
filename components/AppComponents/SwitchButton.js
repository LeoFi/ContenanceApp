import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import { PrimaryButton } from '.';

export default class SwitchButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            switch: false,
            switchValue: false,
            buttonDisable: '',
            isbuttonDisabled: true,
            switchValueOn: "",
            switchValueOff: "",
        };

    }
    toggleSwitch = (value) => {

        this.setState({ disabled: value });
        //onValueChange of the switch this function will be called
        this.setState({ switchValue: value })
        console.log(value);

        //console.log(buttonDisable);
        //state changes according to switch
        //which will result in re-render the text
    }

    render() {

        return (
            <View>
                <View>
                    <Text>{this.state.switchValue ? this.props.switchValueOn : this.props.switchValueOff}</Text>
                    <Switch
                        style={{ marginTop: 30 }}
                        onValueChange={this.toggleSwitch}
                        value={this.state.switchValue}
                    />
                    <TouchableOpacity
                        //style={this.props.style}
                        //style={{ backgroundColor: this.state.switchValue != true ? 'rgba(44, 59, 81, 0.3)' : '#2C3B51' }}
                        style={styles.button_primary}
                        onPress={this.props.onPress}
                        disabled={this.state.switchValue ? false : true}
                        activeOpacity={this.state.switchValue ? 1 : 0.7}
                    >
                        <Text style={styles.button_text_primary}>
                            {this.props.label}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        justifyContent: 'center',
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