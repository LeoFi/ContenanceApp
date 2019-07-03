import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button
} from "react-native";
import { PrimaryButton, SecondaryButton, ExerciceButton } from "./../components/AppComponents";
import * as firebase from "firebase";
import { connect } from "react-redux";
import { setNickname } from "./../redux/app-redux";

const mapStateToProps = state => {
  return {
    nickname: state.nickname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNickname: text => {
      dispatch(setNickname(text));
    }
  };
};

class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };

  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  // onSetFavoriteAnimalPress = () => {
  //   this.props.setFavoriteAnimal(this.state.favoriteAnimal);
  // }

  // onIsCodeTrue = () => {
  //   this.props.checkCode(this.state.isCodeTrue);
  // }

  // onCreateAccountPress = () => {
  //   this.props.navigation.navigate('T1');
  // }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1, paddingTop: 50, marginTop: 10 }}>
          <Image
            style={styles.center}
            source={require("./../assets/images/home_1.png")}
          />

          <Text style={styles.header_left}>
            Hey, {this.props.nickname}!
          </Text>

          <Text style={styles.text_left}>
            {"\n"}Continue with your next session.
          </Text>

          <ExerciceButton
            status={this.props.status}
            label="Day 1 - Contenance"
            isBottom={true}
            onPress={() => {
              this.props.navigation.navigate("Intro_Phase_Observe");
            }}
          />
          
          
          <Button title="Signout" onPress={this.onSignoutPress} />

{/* 
          <Text>{this.props.favoriteAnimal}</Text>
          <TextInput style={{ borderWidth: 1, width: 200, height: 40 }}
            value={this.state.favoriteAnimal}
            onChangeText={(text) => { this.setState({ favoriteAnimal: text }) }}
          />
          <Button title="Set Favorite Animal" onPress={this.onSetFavoriteAnimalPress} />




          Text>{this.props.personData.firstName}</Text>
          <Text>{this.props.personData.lastName}</Text> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch"
  },
  container_scroll: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignSelf: "stretch"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  middle: {
    justifyContent: "center",
    alignSelf: "stretch"
  },
  inline: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignSelf: "stretch",
    paddingTop: 20
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "stretch"
  },
  keyboard_view: {
    flex: 1
  },
  header: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 10
  },
  header_left: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "left",
    fontFamily: "roboto-black",
    paddingTop: 30,
    alignSelf: "stretch"
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular"
  },
  text_left: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    paddingBottom: 30,
  },
  text_scroll: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular"
  },
  codeInput: {
    marginTop: 43,
    alignSelf: "stretch",
    textAlign: "center",
    height: 40,
    fontSize: 19,
    borderBottomWidth: 2
  },
  usernameInput: {
    marginTop: 43,
    marginBottom: 43,
    alignSelf: "stretch",
    textAlign: "center",
    height: 40,
    fontSize: 19,
    borderBottomWidth: 2
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestScreen);
