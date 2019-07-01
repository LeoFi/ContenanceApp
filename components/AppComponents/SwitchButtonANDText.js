import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import PrimaryButton from './PrimaryButton';
import LinkText from './LinkText';

export default class SwitchButtonANDText extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }
    toggleSwitch = (value) => {

        this.setState({ switchValue: value })
        //console.log(value);

        //console.log(buttonDisable);
        //state changes according to switch
        //which will result in re-render the text
    }

    render() {

        const buttonProps = {
            label: this.props.label,
            disabled: this.state.switchValue ? false : true,
            isBottom: this.props.isBottom,
            onPress: this.props.onPress,
            link: this.props.link,
        }

        // const overrideButtonProps = {
        //     ...buttonProps,
        //     label: 'override',
        // }



        return (
            <View style={styles.container}>
                <Text>{this.state.switchValue ? this.props.switchValueOn : this.props.switchValueOff}</Text>
                <Switch
                    onValueChange={this.toggleSwitch}
                    value={this.state.switchValue}
                />
                <View>
                    <PrimaryButton
                        label={buttonProps.label}
                        disabled={buttonProps.disabled}
                        isBottom={buttonProps.isBottom}
                        onPress={buttonProps.onPress}
                    />
                </View>
                {/* <PrimaryButton
                        {...overrideButtonProps}
                    />                     */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'column',
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