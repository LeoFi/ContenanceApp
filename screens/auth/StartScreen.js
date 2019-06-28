
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };
      
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
            <View style={styles.view}>

                <Text style={styles.logo_top}>Not less</Text>
                <Text style={styles.logo_bottom}>But Better</Text>

                <Image source={require('./../../assets/images/placeholder.png')} />
                
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

                <TouchableOpacity
                    style={styles.button_primary}
                    onPress={this.onCreateAccountPress}
                >
                    <Text style={styles.button_text_primary}>Create An Account</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button_secondary}
                    onPress={this.onLoginPress}
                >
                    <Text style={styles.button_text_secondary}>I Have An Account</Text>
                </TouchableOpacity>
                
                {/*
                <Button title="Forgot Password..." onPress={this.onForgotPasswordPress} />
                */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        paddingTop:50,
        paddingLeft:30,
        paddingRight:30,
        alignItems:"center",
        flex: 1
    },
    logo_top: {
        fontFamily: 'heebo-thin',
        textTransform: 'uppercase',
        fontSize: 47,
        marginBottom: -13,
        color: '#2C3B51',
    },
    logo_bottom: {
        fontFamily: 'heebo-black',
        textTransform: 'uppercase',
        fontSize: 35,
        color: '#2C3B51',
    },
    button_primary: {
        backgroundColor: '#2C3B51',
        borderRadius: 99,
        overflow: 'hidden',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginBottom:15,
    },
    button_secondary: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 99,
        overflow: 'hidden',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginBottom:15,
    },
    button_text_primary: {
        color: '#F4F1DE',
        fontSize: 17,
        textAlign:'center',
        fontFamily: 'roboto-black',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    button_text_secondary: {
        color: '#2C3B51',
        fontSize: 17,
        textAlign:'center',
        fontFamily: 'roboto-black',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
});