
import React from 'react';
import { View, Text, TextInput, ScrollView, Alert } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../../components/AppComponents';
import * as firebase from 'firebase';
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import { styles } from './style'
import { connect } from "react-redux";

class AllowNotificationsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        //this.registerForPushNotifications();
    }

    // askNotification = () => {
    //     Alert.alert("Hey get notifications!")
    // }

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
        console.log(token)

        let uid = firebase.auth.currentUser.uid;
        console.log(uid)
        firebase.database.ref("users").child(this.props.user.UID).update({
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
                            this.registerForPushNotifications()
                            //this.askNotification
                          }}
                        //onPress={this.askNotification}
                        disabled={false}
                    />
                </View>
            </View>

        );
    }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AllowNotificationsScreen);
