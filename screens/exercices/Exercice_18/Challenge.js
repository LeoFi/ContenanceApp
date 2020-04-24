import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  Modal,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton,
  LinkText
} from "../../../components/AppComponents";
import { styles } from "./style";
import { connect } from "react-redux";
import { Svg, Path } from "react-native-svg";

class Exercice_18_Challenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisibleExample: false
    };
  }

  setModalVisibleExample(visible) {
    this.setState({ modalVisibleExample: visible });
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/blue_challenge.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_18_Congratulations");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>The Challenge</Text>
                <Text style={styles.text}>
                  {"\n"}From now on, stick to these situations in which you will
                  have your smartphone around - or not.
                  {"\n"}
                  {"\n"}This might be quite a radical change. Here comes a
                  little tip: You can start with implementing one GO and one NO
                  GO per day.
                  {"\n"}
                  {"\n"}
                </Text>
                <LinkText
                  style={styles.link_text}
                  textLabel=""
                  linkLabel="Wait, what are my GOs and NO GOs again?"
                  linkOnPress={() => {
                    this.setModalVisibleExample(true);
                  }}
                />
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisibleExample}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                  }}
                  style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                  }}
                >
                  <TouchableOpacity
                    style={styles.close}
                    onPress={() => {
                      this.setModalVisibleExample(
                        !this.state.modalVisibleExample
                      );
                    }}
                  >
                    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 15.48L15.48 18L9 11.52L2.52 18L0 15.48L6.48 9L0 2.52L2.52 0L9 6.48L15.48 0L18 2.52L11.52 9L18 15.48Z"
                        fill="#2C3B51"
                      />
                    </Svg>
                  </TouchableOpacity>

                  <View style={styles.top_security_agreements}>
                    <ScrollView>
                      <View
                        style={{
                          paddingTop: 60,
                          paddingLeft: 30,
                          paddingRight: 30,
                          width: Dimensions.get("window").width,
                          alignItems: "center"
                        }}
                      >
                        <Text style={styles.intro_text}>
                          <Text style={styles.intro_text}>
                            Smartphone GO Situations:
                          </Text>
                          {"\n"}
                          {"\n"}
                          <Text style={styles.text_bold_italic}>
                            {this.props.user_values.SPGoSit1_D18}
                            {"\n"}
                            {"\n"}
                            {this.props.user_values.SPGoSit2_D18}
                            {"\n"}
                            {"\n"}
                            {this.props.user_values.SPGoSit3_D18}
                          </Text>
                          {"\n"}
                          {"\n"}
                          <Text style={styles.intro_text}>
                            Smartphone NO GO Situations:
                          </Text>
                          {"\n"}
                          {"\n"}
                          <Text style={styles.text_bold_italic}>
                            {this.props.user_values.SPNoGoSit1_D18}
                            {"\n"}
                            {"\n"}
                            {this.props.user_values.SPNoGoSit2_D18}
                            {"\n"}
                            {"\n"}
                            {this.props.user_values.SPNoGoSit3_D18}
                          </Text>
                        </Text>
                      </View>
                    </ScrollView>
                  </View>
                </Modal>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_18_Challenge);
