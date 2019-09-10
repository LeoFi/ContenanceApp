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
  Modal,
  Dimensions,
  TouchableHighlight,
  Alert,
  TouchableOpacity
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton,
  ExerciceButton
} from "../../../components/AppComponents";
import { styles } from "./style";

import { BlurView } from "expo-blur";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

import { connect } from "react-redux";

class Exercice_10_Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  componentWillMount = () => {
    if (
      this.props.exercices.exercice_state_9 === "completed" ||
      this.props.exercices.exercice_state_9 === "DONE"
    ) {
      this.setState({ visible: false });
    } else {
      setTimeout(() => {
        this.setState({ visible: true });
      }, 500);
    }
  };

  setModalVisible(visible) {
    this.setState({ visible: visible });
  }

  render() {
    return (
      <View style={styles.background_intro}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day10_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.intro_header_day_light}>Day 10</Text>
              <Text style={styles.intro_header_light}>
                Meaningful Smartphone Activities
              </Text>

              <Text style={styles.intro_text_light}>
                {"\n"}5 MIN{"\n"}Today, you are going to turn your smartphone
                into a tool to bring your values to life.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Start"
            isBottom={true}
            style={{
              backgroundColor: "#F4F1DE",
              borderColor: "#F4F1DE",
              color: "#2C3B51"
            }}
            onPress={() => {
              this.props.exercices.exercice_state_9 === "completed" ||
              this.props.exercices.exercice_state_9 === "DONE"
                ? this.props.navigation.navigate("Exercice_10_1")
                : this.setState({ visible: true });;
            }}
          />
        </View>

            <Modal
            visible={this.state.visible}
            animationType="slide"
            transparent={true}
          >
            <View
              style={{
                padding: 30,
                flexDirection: "column",
                backgroundColor: "#F4F1DE",
                height: Dimensions.get("window").height,
                justifyContent: "space-between",
                paddingBottom: 30,
                top: 50,
                borderRadius: 10
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  backgroundColor: "#F4F1DE",
                  height: Dimensions.get("window").height,
                  justifyContent: "space-between",
                  paddingBottom: 50
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    height: Dimensions.get("window").height - 110,
                    paddingLeft: 15,
                    paddingRight: 15
                  }}
                >
                  <View
                    style={{
                      paddingTop: 5,
                      position: "absolute",
                      right: 0,
                      top: 0
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          visible: false
                        });
                      }}
                    >
                      <Svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18 15.48L15.48 18L9 11.52L2.52 18L0 15.48L6.48 9L0 2.52L2.52 0L9 6.48L15.48 0L18 2.52L11.52 9L18 15.48Z"
                          fill="#2C3B51"
                        />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.header_modal}>
                    Take a moment to catch up first.
                  </Text>
                  <Text style={styles.text_modal}>
                  Explore your values first before turning your smartphone into a tool to realize them. Enjoy!
                  </Text>
                  <ExerciceButton
                    onPress={() => {
                      {
                        this.setState({
                          visible: false
                        });
                        this.props.navigation.navigate("Exercice_9_Intro");
                      }
                    }}
                    style={styles.styleButton}
                  >
                    <Text style={styles.styleText}>day 9 - Getting Lost</Text>
                    <Image
                      style={styles.exercice_button_icon}
                      source={require("./../../../assets/images/nextmark.png")}
                    />
                  </ExerciceButton>
                </View>
              </View>
            </View>
          </Modal>
       </View>
    );
  }
}

const mapStateToProps = state => ({
  exercices: state.exercices
});

export default connect(mapStateToProps)(Exercice_10_Intro);
