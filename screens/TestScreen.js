import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { PrimaryButton, SecondaryButton } from './../components/AppComponents';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { setFavoriteAnimal, checkCode, watchPersonData } from './../redux/app-redux';

const mapStateToProps = (state) => {
  return {
    favoriteAnimal: state.favoriteAnimal,
    isCodeTrue: state.isCodeTrue,
    personData: state.personData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteAnimal: (text) => { dispatch(setFavoriteAnimal(text)) },
    checkCode: (text) => { dispatch(checkCode(text)) },
    watchPersonData: () => { dispatch(watchPersonData()) },
  };
}


class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      favoriteAnimal: this.props.favoriteAnimal,
      isCodeTrue: this.props.isCodeTrue,
    }
    this.props.watchPersonData();
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  onSetFavoriteAnimalPress = () => {
    this.props.setFavoriteAnimal(this.state.favoriteAnimal);
  }

  onIsCodeTrue = () => {
    this.props.checkCode(this.state.isCodeTrue);
  }

  onCreateAccountPress = () => {
    this.props.navigation.navigate('T1');
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingTop: 20 }}>


          <PrimaryButton label='Exercice 1' onPress={() => {
            this.props.navigation.navigate('Intro_Phase_Observe');
          }} />

          <Button title="Signout" onPress={this.onSignoutPress} />


          <Text>{this.props.favoriteAnimal}</Text>
          <TextInput style={{ borderWidth: 1, width: 200, height: 40 }}
            value={this.state.favoriteAnimal}
            onChangeText={(text) => { this.setState({ favoriteAnimal: text }) }}
          />
          <Button title="Set Favorite Animal" onPress={this.onSetFavoriteAnimalPress} />




          {/* <Text>{this.props.personData.firstName}</Text>
          <Text>{this.props.personData.lastName}</Text> */}

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);