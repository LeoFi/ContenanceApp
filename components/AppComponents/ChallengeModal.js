import React, { PureComponent } from "react";
import {
  Text,
  View,
  Modal,
  Dimensions,
  StyleSheet,
  Alert,
  TouchableOpacity
} from "react-native";
import PrimaryButton from "./../AppComponents/PrimaryButton";
import SecondaryButton from "./../AppComponents/SecondaryButton";


export default class ChallengeModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const popUpProps = {
      label: this.props.label,
      content: this.props.content,
      onPressLeft: this.props.onPressLeft,
      onPressRight: this.props.onPressRight,
      onPressLeftLast: this.props.onPressLeftLast,
      onPressRightLast: this.props.onPressRightLast,
      current: this.props.current + 1,
      total: this.props.total
    };

    return (
      <View
        style={{
          height: Dimensions.get("window").height - 165,
          justifyContent: "space-between"
        }}
      >
        <View style={{flex: 1, justifyContent: "flex-start"}}>
          <Text style={styles.header_modal}>
            {popUpProps.label}: Challenge accomplished?
          </Text>
          <Text style={styles.text_modal}>
            {'"'}
            {popUpProps.content}
            {'"'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: Dimensions.get("window").width - 60,
            paddingLeft: 15,
            paddingRight: 15
          }}
        >
          <View style={{ width: "50%", marginRight: 15 }}>
            <PrimaryButton
              onPress={
                popUpProps.current < popUpProps.total
                  ? popUpProps.onPressLeft
                  : popUpProps.onPressLeftLast
              }
              label="OH YES"
            />
          </View>
          <View style={{ width: "50%", marginLeft: 15 }}>
            <SecondaryButton
              onPress={
                popUpProps.current < popUpProps.total
                  ? popUpProps.onPressRight
                  : popUpProps.onPressRightLast
              }
              label="Not Yet"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_modal: {
    color: "#2C3B51",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 25,
    paddingTop: 30,
  },
  text_modal: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
  }
});

const mapStateToProps = state => ({
  user: state.user,
  exercices: state.exercices
});

