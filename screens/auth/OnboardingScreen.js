import { StyleSheet, Alert, StatusBar, Image, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';


export default class WithCTA extends React.Component {

  static navigationOptions = {
    header: null,
  };

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
        title: 'Hi, I’m Leo.',
        subtitle: 'And I’m going to be your companion on this journey, and also help you get started. How do you like to be called?',
        backgroundColor: '#F4F1DE',
        image: <Image source={require('./../../assets/images/placeholder.png')} />,
      },
      {
        title: '',
        subtitle: 'You can probably relate to my situation, {username}: I love my smartphone. It opens up a whole new world right at my fingertips, just like a big ocean full of great possibilities.',
        backgroundColor: '#F4F1DE',
        image: <Image source={require('./../../assets/images/placeholder.png')} />,
      },
      {
        title: '',
        subtitle: 'But the ocean is not calm. There are lots of stormy waves of impulses that pull you underwater. Sometimes, I feel like almost drowning. And I’m not alone: many people feel that way.',
        backgroundColor: '#F4F1DE',
        image: <Image source={require('./../../assets/images/placeholder.png')} />,
      },
      {
        title: 'This program is about mastering the waves.',
        subtitle: (
          <View style={{flex: 1}}>
            <Text>In 21 days, you will learn how to develop a healthy relationship to your smartphone. One exercise per day. No more feelings of drowning.</Text>
            <TouchableOpacity
              style={styles.button_primary}
              onPress={this.onCreateAccountPress}
            >
              <Text style={styles.button_text_primary}>Next</Text>
             </TouchableOpacity>
          </View>
        ),
        backgroundColor: '#F4F1DE',
        image: <Image source={require('./../../assets/images/placeholder.png')} />,
      },
    ]}
  />

    );
  }
}

const styles = StyleSheet.create({
  button_primary: {
      backgroundColor: '#2C3B51',
      borderRadius: 99,
      overflow: 'hidden',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'stretch',
      marginBottom:15,
  },
  button_secondary: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderRadius: 99,
      overflow: 'hidden',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'stretch',
      marginBottom:15,
  },
  button_text_primary: {
      color: '#F4F1DE',
      fontSize: 17,
      textAlign:'center',
      fontFamily: 'roboto-black',
      textTransform: 'uppercase',
      letterSpacing: 2,
  },
  button_text_secondary: {
      color: '#2C3B51',
      fontSize: 17,
      textAlign:'center',
      fontFamily: 'roboto-black',
      textTransform: 'uppercase',
      letterSpacing: 2,
  },
});