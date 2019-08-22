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
// import { DeckSwiper, Card, CardItem } from "native-base";
import { styles } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

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
          {/* <DeckSwiper
            looping={false}
            dataSource={cards}
            onSwipeLeft={this.countLeftTry}
            renderEmpty={this.renderEmpty}
            renderItem={item => (
              <Card style={{ height: 200, backgroundColor: "#CAC0DE" }}>
                <CardItem style={{ backgroundColor: "#CAC0DE" }}>
                  <Text style={styles.intro_text_center}>{item}</Text>
                </CardItem>
              </Card>
            )}
          /> */}
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={styles.tap_text_deck}>DRAG THE CARD LEFT OR RIGHT</Text>
        </View>
      </View>
    );
  }

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
      <Card style={{ height: 200, backgroundColor: "#CAC0DE" }}>
        <CardItem style={{ backgroundColor: "#CAC0DE" }}>
          <TouchableOpacity onPress={this.goToNext}>
            <Text style={styles.intro_text_center}>See results</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
    );
  };
}
