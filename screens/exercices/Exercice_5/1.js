import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_5_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/pink_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset="15"
              style={styles.keyboard_view}
            >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                <Text style={styles.sub_header}>
                  In which three situations do you usually use the smartphone
                  without thinking about it?
                </Text>

                <View style={styles.middle}>
                  <GreyInputButton
                    label="In bed after waking up"
                    isBottom={false}
                    onPress={() =>
                      this.setState({
                        active1: !this.state.active1
                      })
                    }
                    isActive={this.state.active1}
                  />
                  <GreyInputButton
                    label="In bed before falling asleep"
                    isBottom={false}
                    onPress={() =>
                      this.setState({
                        active2: !this.state.active2
                      })
                    }
                    isActive={this.state.active2}
                  />
                  <GreyInputButton
                    label="In the kitchen while eating meal"
                    isBottom={false}
                    onPress={() =>
                      this.setState({
                        active3: !this.state.active3
                      })
                    }
                    isActive={this.state.active3}
                  />
                  <GreyInputButton
                    label="In the restaurant while eating a meal"
                    isBottom={false}
                    onPress={() =>
                      this.setState({
                        active4: !this.state.active4
                      })
                    }
                    isActive={this.state.active4}
                  />
                  <GreyInputButton
                    label="On public transport during the journey"
                    isBottom={false}
                    onPress={() =>
                      this.setState({
                        active5: !this.state.active5
                      })
                    }
                    isActive={this.state.active5}
                  />
                  <GreyInputButton
                    label="In the car while driving"
                    isBottom={false}
                    onPress={() =>
                      this.setState({
                        active6: !this.state.active6
                      })
                    }
                    isActive={this.state.active6}
                  />
                  <GreyInputButton
                    label="On the toilet"
                    isBottom={false}
                    onPress={() =>
                      this.setState({
                        active7: !this.state.active7
                      })
                    }
                    isActive={this.state.active7}
                  />
                  <GreyInputButton
                    label="When my friend goes to the bathroom"
                    isBottom={false}
                    onPress={() =>
                      this.setState({
                        active8: !this.state.active8
                      })
                    }
                    isActive={this.state.active8}
                  />
                  <GreyInputButton
                    label="During commercial breaks on TV"
                    isBottom={false}
                    onPress={() =>
                      this.setState({
                        active9: !this.state.active9
                      })
                    }
                    isActive={this.state.active9}
                  />
                  <GreyInputButton
                    label="During a meeting when you're bored"
                    isBottom={false}
                    onPress={() =>
                      this.setState({
                        active10: !this.state.active10
                      })
                    }
                    isActive={this.state.active10}
                  />
                  <TextInput
                    style={styles.text_input_button}
                    value={this.state.accessCode}
                    onChangeText={accessCode => this.setState({ accessCode })}
                    placeholder="Write a new one"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                <View style={styles.tap_pos_relative}>
                  <PrimaryButton
                    label="Continue"
                    disabled={!this.state.active1 }
                    onPress={() => {
                      this.props.navigation.navigate("Exercice_5_2");
                    }}
                  />
                </View>
              </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

{
  /* <View style={styles.middle}>
  <GreyInputButton label="Email" isBottom={false} />
  <GreyInputButton label="App Notifications" isBottom={true} />
</View>

<PrimaryButton
  label="Sign Up"
  onPress={() => {
    this.props.navigation.navigate("Exercice_1_2");
  }}
/> */
}
