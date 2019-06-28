import { Alert, StatusBar, Image } from 'react-native';
import React from 'react';

import { Button, Icon } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';


export default class WithCTA extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        email: "",
        password: "",
        username: "",
    };
  }

  onCreateAccountPress = () => {
    this.props.navigation.navigate('T1');
  }

  render() {
    return (

    <Onboarding
    showDone={false}
    onSkip={() => Alert.alert('Skipped')}
    pages={[
      {
        title: 'Hey!',
        subtitle: 'Welcome to $App!',
        backgroundColor: '#003c8f',
        image: <Image source={require('./../../assets/images/placeholder.png')} />,
      },
      {
        title: 'Send Messages',
        subtitle: 'You can reach everybody with us',
        backgroundColor: '#5e92f3',
        image: <Image source={require('./../../assets/images/placeholder.png')} />,
      },
      {
        title: 'Get Notified',
        subtitle: 'We will send you notification as soon as something happened',
        backgroundColor: '#1565c0',
        image: <Image source={require('./../../assets/images/placeholder.png')} />,
      },
      {
        title: "That's Enough",
        subtitle: (
          <Button
            title={'Get Started'}
            containerViewStyle={{ marginTop: 20 }}
            backgroundColor={'white'}
            borderRadius={5}
            textStyle={{ color: '#003c8f' }}
            onPress={ this.onCreateAccountPress }
          />
        ),
        backgroundColor: '#003c8f',
        image: <Image source={require('./../../assets/images/placeholder.png')} />,
      },
    ]}
  />

    );
  }
}