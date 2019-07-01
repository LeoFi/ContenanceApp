
import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { PrimaryButton, SecondaryButton, SwitchButton } from './../../../components/AppComponents';
import { styles } from './style'
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { setFavoriteAnimal, watchPersonData } from './../../../redux/app-redux';


export default class FirstScreen extends React.Component {

    static navigationOptions = {
        header: null,
        currentUser: null,
    };

    constructor(props) {
        super(props);
        this.state = {
        }


        // firebase.database().ref('users/0003').set({
        //     name: 'Darya Sudas',
        //     age: 27,
        // }).then(() => {
        //     console.log("INSERTED");
        //     //console.log(firebase.auth().currentUser.uid)
        // }).catch((error) => {
        //     console.log(error);
        // })

        // firebase.database().ref("codes").orderByChild("ID").equalTo("000001").once("value", snapshot => {
        //     if (snapshot.exists()) {
        //         const userData = snapshot.val();
        //         //console.log("exists!", userData);
        //         //console.log(firebase.database().ref('codes'));
        //     }
        //     else {
        //         //console.log(snapshot);
        //     }
        // });


        // function writeUserData(userId, name, email, imageUrl) {
        //     firebase.database().ref('users/' + userId).set({
        //         username: name,
        //         email: email,
        //         profile_picture: imageUrl
        //     });
        // }
    }

    isCodeTrue = () => {
        firebase.database().ref().orderByChild("ID").equalTo("000002").once("value", function (snapshot) {
            // var personData = snapshot.val();
            // dispatch(setPersonData(personData));
            //console.log("exists!");
            if (snapshot.exists()) {
                console.log("exists!");
                this.props.navigation.navigate('Signup_Second');
            }
        }, function (error) {
            console.log(error);
        });
    }

    onSetFavoriteAnimalPress = () => {
        this.props.setFavoriteAnimal(this.state.favoriteAnimal);
    }

    render() {
        const { currentUser } = this.state

        return (

            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="15" style={styles.keyboard_view}>

                    <Text style={styles.header}>Create an Account</Text>
                    <Text style={styles.text}>{'\n'}Create an account to start your journey.</Text>

                    <View style={styles.center}>
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
                            textLabel="Accept "
                            linkLabel="security agreement"
                            isBottom={true}
                            onPress={this.isCodeTrue}
                            linkOnPress={() => {
                                this.props.navigation.navigate('UP_Second');
                            }}
                        />
                    </View>


                </KeyboardAvoidingView>
            </View>
        );
    }
}