
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../../components/AppComponents';
import { styles } from './style'
import ProgressBar from '../../../components/AppComponents/ProgressBar';


export default class Exercice_1_Intro extends React.Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#F4F1DE',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth:0,
        },
        headerTitle: <ProgressBar />,
        headerTintColor: '#2C3B51',

    };


    state = {
        password: "",
    };


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.scroll}
                    onPress={() => {
                        this.props.navigation.navigate('Exercice_1_1');
                    }}>

                    <Image style={styles.image} source={require('../../../assets/images/placeholder.png')} />
                    <Text style={styles.intro_header}>Understand</Text>
                    <Text style={styles.intro_text}>{'\n'}Welcome the the wide ocean!{'\n'}This is how being on the smartphone can feel like with all its’ great opportunities. But sometimes, it’s hard to navigate There are impulse waves pulling you underwater when you’re hit by them.{'\n'}Leo explores how being in the digital ocean feels.</Text>
                    <Text style={styles.intro_text_background_color}>This module is all about observing yourself while you’re on the smartphone.  No judgements, no changes. Just observe yourself in the wide, digital ocean.</Text>
                    <Text style={styles.tap_text}>TAP ANYWHERE TO CONTINUE.</Text>
                </TouchableOpacity>

            </View>
        );
    }
}