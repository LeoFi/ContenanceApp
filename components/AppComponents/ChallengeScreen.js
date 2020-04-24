import React, { PureComponent } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  Modal
} from "react-native";
import PrimaryButton from "./../AppComponents/PrimaryButton";
import LinkText from "./../AppComponents/LinkText";
import { Svg, Path } from "react-native-svg";

import {
    updateState_Ex1,
    updateState_Ex2,
    updateState_Ex3,
    updateState_Ex4,
    updateState_Ex5,
    updateState_Ex6,
    updateState_Ex7,
    updateState_Ex8,
    updateState_Ex9,
    updateState_Ex10,
    updateState_Ex11,
    updateState_Ex12,
    updateState_Ex13,
    updateState_Ex14,
    updateState_Ex15,
    updateState_Ex16,
    updateState_Ex17,
    updateState_Ex18,
    updateState_Ex19,
    updateState_Ex20
  } from "./../../redux-persist/redux/exercices"

export default class ChallengeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }

  calc() {
    this.props.callback();
  }

  render() {
    const popUpProps = {
      content: this.props.content,
      backgroundColor: this.props.backgroundColor,
      isCta: this.props.isCta,
      isVisible: this.props.isVisible,
      callback: this.props.callback,
      function: this.props.function
    };

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={popUpProps.isVisible}
        onRequestClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        <View
          style={{
            padding: 30,
            flexDirection: "column",
            backgroundColor: popUpProps.backgroundColor,
            height: Dimensions.get("window").height,
            justifyContent: "space-between",
            paddingBottom: 30,
            top: 50,
            borderRadius: 10
          }}
        >
          <View>
            <TouchableOpacity onPress={() => this.calc()}>
              <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.5 19L11.1625 17.3375L4.5125 10.6875L19 10.6875L19 8.3125L4.5125 8.3125L11.1625 1.6625L9.5 -8.30516e-07L8.30516e-07 9.5L9.5 19Z"
                  fill="#2C3B51"
                />
              </Svg>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "space-between"
              }}
            >
              <Text
                style={{
                  color: "#2C3B51",
                  fontSize: 24,
                  lineHeight: 28,
                  textAlign: "center",
                  fontFamily: "roboto-black",
                  paddingBottom: 25,
                  paddingTop: 30
                }}
              >
                The Challenge {"\n"}
                {"\n"}
                <Text
                  style={{
                    color: "#2C3B51",
                    fontSize: 19,
                    lineHeight: 25,
                    textAlign: "center",
                    fontFamily: "roboto-regular"
                  }}
                >
                  {popUpProps.content}
                </Text>
              </Text>
            </View>
          </View>
          {popUpProps.isCta ? (
            <View>
              <PrimaryButton
                label="I completed the Challenge"
                onPress={popUpProps.function}
              />
              <LinkText
                textLabel=""
                linkLabel="NOT YET"
                linkOnPress={() => {
                  this.calc();
                }}
              />
              <View style={{ paddingBottom: 60 }} />
            </View>
          ) : null}
        </View>
      </Modal>
    );
  }
}
