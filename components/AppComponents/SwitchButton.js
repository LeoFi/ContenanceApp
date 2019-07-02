import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import PrimaryButton from './PrimaryButton';
import LinkText from './LinkText';

export default class SwitchButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }

    render() {

        const buttonProps = {
            label: this.props.label,
            disabled: this.state.switchValue ? false : true,
            isBottom: this.props.isBottom,
            onPress: this.props.onPress,
            linkOnPress: this.props.linkOnPress,
            linkLabel: this.props.linkLabel,
            textLabel: this.props.textLabel,
        }

        // const overrideButtonProps = {
        //     ...buttonProps,
        //     label: 'override',
        // }



        return (
            <View style={styles.container}>
                <View style={styles.inline}>
                    <LinkText
                        style={styles.link_text}
                        linkLabel={buttonProps.linkLabel}
                        textLabel={buttonProps.textLabel}
                        linkOnPress={buttonProps.linkOnPress}
                    />
                    <Switch
                        onValueChange={this.toggleSwitch}
                        value={this.state.switchValue}
                    />
                </View>
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
        paddingTop: 30,
        //textAlign: 'left',
    },
    inline: {
        flex: 1,
        flexDirection:'row-reverse', 
        justifyContent: 'flex-end',
        //flexDirection: 'column',
        alignSelf: 'stretch',
        //flexWrap:'wrap',
    }
});