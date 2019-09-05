import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  TouchableWithoutFeedback,
  StatusBar,
  TouchableOpacity
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import { Svg, Path } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";

class Intro_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      iphone5: false,
      showBackArrow: true
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
    const { goBack } = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <StatusBar hidden />
        <View
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 100,
            backgroundColor: "#F4F1DE"
          }}
        >
          {this.state.showBackArrow ? (
            <TouchableOpacity
              onPress={() => goBack()}
              hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              style={{ position: "absolute", left: 30, top: 30 }}
            >
              <Ionicons name="md-arrow-back" size={32} color={"#2C3B51"} />
            </TouchableOpacity>
          ) : null}
        </View>
        <ScrollView
          //style={styles.container_intro}
          contentContainerStyle={styles.container_scrollview_content}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              width: Dimensions.get("window").width - 50
            }}
          >
            <View style={{ alignSelf: "center", paddingBottom: 30 }}>
              <Svg
                width={this.state.iphone5 ? "70" : "92"}
                height={this.state.iphone5 ? "79" : "104"}
                viewBox="0 0 92 104"
                fill="none"
              >
                <Path
                  d="M48.26 70.1352L48.2635 70.1358C48.5361 70.1894 48.8108 70.2054 49.0807 70.1581C49.5876 70.0694 50.0671 69.7972 50.3892 69.3396C50.3896 69.339 50.39 69.3384 50.3904 69.3378L58.8044 57.9004L77.8994 54.5566C82.2077 53.8021 85.0912 49.6943 84.3368 45.386L80.5823 23.9465C79.8279 19.6382 75.7201 16.7547 71.4118 17.5091L36.2686 23.6633C31.9603 24.4177 29.0768 28.5256 29.8313 32.8339L33.5857 54.2734C34.3401 58.5817 38.448 61.4652 42.7563 60.7107L45.2668 60.2711L46.7064 68.4915C46.8487 69.304 47.4461 69.9601 48.26 70.1352ZM42.2489 56.6537L42.2456 56.6353L42.0486 56.6698C39.9656 57.0346 37.9914 55.6488 37.6266 53.5657L33.8722 32.1262C33.5074 30.0432 34.8932 28.069 36.9763 27.7042L72.101 21.5533C74.184 21.1885 76.1582 22.5743 76.523 24.6574L80.2774 46.0969C80.6422 48.1799 79.2564 50.1541 77.1733 50.5189L57.2626 54.0056C56.7324 54.0984 56.2765 54.3888 55.9724 54.8211C55.972 54.8216 55.9716 54.8222 55.9712 54.8227L49.9213 63.0673L48.9572 57.5614C48.7607 56.4396 47.7047 55.6983 46.5829 55.8948L42.2489 56.6537Z"
                  fill="#2C3B51"
                  stroke="#2C3B51"
                  stroke-width="0.4"
                />
                <Path
                  d="M66.2666 95.0166L66.2675 95.0165C70.0746 94.3302 72.6051 90.7023 71.941 86.9099L67.6705 62.5233C67.4741 61.4015 66.4181 60.6602 65.2963 60.8567C64.1744 61.0531 63.4332 62.1091 63.6296 63.231L67.9033 87.6359C68.1778 89.2032 67.1262 90.7013 65.5589 90.9757L22.8273 98.4587C21.2599 98.7332 19.7619 97.6817 19.4874 96.1143L6.01477 19.1789C5.74058 17.6132 6.79352 16.1323 8.36239 15.8575L51.0941 8.3745C52.6622 8.0999 54.1595 9.15237 54.4306 10.7005L55.0983 14.5132C55.2948 15.635 56.3508 16.3763 57.4726 16.1798C58.5944 15.9834 59.3357 14.9274 59.1392 13.8055L58.4716 9.99285C57.8074 6.20028 54.1758 3.651 50.3832 4.31515L7.65153 11.7982C3.85897 12.4623 1.30969 16.094 1.97383 19.8865L15.4465 96.822C16.1107 100.615 19.7423 103.164 23.5349 102.5L66.2666 95.0166Z"
                  fill="#2C3B51"
                  stroke="#2C3B51"
                  stroke-width="0.4"
                />
                <Path
                  d="M47.7628 82.797L36.8036 84.7161C35.6818 84.9126 34.9405 85.9685 35.137 87.0904C35.3334 88.2122 36.3894 88.9535 37.5112 88.757L48.4704 86.8379C49.5923 86.6414 50.3335 85.5854 50.1371 84.4636C49.9406 83.3418 48.8846 82.6005 47.7628 82.797Z"
                  fill="#2C3B51"
                  stroke="#2C3B51"
                  stroke-width="0.4"
                />
                <Path
                  d="M57.4878 43.0736L57.5197 43.271L57.7171 43.2391L60.768 42.7467L60.953 42.7169L60.9353 42.5304L60.866 41.8004C60.8313 41.0596 61.0509 40.3716 61.5338 39.7301C61.5339 39.73 61.5341 39.7298 61.5342 39.7297L62.3508 38.657L62.3508 38.657L62.3519 38.6555C62.9953 37.794 63.4307 37.0249 63.646 36.3506L63.6463 36.3496C63.86 35.6674 63.91 34.9721 63.7961 34.2661C63.5491 32.7363 62.8737 31.6065 61.7545 30.9093C60.6389 30.2072 59.2122 30.01 57.4975 30.2867C55.7951 30.5615 54.4955 31.221 53.6257 32.2832L53.6257 32.2832L53.6252 32.2838C52.7605 33.3485 52.4561 34.6747 52.6919 36.2396L52.722 36.4395L52.9216 36.4073L56.3777 35.8495L56.5702 35.8184L56.544 35.6251C56.4622 35.0229 56.5616 34.5514 56.817 34.1891C57.0798 33.8166 57.4717 33.5819 58.0152 33.4942C58.6002 33.3997 59.0293 33.4923 59.3354 33.7325C59.6448 33.9753 59.866 34.3979 59.9701 35.0426C60.0358 35.45 59.9903 35.858 59.8298 36.2701C59.6673 36.6759 59.2874 37.254 58.6707 38.0113C58.0453 38.7782 57.6393 39.5322 57.4667 40.2733C57.2948 41.0118 57.3062 41.9484 57.4878 43.0736ZM58.549 48.1341L58.5508 48.1353C59.0132 48.4534 59.5637 48.5538 60.1851 48.4535C60.8059 48.3533 61.2938 48.0856 61.625 47.6384C61.962 47.1928 62.0816 46.6754 61.9889 46.1011C61.8949 45.5188 61.6138 45.0614 61.1451 44.7458C60.6832 44.4208 60.1404 44.3137 59.5327 44.4118C58.9242 44.51 58.4392 44.7835 58.0954 45.238C57.7573 45.6845 57.6388 46.2064 57.7327 46.7881C57.8252 47.3613 58.0968 47.8154 58.549 48.1341Z"
                  fill="#2C3B51"
                  stroke="#2C3B51"
                  stroke-width="0.4"
                />
              </Svg>
            </View>
            <Text style={styles.header_left}>
              {this.props.user.nickname}, welcome to Contenance!
            </Text>

            <Text style={styles.text_left}>
              {"\n"}Before you start the training, we have a few questions about
              your smartphone use, your smartphone habits and your well-being.
              {"\n"}
              {"\n"}This is important for our study and will only take ten
              minutes.
            </Text>
            <View style={{ flex: 1, height: 30 }} />

            <View style={styles.bottom}>
              <PrimaryButton
                label="Start Reflecting"
                isBottom={true}
                onPress={() => {
                  this.props.navigation.navigate("PSU_Screen_T1");
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Intro_Screen_T1);
