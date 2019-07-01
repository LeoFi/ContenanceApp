
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { PrimaryButton, SecondaryButton } from './../../../components/AppComponents';
import { styles } from './style'

export default class Exercice_1_2 extends React.Component {

    state = {
        password: "",
    };


    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.header}>Second Page of Exercice !</Text>
                <Text style={styles.text}>{'\n'}Create an account to start your journey.</Text>

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
                    this.props.navigation.navigate('Exercice_1_3');
                }} />

            </View>
        );
    }
}