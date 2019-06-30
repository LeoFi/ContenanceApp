
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { PrimaryButton, SecondaryButton } from './../../../components/AppComponents';
import { styles } from './style'

export default class Third extends React.Component {

    static navigationOptions = {
        header: null,
    };
    state = {
        email: "",
        password: "",
        passwordConfirm: "",
    };


    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.header}>Third</Text>
                <Text style={styles.text}>{'\n'}Create an account to start your journey.</Text>

                {/**
                <TextInput style={styles.usernameInput}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({ email: text }) }}
                    placeholder="Username"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput style={styles.usernameInput}
                    value={this.state.passwordConfirm}
                    onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                    placeholder="Password (confirm)"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                **/}

                <TextInput style={styles.usernameInput}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                    placeholder="Enter Code"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <PrimaryButton label='Sign Up' onPress={() => {
                    this.props.navigation.navigate('Signup_Second');
                }} />

            </View>
        );
    }
}