
import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Button, Image } from 'react-native';
import { PrimaryButton, SecondaryButton, SwitchButton } from '../../../components/AppComponents';
import { styles } from './style'

export default class IntroOnboardingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (

            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="15" style={styles.keyboard_view}>

                    <Image source={require('./../../../assets/images/placeholder_background.png')} />
                    <Text style={styles.header}>Hi, I’m Leo.</Text>
                    <Text style={styles.text}>{'\n'}And I’m going to be your companion on this journey. How do you like to be called?</Text>


                    <TextInput style={styles.usernameInput}
                        value={this.state.isCodeTrue}
                        //onChangeText={(text) => { this.setState({ isCodeTrue: text }) }}
                        onChangeText={isCodeTrue => this.setState({ isCodeTrue })}
                        placeholder="Your Nickname"
                        placeholderTextColor="rgba(44, 59, 81, 0.3)"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <View style={styles.center}>

                        <PrimaryButton label='Sign Up' onPress={() => {
                            this.props.navigation.navigate('Signup_Second');
                        }} />
                    </View>

                </KeyboardAvoidingView>
            </View>
        );
    }
}