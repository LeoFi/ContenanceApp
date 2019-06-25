
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
            username: "",
        };
    }

    onLoginPress = () => {
        this.props.navigation.navigate('Login');
    }

    onCreateAccountPress = () => {
        this.props.navigation.navigate('Signup');
    }

    onForgotPasswordPress = () => {
        this.props.navigation.navigate('Forgot');
    }

    render() {
        return (
            <View style={{paddingTop:50, alignItems:"center"}}>

                <Text h1>Not less</Text>
                <Text h2>But Better</Text>

                <Image
                source={require('./../../assets/images/placeholder.png')}
                />
                
                {/*
                <Text>Login</Text> 

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({email: text}) }}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <View style={{paddingTop:10}} />

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({password: text}) }}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                */}

                <Button title="Create An Account" onPress={this.onCreateAccountPress} />
                
                <Button title="I Have An Account" onPress={this.onLoginPress} />
                
                {/*
                <Button title="Forgot Password..." onPress={this.onForgotPasswordPress} />
                */}
            </View>
        );
    }
}

const styles = StyleSheet.create({

});