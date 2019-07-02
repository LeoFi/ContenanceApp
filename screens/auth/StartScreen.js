
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import { PrimaryButton, SecondaryButton } from './../../components/AppComponents';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class StartScreen extends React.Component {

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

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.logo_top}>Not less</Text>
                <Text style={styles.logo_bottom}>But Better</Text>

                <Image source={require('./../../assets/images/placeholder.png')} />

                <View style={styles.bottom}>
                    <PrimaryButton
                        label='Access Your Account'
                        isBottom={true}
                        onPress={() => {
                            this.props.navigation.navigate('AccountAccess');
                        }} />

                    {/* <SecondaryButton
                        label='I Have An Account'
                        isBottom={true}
                        onPress={() => {
                            this.props.navigation.navigate('Login');
                        }} /> */}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
    },
    bottom: {
        flex: 1,
        alignSelf: "stretch",
        justifyContent: 'flex-end',
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
});