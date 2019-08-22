import React from "react";
import {
  StyleSheet,
  Alert,
  StatusBar,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { PrimaryButton } from "../../../components/AppComponents";
import Onboarding from "react-native-onboarding-swiper";

import { connect } from "react-redux";

class OnboardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || ""
    };
  }

  onCreateAccountPress = () => {
    this.props.navigation.navigate("T1");
  };

  render() {
    return (
      <Onboarding
        showDone={false}
        showSkip={false}
        showNext={false}
        bottomBarHighlight={false}
        imageContainerStyles={{ paddingBottom: 0 }}
        containerStyles={{
          paddingTop: 0,
          paddingLeft: 30,
          paddingRight: 30,
          paddingBottom: 40,
          flex: 1,
          alignItems: "flex-start",
          alignSelf: "stretch"
        }}
        titleStyles={{
          color: "#2C3B51",
          fontSize: 34,
          lineHeight: 37,
          textAlign: "center",
          fontFamily: "roboto-black",
          paddingBottom: 10
        }}
        subTitleStyles={{
          color: "#2C3B51",
          fontSize: 19,
          lineHeight: 25,
          paddingTop: 25,
          textAlign: "center",
          fontFamily: "roboto-regular"
        }}
        pages={[
          {
            title: "",
            subtitle: (
              <View>
                <Text style={styles.text}>
                  You can probably relate to my situation,{" "}
                  {this.props.user.nickname}: I love my smartphone. It opens up
                  a whole new world right at my fingertips, just like a big
                  ocean full of great possibilities."
                </Text>
              </View>
            ),
            backgroundColor: "#F4F1DE",
            image: (
              <Image
                // style={{ flex: 1 }}
                source={require("./../../../assets/images/Onboarding1.png")}
              />
            )
          },
          {
            title: "",
            subtitle: (
              <View>
                <Text style={styles.text}>
                  But the ocean is not calm. There are lots of stormy waves of
                  distraction that pull you underwater. Sometimes, I feel like
                  almost drowning. And I’m not alone: many people feel that way.
                </Text>
              </View>
            ),
            backgroundColor: "#F4F1DE",
            image: (
              <Image
                source={require("./../../../assets/images/Onboarding2.png")}
              />
            )
          },
          {
            title: "",
            subtitle: (
              <View>
                <Text style={styles.header}>
                  This program is about mastering the waves.
                </Text>
                <Text style={styles.text}>
                  In 21 days, you will learn how to develop a healthy
                  relationship to your smartphone. One exercise per day. No more
                  feelings of drowning.
                </Text>
                <PrimaryButton
                  label="Next"
                  isBottom={true}
                  onPress={() => {
                    this.props.navigation.navigate("Conclusion");
                  }}
                  SecurityAgreements
                  disabled={false}
                />
              </View>
            ),
            backgroundColor: "#F4F1DE",
            image: (
              <Image
                source={require("./../../../assets/images/Onboarding3.png")}
              />
            )
          }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    paddingTop: 25,
    paddingBottom: 25
  },
  header: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 10,
    paddingTop: 10,
  }
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(OnboardingScreen);
