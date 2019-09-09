import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  Dimensions
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

    this.state = {};
  }

  render() {
    const screenHeight = Dimensions.get("window").height;

    return (
      <View style={{flex: 1}}>
        <StatusBar hidden />
        <ScrollView
          style={styles.container_scrollview}
          contentContainerStyle={styles.container_scrollview_content}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              width: Dimensions.get("window").width - 60
            }}
          >
            <Text style={styles.sub_header}>
              How do you evaluate the long-term success you have achieved so far
              in changing your smartphone use?
            </Text>

            <View style={{ flex: 1, justifyContent: "center" }}>
              <GreyInputButton
                label="I was very successful"
                isBottom={false}
                onPress={() =>
                  this.setState({
                    active1: !this.state.active1,
                    active2: false,
                    active3: false
                  })
                }
                isActive={this.state.active1}
              />
              <GreyInputButton
                label="I was successful"
                isBottom={false}
                onPress={() =>
                  this.setState({
                    active1: false,
                    active2: !this.state.active2,
                    active3: false
                  })
                }
                isActive={this.state.active2}
              />
              <GreyInputButton
                label="No, I was not very successful"
                isBottom={true}
                onPress={() =>
                  this.setState({
                    active1: false,
                    active2: false,
                    active3: !this.state.active3
                  })
                }
                isActive={this.state.active3}
              />
            </View>

            <View style={{ justifyContent: "flex-end", alignSelf: "stretch" }}>
              <PrimaryButton
                label="Continue"
                disabled={
                  !this.state.active1 &&
                  !this.state.active2 &&
                  !this.state.active3
                }
                onPress={() => {
                  this.props.navigation.navigate("Exercice_3_4");
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
