import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import { Svg, Path } from "react-native-svg";

export default class Exercice_8_Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.background_intro}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day8_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.intro_header_day_light}>Day 8</Text>
              <Text style={styles.intro_header_light}>Mindful Social Media Use</Text>

              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M24 12C24 8.79452 22.7517 5.77911 20.4863 3.5137C18.2209 1.24829 15.2055 0 12 0C8.79452 0 5.77911 1.24829 3.5137 3.5137C1.24829 5.77911 0 8.79452 0 12V17.6815C0 20.8921 2.61473 23.5068 5.82534 23.5068C6.21062 23.5068 6.51884 23.1986 6.51884 22.8134V12.5548C6.51884 12.1695 6.21062 11.8613 5.82534 11.8613C4.04795 11.8613 2.45548 12.6575 1.38699 13.9161V12C1.38699 6.14897 6.14897 1.38699 12 1.38699C17.851 1.38699 22.613 6.14897 22.613 12C22.613 12.0462 22.6181 12.0925 22.6284 12.1387C22.6181 12.1849 22.613 12.2312 22.613 12.2774V14.1935C21.5445 12.9349 19.9521 12.1387 18.1747 12.1387C17.7894 12.1387 17.4812 12.4469 17.4812 12.8322V23.0907C17.4812 23.476 17.7894 23.7842 18.1747 23.7842C21.3853 23.7842 24 21.1695 24 17.9589V12.2774C24 12.2312 23.9949 12.1849 23.9846 12.1387C23.9949 12.0925 24 12.0462 24 12ZM5.12671 13.2997V22.0634C3.01027 21.7294 1.38185 19.8904 1.38185 17.6815C1.38699 15.4726 3.01027 13.6336 5.12671 13.2997ZM18.8733 22.3407V13.5771C20.9897 13.911 22.6181 15.75 22.6181 17.9589C22.613 20.1729 20.9897 22.0068 18.8733 22.3407Z"
                    fill="#F4F1DE"
                  />
                </Svg>
                <Text style={styles.intro_text_light}>{"  "}10 MIN</Text>
              </View>
              <Text style={styles.intro_text_light}>
              Today, you will discover a technique to transform your smartphone from an enemy into a tool for mindfulness. You will do your second reflection.{" "}
              </Text>

            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Start"
            isBottom={true}
            style={{backgroundColor: "#F4F1DE", borderColor: "#F4F1DE", color: "#2C3B51"}}
            onPress={() => {
              this.props.navigation.navigate("Exercice_8_1");
            }}
          />
        </View>
      </View>
    );
  }
}