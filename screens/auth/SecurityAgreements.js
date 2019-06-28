
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class SecurityAgreements extends React.Component {

    static navigationOptions = {
        header: null,
    };
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onBackToLoginPress = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={{paddingTop:50, alignItems:"center"}}>

                <Text h1>This is the T1 Questionnaire</Text>
                
                <Button title="Back to Login" onPress={this.onBackToLoginPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});