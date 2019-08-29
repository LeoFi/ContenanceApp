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
  TouchableOpacity
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton,
  LinkText
} from "../../../components/AppComponents";
import { styles } from "./style";
import { connect } from "react-redux";

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
        source={require("../../../assets/images/purple_shape_inverted.png")}
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
                >
                  <TouchableOpacity
                    style={styles.close}
                    onPress={() => {
                      this.setModalVisibleExample(
                        !this.state.modalVisibleExample
                      );
                    }}
                  >
                    <Image
                      style={{ marginTop: 20 }}
                      source={require("./../../../assets/images/close.png")}
                    />
                  </TouchableOpacity>

                  <View style={styles.top_security_agreements}>
                    <Text style={styles.intro_text}>
                      <Text style={styles.intro_text_bold}>
                        Smartphone GO Situations
                      </Text>
                      {"\n"}
                      {"\n"}
                      {this.props.user_values.SPGoSit1_D18}
                      {"\n"}
                      {"\n"}
                      {this.props.user_values.SPGoSit2_D18}
                      {"\n"}
                      {"\n"}
                      {this.props.user_values.SPGoSit3_D18}
                      {"\n"}
                      {"\n"}
                      <Text style={styles.intro_text_bold}>
                        Smartphone NO GO Situations
                      </Text>
                      {"\n"}
                      {"\n"}
                      {this.props.user_values.SPNoGoSit1_D18}
                      {"\n"}
                      {"\n"}
                      {this.props.user_values.SPNoGoSit2_D18}
                      {"\n"}
                      {"\n"}
                      {this.props.user_values.SPNoGoSit3_D18}
                    </Text>
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
