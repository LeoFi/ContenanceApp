import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Linking, Alert, } from 'react-native';
import { TestComponent, PhoneButton } from './../components/AppComponents';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { setFavoriteAnimal, watchPersonData } from './../redux/app-redux';

const mapStateToProps = (state) => {
  return {
    favoriteAnimal: state.favoriteAnimal,
    personData: state.personData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    setFavoriteAnimal: (text) => { dispatch(setFavoriteAnimal(text)) },
    watchPersonData: () => { dispatch(watchPersonData()) },
  };
}

class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      favoriteAnimal: this.props.favoriteAnimal,
    }

    this.props.watchPersonData();
  }

  // Occurs when signout is pressed...
  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  onSetFavoriteAnimalPress = () => {
    this.props.setFavoriteAnimal(this.state.favoriteAnimal);
  }
  
  render() {
    return (
      <ScrollView style={{flex: 1, flexDirection: "column", paddingVertical: 50, paddingHorizontal: 10,}}>
        <Text>THIS IS THE HOME PAGE</Text>

        <Text>{this.props.favoriteAnimal}</Text>

        <TextInput style={{borderWidth:1, width: 200, height: 40}}
          value={this.state.favoriteAnimal}
          onChangeText={(text) => { this.setState({favoriteAnimal: text}) }}
        />
        <Button title="Set Favorite Animal" onPress={this.onSetFavoriteAnimalPress} />
        
        <Button title="Sign out" onPress={this.onSignoutPress} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: { color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20, },
  textInput: { borderWidth:1, borderColor:"gray", marginVertical: 20, padding:10, height:40, alignSelf: "stretch", fontSize: 18, },
});

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);