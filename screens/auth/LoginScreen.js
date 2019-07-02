
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class AccountAccess extends React.Component {

    static navigationOptions = {
        header: null,
    };
    
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
        };
    }

    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    onForgotPasswordPress = () => {
        this.props.navigation.navigate('Forgot');
    }

    render() {
        return (
            <View style={{paddingTop:50, alignItems:"center"}}>

                <Text h1>Welcome Back!</Text>
                <Text h4>Happy to see you again!</Text>

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({email: text}) }}
                    placeholder="Username"
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
                
                <Button title="Login" onPress={this.onLoginPress} />
        
                <Button title="Forgot Password..." onPress={this.onForgotPasswordPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});