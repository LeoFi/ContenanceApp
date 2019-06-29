import React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class FirstScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title="Tap Anywhere To Continue 1"
                    onPress={() => this.props.navigation.navigate('SecondScreen')}
                />
            </View>
        );
    }
}

class SecondScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button
                    title="Tap Anywhere To Continue 2"
                    onPress={() => this.props.navigation.navigate('ThirdScreen')}
                />
            </View>
        );
    }
}

class ThirdScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button
                    title="Tap Anywhere To Continue 3"
                    onPress={() => this.props.navigation.navigate('FourthScreen')}
                />
            </View>
        );
    }
}