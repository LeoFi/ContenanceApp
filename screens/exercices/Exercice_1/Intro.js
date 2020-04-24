import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_1_Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iphone5: false
    };
  }

  componentWillMount = () => {
    const screenWidth = Dimensions.get("window").width;
    if (screenWidth === 320) {
      this.setState({ iphone5: true });
    } else {
      this.setState({ iphone5: false });
    }
  };

  render() {
    return (
      <View style={styles.background_intro}>
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={this.state.iphone5 ? styles.image_height_iphone5 : styles.image_height}
              source={require("../../../assets/images/Day1_Intro.png")}
              resizeMode="contain"
            />
            <View style={styles.middle}>
              <Text style={styles.intro_header_day_light}>Day 1</Text>
              <Text style={styles.intro_header_light}>Contenance</Text>

              <Text style={styles.intro_text_light}>
                {"\n"}2 MIN{"\n"}In this exercise, you will discover what Contenance is and why it should not be about less but better.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Start"
            isBottom={true}
            style={{backgroundColor: "#FDFDF7", borderColor: "#FDFDF7", color: "#2C3B51"}}
            onPress={() => {
              this.props.navigation.navigate("Exercice_1_1");
            }}
          />
        </View>
      </View>
    );
  }
}