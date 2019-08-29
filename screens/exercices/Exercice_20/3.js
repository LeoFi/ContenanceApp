import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import CountDown from "react-native-countdown-component";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_20_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show_button: false,
      coutdown_running: false
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden />
        <ScrollView>
          <View>
            <View style={styles.container_scroll}>
              <CountDown
              running={this.state.coutdown_running}
                until={300}
                onFinish={() => this.setState({ show_button: true })}
                timeToShow={["M", "S"]}
                timeLabels={{ d: null, h: null, m: null, s: null }}
                digitStyle={{ backgroundColor: "unset" }}
                digitTxtStyle={{
                  fontFamily: "roboto-black",
                  color: "#2C3B51",
                  fontSize: 50
                }}
                separatorStyle={{
                  fontFamily: "roboto-black",
                  color: "#2C3B51",
                  fontSize: 50
                }}
                showSeparator={true}
                size={30}
              />
              {!this.state.show_button ? (
                <Text style={styles.intro_text_center}>
                  We’ll let you know when it’s time to come back.
                </Text>
              ) : null}
              {this.state.show_button ? (
                <>
                  <Text style={styles.intro_text_center}>
                    Time is up. Continue the exercise.
                  </Text>
                </>
              ) : null}
            </View>
          </View>
        </ScrollView>
        {this.state.show_button ? (
          <View style={styles.bottom_button}>
            <PrimaryButton
              label="Continue"
              onPress={() => {
                this.props.navigation.navigate("Exercice_20_4");
              }}
            />
          </View>
        ) : null}

        {!this.state.coutdown_running ? (
        <View style={styles.bottom_button}>
        <PrimaryButton
          label="START AND ENJOY"
          onPress={() => {
            this.setState({coutdown_running: true})
          }}
        />
      </View>
      ) : null}
      </View>
    );
  }
}
