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
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_17_6 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iphone: false,
      android: false
    };
  }

  handleSubmit = () => {
    {
      this.state.iphone
        ? this.props.navigation.navigate("Exercice_17_7_iphone")
        : this.props.navigation.navigate("Exercice_17_7_android");
    }
  };

  render() {
    return (
      <View style={{backgroundColor: "#F4F1DE", flex: 1}}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_top}>
            <Text style={styles.sub_header}>
              Let’s check how to turn off notifications.
            </Text>
            <Text style={styles.intro_text_bold_center}>
              {"\n"}Which smartphone do you use?{"\n"}{"\n"}
            </Text>
            <GreyInputButton
              label="I have an iPhone"
              isBottom={false}
              onPress={() =>
                this.setState({
                  iphone: !this.state.iphone,
                  android: false
                })
              }
              isActive={this.state.iphone}
              mainColor={"#6A97D8"}
              mainColorReduced={"#E0DFD0"}
            />
            <GreyInputButton
              label="I use Android"
              isBottom={false}
              onPress={() =>
                this.setState({
                  iphone: false,
                  android: !this.state.android
                })
              }
              isActive={this.state.android}
              mainColor={"#6A97D8"}
              mainColorReduced={"#E0DFD0"}
            />
          </View>
        </ScrollView>
        <View style={styles.bottom_button}>
              <PrimaryButton
                label="Continue"
                disabled={!this.state.iphone && !this.state.android}
                onPress={this.handleSubmit}
              />
            </View>
      </View>
    );
  }
}
