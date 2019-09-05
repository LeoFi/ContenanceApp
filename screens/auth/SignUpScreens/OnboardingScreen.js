import React from "react";
import {
  StyleSheet,
  Alert,
  StatusBar,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { PrimaryButton } from "../../../components/AppComponents";
import Onboarding from "react-native-onboarding-swiper";

import { connect } from "react-redux";

const CustomButton = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? "#2C3B51" : "#F4F1DE";
  }

  return (
    <View
      style={{
        width: 14,
        height: 14,
        marginHorizontal: 5,
        marginVertical: 0,
        backgroundColor: "#2C3B51",
        borderRadius: 7,
        marginTop: -30
      }}
    >
      <View
        style={{
          width: 10,
          height: 10,
          marginHorizontal: 2,
          marginVertical: 2,
          backgroundColor: "#F4F1DE",
          borderRadius: 6
        }}
      >
        <View
          style={{
            width: 6,
            height: 6,
            marginHorizontal: 2,
            marginVertical: 2,
            backgroundColor,
            borderRadius: 4
          }}
        />
      </View>
    </View>
  );
};

class OnboardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
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
        bottomBarHeight={15}
        DotComponent={CustomButton}
        containerStyles={{
          paddingTop: 50,
          paddingBottom: 40,
          paddingLeft: 30,
          paddingRight: 30,
          flex: 1,
          alignItems: "flex-start",
          alignSelf: "stretch"
        }}
        imageContainerStyles={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 0
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
          flex: 1,
          color: "#2C3B51",
          fontSize: 19,
          lineHeight: 25,
          textAlign: "center",
          fontFamily: "roboto-regular"
        }}
        pages={[
          {
            title: "",
            subtitle: (
              <View style={{ flex: 1, justifyContent: "flex-start" }}>
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
                style={{ justifyContent: "center" }}
                source={require("./../../../assets/images/Onboarding1.png")}
              />
            )
          },
          {
            title: "",
            subtitle: (
              <View style={{ flex: 1, justifyContent: "flex-start" }}>
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
                style={{ width: this.state.iphone5 ? 320 : 375, height: 150,marginTop: -40 }}
                source={require("./../../../assets/images/Onboarding2.png")}
              />
            )
          },
          {
            title: "",
            subtitle: (
              <View style={{ flex: 2, justifyContent: "flex-end" }}>
                <Text style={styles.header}>
                  This program is about mastering the waves.
                </Text>
                <Text style={styles.text}>
                  In 21 days, you will learn how to develop a healthy
                  relationship to your smartphone. One exercise per day. No more
                  feelings of drowning.
                </Text>
                <View style={{ flex: 1 }} />
                <View>
                  <PrimaryButton
                    label="Next"
                    isBottom={true}
                    onPress={() => {
                      this.props.navigation.navigate("Conclusion");
                    }}
                    disabled={false}
                  />
                </View>
              </View>
            ),
            backgroundColor: "#F4F1DE",
            image: (
              <Image
                style={{ width: this.state.iphone5 ? 320 : 375 }}
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
    fontFamily: "roboto-regular"
  },
  header: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 10,
    paddingTop: 10
  }
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(OnboardingScreen);
