import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class ExerciseScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}><Text style={{ color: '#e93766', fontSize: 40 }}>ExerciseScreen</Text><ActivityIndicator color='#e93766' size="large" /></View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})