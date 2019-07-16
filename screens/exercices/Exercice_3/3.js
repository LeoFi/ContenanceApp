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

export default class Exercice_3_3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/pink_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback style={styles.scroll}>
              <View style={styles.container_scroll}>
                <Text style={styles.sub_header}>
                  How do you evaluate the long-term success you have achieved so
                  far?
                </Text>

                <View style={styles.middle}>
                  <GreyInputButton
                    label="I was very succesful"
                    isBottom={false}
                    onPress={() => this.setState({ active1: !this.state.active1, active2: false, active3: false })}
                    isActive={this.state.active1}
                  />
                  <GreyInputButton
                    label="I was succesful"
                    isBottom={false}
                    onPress={() => this.setState({ active1: false, active2: !this.state.active2, active3: false })}
                    isActive={this.state.active2}
                  />
                  <GreyInputButton
                    label="No, I was not very succesful"
                    isBottom={true}
                    onPress={() => this.setState({ active1: false, active2: false, active3: !this.state.active3 })}
                    isActive={this.state.active3}
                  />
                </View>

                <View style={styles.bottom}>
                  <PrimaryButton
                    label="Continue"
                    disabled={ !this.state.active1 && !this.state.active2 && !this.state.active3 }
                    onPress={() => {
                      this.props.navigation.navigate("Exercice_3_4");
                    }}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
