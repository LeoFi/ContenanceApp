import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackgroundComponent,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { DeckSwiper, Card, CardItem } from "native-base";
import { styles } from "./style";

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
  constructor(props) {
    super(props);

    this.state = {
      countLeft: 0,
      countRight: 0,
      result: false
    };
  }

  render() {
    return (
      <View style={styles.container_deck}>
        <Text style={styles.sub_header_deck}>
          What strategies have you tried out so far to improve your smartphone
          use?
        </Text>
        <View
          style={{
            flex: 1
          }}
        >
          <View
            style={{ position: "relative", zIndex: 20, alignSelf: "center" }}
          >
            <DeckSwiper
              looping={false}
              dataSource={cards}
              onSwipeLeft={this.countLeftTry}
              onSwipeRight={this.countRightTry}
              renderEmpty={this.renderEmpty}
              elevation={3}
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
                    alignSelf: "center"
                  }}
                >
                  <CardItem style={{ backgroundColor: "#CAC0DE" }}>
                    <Text style={styles.intro_text_center}>{item}</Text>
                  </CardItem>
                </Card>
              )}
            />
          </View>

          {this.state.result ? null : (
            <View
              style={{
                top: 80,
                flexDirection: "row",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 0
              }}
            >
              <Image
                style={{ alignSelf: "center" }}
                source={require("./../../../assets/images/checkmark_success.png")}
              />

              <Image
                style={{ alignSelf: "center" }}
                source={require("./../../../assets/images/checkmark_fail.png")}
              />
            </View>
          )}
        </View>
        <View style={{ flex: 1 }} />
        <View style={{ justifyContent: "flex-end" }}>
          <Text style={styles.tap_text}>DRAG THE CARD LEFT OR RIGHT</Text>
        </View>
      </View>
    );
  }

  handleSubmit = () => {
    this.props.navigation.push("Exercice_3_2_More5");
  };

  countLeftTry = () => {
    this.state.countLeft += 1;
    this.state.result += 1;
    if (this.state.result === 8) {
      this.setState({ result: true });
    }
  };

  countRightTry = () => {
    this.state.countRight += 1;
    this.state.result += 1;
    if (this.state.result === 8) {
      this.setState({ result: true });
    }
  };

  goToNext = () => {
    if (this.state.countLeft > 5) {
      console.log(this.state.countLeft);
      this.props.navigation.navigate("Exercice_3_2_More5");
    } else if (this.state.countLeft >= 2 && this.state.countLeft <= 5) {
      console.log(this.state.countLeft);
      this.props.navigation.navigate("Exercice_3_2_2to5");
    } else if (this.state.countLeft < 2) {
      console.log(this.state.countLeft);
      this.props.navigation.navigate("Exercice_3_2_Less2");
    }
  };

  renderEmpty = () => {
    return this.state.countLeft + this.state.countRight === 8 ? (
      <PrimaryButton label="See Results" onPress={this.goToNext} />
    ) : null;
  };
}
