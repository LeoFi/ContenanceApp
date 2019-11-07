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

import { Audio } from "expo-av";

export default class Exercice_20_2 extends React.Component {
  constructor(props) {
    super(props);
    this.playbackInstance = null;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;

    this.state = {
      progressPercentageWidth: 0,
      playbackInstancePosition: null,
      playbackInstanceDuration: null,
      result: null,
      shouldPlay: false,
      isPlaying: false,
      isLoading: true,
      show_button: false,
      coutdown_running: false
    };
  }

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false
    });

    this._loadNewPlaybackInstance(false);
  }

  componentWillUnmount() {
    this.playbackInstance.unloadAsync();
  }

  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }

    const initialStatus = {
      shouldPlay: playing
    };

    const source = require("../../../assets/sounds/Alarm_5min.mp3");
    //const source = require("../../../assets/sounds/ExploringValues_DAY_9.mp3");
    

    try {
      const { sound, status } = await Audio.Sound.createAsync(
        source,
        initialStatus,
        this._onPlaybackStatusUpdate
      );
      this.playbackInstance = sound;
      this._updateScreenForLoading(false);
      console.log("IT'S WORKING");
    } catch (e) {
      console.log("Problem creating sound object: ", e);
    }
  }

  _updateScreenForLoading(isLoading) {
    if (isLoading) {
      this.setState({
        isPlaying: false,
        playbackInstanceDuration: null,
        playbackInstancePosition: null,
        isLoading: true
      });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  _onPlaybackStatusUpdate = status => {
    if (!status.isLoaded) {
      // Update your UI for the unloaded state
      if (status.error) {
        console.log(
          `Encountered a fatal error during playback: ${status.error}`
        );
        // Send Expo team the error on Slack or the forums so we can help you debug!
      }
    } else {
      if (status.isLoaded) {
        this.setState({
          playbackInstancePosition: status.positionMillis,
          playbackInstanceDuration: status.durationMillis,
          result: status.positionMillis / status.durationMillis,
          shouldPlay: status.shouldPlay,
          isPlaying: status.isPlaying
        });
        if (status.didJustFinish) {
          this.playbackInstance.unloadAsync();
          this.setState({
            isPlaying: "Done"
          });
        }
      } else {
        if (status.error) {
          console.log(`FATAL PLAYER ERROR: ${status.error}`);
        }
      }
    }
  };

  handler = () => {
    this.setState({ show_button: true });
  };

  onPress = () => {
    this.playbackInstance.playAsync();
            this.setState({coutdown_running: true})
  };

  unload = () => {
    this.playbackInstance.unloadAsync();
                this.props.navigation.navigate("Exercice_20_4");
  };

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
                onFinish={this.handler}
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
              {this.state.isLoading ? (
              <Text style={styles.intro_text_center}>
                Wait for a few seconds while we're getting your screen.
              </Text>
            ) : !this.state.show_button ? (
              <Text style={styles.intro_text_center}>
                Enjoy daddeln!{"\n"}
                {"\n"}We’ll let you know when it’s time to come back.{"\n"}
                {"\n"}
                <Text style={styles.intro_text_center_red}>Make sure your sound volume is up.</Text>
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
              onPress={this.unload}
            />
          </View>
        ) : null}

        {!this.state.coutdown_running ? (
        <View style={styles.bottom_button}>
        <PrimaryButton
          label="START AND ENJOY"
          onPress={this.onPress}
          disabled={this.state.isLoading}
        />
      </View>
      ) : null}
      </View>
    );
  }
}
