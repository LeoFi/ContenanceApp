import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Platform,
  Slider,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import * as Progress from "react-native-progress";
import { styles } from "./style";

import { Audio } from "expo-av";

export default class Exercice_4_1 extends Component {
  constructor(props) {
    super(props);
    this.playbackInstance = null;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.state = {
      progressPercentageWidth: 0,
      playbackInstancePosition: null,
      playbackInstanceDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isLoading: true
    };
  }

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false
    });

    this._loadNewPlaybackInstance(false);
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

    // const source = require("../../../assets/sounds/KeepBreathe_DAY_4.mp3");
    const source = require("../../../assets/sounds/try.mp3");
    

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

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  measureProgressBar(evt) {
    progressBarWidth = evt.nativeEvent.layout.width;
  }

  goToTime(evt) {
    const progress = evt.nativeEvent.locationX / progressBarWidth;
    const time = this.state.playbackInstanceDuration * progress;
    this.state.player.setPositionAsync(time);
    // this.setState({ progressPercentageWidth: progress });
  }

  _onPlayPausePressed = () => {
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        this.playbackInstance.pauseAsync();
      } else {
        this.playbackInstance.playAsync();
      }
    }
  };

  _onBackPressed = () => {
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        //this.playbackInstance.pauseAsync();
        this.playbackInstance.setInstancePosition(-15000);
        //console.log(this.this.playbackInstancePosition())
      }
    }
  };

  _onForwardPressed = () => {
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        //this.playbackInstance.pauseAsync();
        this.playbackInstance.setInstancePosition(150000);
      }
    }
  };

  renderPlayerIcon() {
    if (this.state.isPlaying === true){
      return <Image source={require("../../../assets/images/pause.png")} />;
    } else if (this.state.isPlaying === false) {
      return <Image source={require("../../../assets/images/play.png")} />;
    } else if (this.state.isPlaying === "Done") {
      return <Image source={require("../../../assets/images/play_done.png")} />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.state.isPlaying === "Done" ? (this.props.navigation.navigate("Exercice_8_Aha_1")) : (null)
          }}
          //{this.renderPlayerIcon()}
        >
          <View>
            <Text style={styles.sub_header_left}>Mindful Social Media Use</Text>
            <TouchableOpacity
              onPress={this._onBackPressed}
              //disabled={this.state.isLoading}
            >
              <Image
                source={require("../../../assets/images/pause.png")}
                //style={styles.image_background}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this._onPlayPausePressed}
              disabled={this.state.isLoading}
            >
              <View style={styles.center}>
                
                {this.renderPlayerIcon()}

              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._onForwardPressed}
              //disabled={this.state.isLoading}
            >
              <Image
                source={require("../../../assets/images/pause.png")}
                //style={styles.image_background}
              />
            </TouchableOpacity>
            <Progress.Bar
              progress={0.8}
              borderWidth={0}
              borderRadius={0}
              width={null}
              height={10}
              color={"rgba(44, 59, 81, 1)"}
              unfilledColor={"rgba(255, 255, 255, 1)"}
              animated={true}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
