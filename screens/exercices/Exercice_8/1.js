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

import { Svg, Path, Rect, Circle } from "react-native-svg";

import { Audio } from "expo-av";

export default class Exercice_8_1 extends Component {
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
      isLoading: true
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

  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }

    const initialStatus = {
      shouldPlay: playing
    };

    const source = require("../../../assets/sounds/MindfulSocialMediaUse_DAY_8.mp3");
    //const source = require("../../../assets/sounds/try.mp3");

    try {
      const { sound, status } = await Audio.Sound.createAsync(
        source,
        initialStatus,
        this._onPlaybackStatusUpdate
      );
      this.playbackInstance = sound;
      this._updateScreenForLoading(false);
      console.log("IT'S WORKING" + status.durationMillis);
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

  _getPlaybackTimestampPosition() {
    if (
      //this.sound != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return `${this._getMMSSFromMillis(this.state.playbackInstancePosition)}`;
    }
    return "";
  }

  _getPlaybackTimestampDuration() {
    if (
      //this.sound != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return `${this._getMMSSFromMillis(this.state.playbackInstanceDuration)}`;
    }
    return "";
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
        this.playbackInstance.setPositionAsync(
          this.state.playbackInstancePosition - 15000
        );
        //console.log(this.this.playbackInstancePosition())
      }
    }
  };

  _onForwardPressed = () => {
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        //this.playbackInstance.pauseAsync();
        this.playbackInstance.setPositionAsync(
          this.state.playbackInstancePosition + 15000
        );
      }
    }
  };

  renderPlayerIcon() {
    if (this.state.isPlaying === true) {
      return (
        <Svg width="79" height="79" viewBox="0 0 79 79" fill="none">
          <Path
            d="M79 39.5C79 61.3152 61.3152 79 39.5 79C17.6848 79 0 61.3152 0 39.5C0 17.6848 17.6848 0 39.5 0C61.3152 0 79 17.6848 79 39.5Z"
            fill="#F6B563"
          />
          <Rect x="30" y="29" width="6" height="23" rx="3" fill="white" />
          <Rect x="44" y="29" width="6" height="23" rx="3" fill="white" />
        </Svg>
      );
    } else if (this.state.isPlaying === false) {
      return (
        <Svg width="79" height="79" viewBox="0 0 79 79" fill="none">
          <Path
            d="M79 39.5C79 61.3152 61.3152 79 39.5 79C17.6848 79 0 61.3152 0 39.5C0 17.6848 17.6848 0 39.5 0C61.3152 0 79 17.6848 79 39.5Z"
            fill="#F6B563"
          />
          <Path
            d="M54.3767 39.1207C55.075 39.4989 55.075 40.5011 54.3767 40.8793L33.4763 52.2003C32.81 52.5613 32 52.0788 32 51.3211L32 28.6789C32 27.9212 32.81 27.4387 33.4763 27.7997L54.3767 39.1207Z"
            fill="white"
          />
        </Svg>
      );
    } else if (this.state.isPlaying === "Done") {
      return (
        <Svg width="79" height="79" viewBox="0 0 79 79" fill="none">
          <Circle
            cx="39.5"
            cy="39.5"
            r="37.5"
            fill="#F6B563"
            stroke="#F6B563"
            stroke-width="4"
          />
          <Circle cx="39.5" cy="39.5" r="35.5" fill="#F4F1DE" />
          <Path
            d="M51.5774 26.9885C52.8179 25.6705 54.8291 25.6705 56.0696 26.9885C57.3101 28.3065 57.3101 30.4435 56.0696 31.7615L37.0108 52.0115C35.7703 53.3295 33.7591 53.3295 32.5186 52.0115L21.9304 40.7615C20.6899 39.4435 20.6899 37.3065 21.9304 35.9885C23.1709 34.6705 25.1821 34.6705 26.4226 35.9885L34.7647 44.852L51.5774 26.9885Z"
            fill="#F6B563"
            stroke="#F6B563"
            stroke-width="0.3"
          />
        </Svg>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.state.isPlaying === "Done"
              ? this.props.navigation.navigate("Exercice_8_Aha_1")
              : null;
          }}
          //{this.renderPlayerIcon()}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.sub_header_audio}>Mindful Social Media Use</Text>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center"
                }}
              >
                <TouchableOpacity
                  onPress={this._onBackPressed}
                  style={{ alignSelf: "center"}}
                  disabled={this.state.isLoading || this.state.isPlaying === "Done"}
                >
                  <Svg width="43" height="45" viewBox="0 0 43 45" fill="none">
                    <Path
                      d="M33.6945 34.8249C35.097 33.282 36.1381 31.5947 36.8177 29.7525C37.493 27.9218 37.8047 25.9427 37.7582 23.8459C37.7115 21.7424 37.2519 19.7195 36.3783 17.7867C35.2581 15.3081 33.6377 13.2787 31.4954 11.6775C29.3654 10.085 26.9808 9.0999 24.3714 8.72094C21.7623 8.34182 19.1904 8.62198 16.7009 9.57815L15.158 6.16447L12.9301 12.3525L19.0259 14.7225L17.476 11.2932C19.117 10.6829 20.799 10.4144 22.5378 10.4696C24.2921 10.5254 25.9217 10.8737 27.4571 11.5126C28.9928 12.1514 30.3832 13.08 31.653 14.2907C32.9346 15.5125 33.9457 16.9338 34.6785 18.555C35.7001 20.8153 36.0905 23.1707 35.8485 25.5914C35.6052 28.0266 34.7857 30.2391 33.3921 32.2207C31.9988 34.202 30.1818 35.6993 27.941 36.7121C25.7001 37.7248 23.3598 38.1106 20.9365 37.8501C18.5282 37.591 16.326 36.74 14.3374 35.3136C12.3605 33.8955 10.8508 32.0459 9.82935 29.7859C8.9487 27.8374 8.55128 25.7644 8.63602 23.6047L6.72872 23.5844C6.67816 26.0667 7.15029 28.3875 8.12954 30.5542C9.0031 32.487 10.2174 34.1689 11.7654 35.5937C13.3086 37.0141 15.0027 38.0823 16.8362 38.7834C18.6697 39.4846 20.6223 39.8236 22.707 39.7909C24.7986 39.7575 26.8066 39.3085 28.723 38.4423C30.6391 37.5763 32.2878 36.3726 33.6945 34.8249Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M18.4821 30H17.2106V21.5713L14.6608 22.5078V21.3594L18.2838 19.999H18.4821V30ZM23.0482 25.0098L23.5541 20.0469H28.6537V21.2158H24.6273L24.3265 23.9297C24.8142 23.6426 25.3679 23.499 25.9877 23.499C26.8946 23.499 27.6146 23.7998 28.1478 24.4014C28.681 24.9984 28.9476 25.8073 28.9476 26.8281C28.9476 27.8535 28.6696 28.6624 28.1136 29.2549C27.5622 29.8428 26.7897 30.1367 25.7962 30.1367C24.9167 30.1367 24.1989 29.8929 23.6429 29.4053C23.0869 28.9176 22.7702 28.2432 22.6927 27.3818H23.889C23.9665 27.9515 24.1693 28.3822 24.4974 28.6738C24.8255 28.9609 25.2585 29.1045 25.7962 29.1045C26.3841 29.1045 26.8444 28.904 27.1771 28.5029C27.5143 28.1019 27.683 27.5482 27.683 26.8418C27.683 26.1764 27.5007 25.6432 27.1361 25.2422C26.7761 24.8366 26.2953 24.6338 25.6937 24.6338C25.1423 24.6338 24.7093 24.7546 24.3949 24.9961L24.0599 25.2695L23.0482 25.0098Z"
                      fill="#2C3B51"
                    />
                  </Svg>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this._onPlayPausePressed}
                  disabled={this.state.isLoading}
                  disabled={this.state.isLoading || this.state.isPlaying === "Done"}
                >
                  <View style={styles.center}>{this.renderPlayerIcon()}</View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this._onForwardPressed}
                  style={{ alignSelf: "center"}}
                  disabled={this.state.isLoading || this.state.isPlaying === "Done"}
                >
                  <Svg width="45" height="46" viewBox="0 0 45 46" fill="none">
                    <Path
                      d="M27.7612 10.2545C25.2333 9.16545 22.6027 8.75234 19.9172 8.99938C17.2311 9.24654 14.7646 10.1212 12.5257 11.6216C10.2992 13.113 8.57925 15.063 7.36533 17.497C6.41854 19.3955 5.89419 21.4051 5.79111 23.5171C5.68831 25.6227 5.94443 27.6321 6.59294 29.5182C7.23797 31.3929 8.2607 33.1488 9.6631 34.7768C11.0607 36.3995 12.7322 37.6837 14.6746 38.6524C16.6173 39.6213 18.6641 40.1914 20.8014 40.3316C22.9452 40.4722 24.9614 40.2269 26.8485 39.6201C28.7593 39.0053 30.5205 38.007 32.1405 36.658C33.7656 35.305 35.0549 33.6769 36.0017 31.7785C37.0628 29.6508 37.6079 27.342 37.6212 24.8442L35.6645 24.7669C35.6948 26.9422 35.2328 29.0057 34.2785 30.9191C33.1715 33.1389 31.5794 34.928 29.5025 36.2599C27.4378 37.5841 25.1523 38.3194 22.6755 38.4565C20.1835 38.5941 17.7935 38.0861 15.5219 36.9532C13.2504 35.8203 11.426 34.2225 10.049 32.1594C8.67172 30.0962 7.88034 27.8305 7.69617 25.3848C7.51022 22.9243 7.98136 20.5762 9.08841 18.3564C9.88242 16.7643 10.9615 15.3922 12.2955 14.2403C13.6415 13.0777 15.0875 12.2108 16.6793 11.6475C18.2707 11.084 19.9435 10.8326 21.7441 10.8665C23.5289 10.9001 25.2468 11.2561 26.9137 11.9537L25.2419 15.3061L31.5405 13.2669L29.4333 6.90174L27.7612 10.2545Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M18.4821 30H17.2106V21.5713L14.6608 22.5078V21.3594L18.2838 19.999H18.4821V30ZM23.0482 25.0098L23.5541 20.0469H28.6537V21.2158H24.6273L24.3265 23.9297C24.8142 23.6426 25.3679 23.499 25.9877 23.499C26.8946 23.499 27.6146 23.7998 28.1478 24.4014C28.681 24.9984 28.9476 25.8073 28.9476 26.8281C28.9476 27.8535 28.6696 28.6624 28.1136 29.2549C27.5622 29.8428 26.7897 30.1367 25.7962 30.1367C24.9167 30.1367 24.1989 29.8929 23.6429 29.4053C23.0869 28.9176 22.7702 28.2432 22.6927 27.3818H23.889C23.9665 27.9515 24.1693 28.3822 24.4974 28.6738C24.8255 28.9609 25.2585 29.1045 25.7962 29.1045C26.3841 29.1045 26.8444 28.904 27.1771 28.5029C27.5143 28.1019 27.683 27.5482 27.683 26.8418C27.683 26.1764 27.5007 25.6432 27.1361 25.2422C26.7761 24.8366 26.2953 24.6338 25.6937 24.6338C25.1423 24.6338 24.7093 24.7546 24.3949 24.9961L24.0599 25.2695L23.0482 25.0098Z"
                      fill="#2C3B51"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>

            {this.state.isPlaying === "Done" ? (
              <>
                <View style={styles.tap_pos_relative_exercice}>
                  <Text style={styles.tap_text}>TAP ANYWHERE TO CONTINUE</Text>
                </View>
              </>
            ) : (
              <>
                <Progress.Bar
                  progress={this.state.result}
                  borderWidth={0}
                  borderRadius={5}
                  width={null}
                  height={5}
                  color={"#2C3B51"}
                  unfilledColor={"#C2C2BB"}
                  animated={true}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 5
                  }}
                >
                  <Text>{this._getPlaybackTimestampPosition()}</Text>
                  <Text>{this._getPlaybackTimestampDuration()}</Text>
                </View>
              </>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
