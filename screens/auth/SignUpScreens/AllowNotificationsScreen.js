
import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../../components/AppComponents';
import * as firebase from 'firebase';
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import { styles } from './style'

export default class AllowNotificationsScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.registerForPushNotifications();
    }

    registerForPushNotifications = async () => {
        const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = status;

        if (status !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
            debugger;
        }

        if (finalStatus !== 'granted') { return; }

        let token = await Notifications.getExpoPushTokenAsync();
        //console.log(token)

        let uid = firebase.auth.currentUser.uid;
        console.log(uid)
        firebase.database.ref("users").child(uid).update({
            expoPushToken: token
        })
    }


    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.header}>Allow notifications</Text>

                <Text style={styles.text}>{'\n'}Some exercises will require in-app notifications. You’ll only be notified while doing the exercise.{'\n'}{'\n'}Allow notifications to do these exercises.</Text>

                <View style={styles.bottom}>
                    <PrimaryButton
                        label='Next'
                        isBottom={true}
                        onPress={() => {
                            this.props.navigation.navigate('SetReminders');
                          }}
                        disabled={false}
                    />
                </View>
            </View>

        );
    }
}