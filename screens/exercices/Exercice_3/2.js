import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackgroundComponent,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { DeckSwiper, Card, CardItem } from "native-base";
import { styles } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Svg, Path, Circle } from "react-native-svg";

const cards = [
  "Screen-Time Tracker to keep track of your time on your mobile phone",
  "Switch off notifications",
  "Use flight mode",
  "Install blocking apps",
  "Set use limits",
  "Define smartphone free times and locations",
  "Do a digital detox",
  "Buy an alarm clock"
];

export default class Exercice_3_2 extends React.Component {
  countLeft = 0;

  render() {
    return (
      <View style={styles.container_deck}>
        <Text style={styles.sub_header_deck}>
          What strategies have you tried out so far to improve your smartphone
          use?
        </Text>
        <View style={{ flex: 1 }}>
          <DeckSwiper
            looping={false}
            dataSource={cards}
            onSwipeLeft={this.countLeftTry}
            renderEmpty={this.renderEmpty}
            renderItem={item => (
              <Card
                style={{
                  height: 200,
                  backgroundColor: "#CAC0DE",
                  justifyContent: "center",
                  paddingLeft: 30,
                  paddingRight: 30,
                  justifyContent: "center",
                  width: Dimensions.get("window").width - 160,
                  alignSelf: "center",
                  zIndex: 2
                }}
              >
                <CardItem style={{ backgroundColor: "#CAC0DE" }}>
                  <Text style={styles.intro_text_center}>{item}</Text>
                </CardItem>
              </Card>
            )}
          />

          <View
            style={{
              top: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              zIndex: 1
            }}
          >
            <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <Circle
                cx="20"
                cy="20"
                r="19"
                stroke="#A28AD4"
                stroke-width="2"
              />
              <Path
                d="M24.7406 14.4393C25.2575 13.8536 26.0955 13.8536 26.6123 14.4393C27.1292 15.0251 27.1292 15.9749 26.6123 16.5607L18.6712 25.5607C18.1543 26.1464 17.3163 26.1464 16.7994 25.5607L12.3877 20.5607C11.8708 19.9749 11.8708 19.0251 12.3877 18.4393C12.9045 17.8536 13.7425 17.8536 14.2594 18.4393L17.7353 22.3787L24.7406 14.4393Z"
                fill="#A28AD4"
                stroke="#A28AD4"
                stroke-width="30"
              />
            </Svg>

            <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26 24.18L24.18 26L19.5 21.32L14.82 26L13 24.18L17.68 19.5L13 14.82L14.82 13L19.5 17.68L24.18 13L26 14.82L21.32 19.5L26 24.18Z"
                fill="#A28AD4"
              />
              <Circle
                cx="20"
                cy="20"
                r="19"
                stroke="#A28AD4"
                stroke-width="30"
              />
            </Svg>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={styles.tap_text_deck}>DRAG THE CARD LEFT OR RIGHT</Text>
        </View>
      </View>
    );
  }

  handleSubmit = () => {
    this.props.navigation.push("Exercice_3_2_More5");
  };

  countLeftTry = () => {
    this.countLeft += 1;
  };

  goToNext = () => {
    if (this.countLeft > 5) {
      console.log("More than 5");
      this.props.navigation.navigate("Exercice_3_2_More5");
    } else if (this.countLeft >= 2 && this.countLeft <= 5) {
      console.log("Between 2 and 5");
      this.props.navigation.navigate("Exercice_3_2_2to5");
    } else if (this.countLeft < 2) {
      console.log("Less than 2");
      this.props.navigation.navigate("Exercice_3_2_Less2");
    }
  };

  renderEmpty = () => {

    return (
      <Card
        style={{
          height: 200,
          backgroundColor: "#CAC0DE",
          justifyContent: "center",
          paddingLeft: 30,
          paddingRight: 30,
          justifyContent: "center",
          width: Dimensions.get("window").width - 160,
          alignSelf: "center",
          zIndex: 2
        }}
      >
        <CardItem style={{ backgroundColor: "#CAC0DE" }}>
          <TouchableOpacity onPress={this.goToNext}>
            <Text style={styles.intro_text_center}>See results</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
    );
  };
}
