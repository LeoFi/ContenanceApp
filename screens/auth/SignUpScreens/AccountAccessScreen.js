
import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Button, Alert, Switch } from 'react-native';
import { PrimaryButton, SecondaryButton, SwitchButton, LinkText } from '../../../components/AppComponents';
import { styles } from './style'
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { setFavoriteAnimal, checkCode, watchcheckCode, watchPersonData } from '../../../redux/app-redux';

const mapStateToProps = (state) => {
    return {
        accessCode: state.accessCode,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkCode: () => { dispatch(checkCode()) },
        watchcheckCode: () => { dispatch(watchcheckCode()) },
    };
}

class AccountAccessScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            accessCode: '',
            acceptedAgreement: false,
        }
        this.props.watchcheckCode();


        // firebase.database().ref('users/0003').set({name: 'Darya Sudas'}).then(() => {
        //     console.log("INSERTED");
        //     //console.log(firebase.auth().currentUser.uid)
        // }).catch((error) => {
        //     console.log(error);
        // // })

    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }

    onSetFavoriteAnimalPress = () => {
        this.props.setFavoriteAnimal(this.state.favoriteAnimal);
    }

    onaccessCode = () => {
        this.props.checkCode(this.state.accessCode);
        console.log('onaccessCode');
    }

    onLoginPress = () => {
        const { accessCode } = this.state;
        window.firebase = firebase
        firebase.database()
            .ref('codes')
            .child(accessCode)
            .once('value', snapshot => {
                if (snapshot.exists() && snapshot.val() === 'TAKEN') {
                    
                    snapshot.ref.set('TAKEN')
                    firebase.auth().signInAnonymously()
                    this.props.navigation.navigate('IntroOnboarding');
                }
                else {
                    Alert.alert("The code you're entering is not available")
                }
            });
    }

    render() {

        return (

            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="15" style={styles.keyboard_view}>

                    <Text style={styles.header}>Access Your Account</Text>

                    <Text style={styles.text}>{'\n'}Type here the code that was send to you.</Text>

                    <TextInput style={styles.usernameInput}
                        value={this.state.accessCode}
                        onChangeText={accessCode => this.setState({ accessCode })}
                        placeholder="Enter Code"
                        placeholderTextColor="rgba(44, 59, 81, 0.3)"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <LinkText
                        style={styles.link_text}
                        textLabel="Accept "
                        linkLabel="security agreement"
                        linkOnPress={() => {
                            this.props.navigation.navigate('UP_Second');
                        }}/>

                    <Switch
                        onValueChange={acceptedAgreement => this.setState({ acceptedAgreement })}
                        enabled={this.state.acceptedAgreement}
                        value={this.state.acceptedAgreement}>
                    </Switch>


                    <View style={styles.center}>

                        {/* <SwitchButton
                            label='Sign Up'
                            textLabel="Accept "
                            linkLabel="security agreement"
                            isBottom={true}
                            onPress={this.onLoginPress}
                            linkOnPress={() => {
                                this.props.navigation.navigate('UP_Second');
                            }}
                        /> */}


                        <PrimaryButton
                            label='Sign Up'
                            isBottom={true}
                            onPress={this.onLoginPress}
                            disabled={!this.state.acceptedAgreement || !this.state.accessCode}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountAccessScreen);