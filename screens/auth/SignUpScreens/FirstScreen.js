
import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { PrimaryButton, SecondaryButton, SwitchButton } from './../../../components/AppComponents';
import { styles } from './style'
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { setFavoriteAnimal, checkCode, watchcheckCode, watchPersonData } from './../../../redux/app-redux';

const mapStateToProps = (state) => {
    return {
        isCodeTrue: state.isCodeTrue,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkCode: (text) => { dispatch(checkCode(text)) },
        watchcheckCode: () => { dispatch(watchcheckCode()) },
    };
}

class FirstScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isCodeTrue: this.props.isCodeTrue,
        }
        this.props.watchcheckCode();


        // firebase.database().ref('users/0003').set({
        //     name: 'Darya Sudas',
        //     age: 27,
        // }).then(() => {
        //     console.log("INSERTED");
        //     //console.log(firebase.auth().currentUser.uid)
        // }).catch((error) => {
        //     console.log(error);
        // // })

        // firebase.database().ref("codes").orderByChild("ID").equalTo("000001").once("value", snapshot => {
        //     if (snapshot.exists()) {
        //         //const userData = snapshot.val();
        //         //console.log("exists!", userData);
        //         console.log("exists!");
        //     }
        //     else {
        //         console.log(snapshot);
        //     }
        // });

        // firebase.database().ref(`codes/000000001`).once("value", snapshot => {
        //     if (snapshot.exists() && ) {
        //         console.log("THE CODE EXISTS");
        //         // const email = snapshot.val();
        //         firebase.database().ref("codes/000000001").orderByChild("isTaken").equalTo(false).once("value", snapshot => {
        //             if (snapshot.exists()) {
        //                 console.log("AND AVAILABLE");
        //                 // const email = snapshot.val();
        //                 firebase.database().ref('codes/000000001').set({isTaken: true})
        //             }
        //             else {
        //                 console.log("NOT AVAILABLE");
        //             }
        //         });
        //     }
        //     else {
        //         console.log("THE CODE DOESN'T EXISTS");
        //     }
        // });

    }

    onSetFavoriteAnimalPress = () => {
        this.props.setFavoriteAnimal(this.state.favoriteAnimal);
    }

    onIsCodeTrue = () => {
        this.props.checkCode(this.state.isCodeTrue);
    }

    render() {

        return (

            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="15" style={styles.keyboard_view}>

                    <Text style={styles.header}>Create an Account</Text>
                    <Text style={styles.text}>{'\n'}Create an account to start your journey.</Text>

                    <View style={styles.center}>
                        <TextInput style={styles.usernameInput}
                            value={this.state.isCodeTrue}
                            onChangeText={(text) => { this.setState({ isCodeTrue: text }) }}
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
                            onPress={this.onIsCodeTrue}
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

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);