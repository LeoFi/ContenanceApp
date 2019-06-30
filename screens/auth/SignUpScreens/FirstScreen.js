
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { PrimaryButton, SecondaryButton, SwitchButton } from './../../../components/AppComponents';
import { styles } from './style'

export default class FirstScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.header}>Create an Account</Text>
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

                <SwitchButton
                    label='Sign Up'
                    switchValueOn='CA MARCHE'
                    switchValueOff='CA MARCHE PAS'
                    onPress={() => {
                        this.props.navigation.navigate('Signup_Third');
                    }}
                />

            </View>
        );
    }
}