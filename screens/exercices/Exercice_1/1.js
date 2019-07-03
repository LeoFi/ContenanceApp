
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../../components/AppComponents';
import { styles } from './style';
import * as Progress from 'react-native-progress';

export default class Exercice_1_1 extends React.Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#F4F1DE',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth:0,
        },
        headerBackTitle: null,
        headerTitle: <Progress.Bar progress={0.1} borderWidth={0} width={250} color={'rgba(44, 59, 81, 1)'} unfilledColor={'rgba(255, 255, 255, 1)'}/>,
        headerTintColor: '#2C3B51',
    };
    state = {
        password: "",
    };


    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.header}>First Page of Exercice !</Text>
                <Text style={styles.text}>{'\n'}Create an account to start your journey.</Text>

                <TextInput style={styles.usernameInput}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                    placeholder="Enter Code"
                    placeholderTextColor="rgba(44, 59, 81, 0.3)"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <PrimaryButton label='Sign Up' onPress={() => {
                    this.props.navigation.navigate('Exercice_1_2');
                }} />

            </View>
        );
    }
}