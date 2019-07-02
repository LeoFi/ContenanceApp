
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
        checkCode: () => { dispatch(checkCode()) },
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
            isCodeTrue: '',
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





    }

    onSetFavoriteAnimalPress = () => {
        this.props.setFavoriteAnimal(this.state.favoriteAnimal);
    }

    onIsCodeTrue = () => {
        this.props.checkCode(this.state.isCodeTrue);
        console.log('onIsCodeTrue');
    }

    onLoginPress = () => {

        firebase.database().ref('codes').orderByChild("id").equalTo(this.state.isCodeTrue).on('child_added', snapshot => {

            if ( snapshot.exists()) {
                
                var codes = snapshot.val();
                var codeisTaken = codes.isTaken;

                if (codeisTaken === false) {

                    snapshot.ref.update({isTaken: true});
                    firebase.auth().signInAnonymously()

                    this.props.navigation.navigate('Onboarding');

                }
                else {
                    alert("The code you're entering is not available")
                }
            }
            else {
                alert("The code you're entering is not available")
            }
        });

        // firebase.auth().signInAnonymously()
        //     .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    render() {

        return (

            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="15" style={styles.keyboard_view}>

                    <Text style={styles.header}>Access Your Account</Text>
                    <Text style={styles.text}>{'\n'}Type here the code that was send to you.</Text>

                    <View style={styles.center}>
                        <TextInput style={styles.usernameInput}
                            value={this.state.isCodeTrue}
                            //onChangeText={(text) => { this.setState({ isCodeTrue: text }) }}
                            onChangeText={isCodeTrue => this.setState({ isCodeTrue })}
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
                            onPress={this.onLoginPress}
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