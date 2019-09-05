import React, { PureComponent } from "react";
import { Text, View, Modal, Dimensions, StyleSheet } from "react-native";
import PrimaryButton from "./../AppComponents/PrimaryButton";

export default class ChallengeModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //visible: true
      visible: false
    };
  }

  toggleEditEmployeeModal = () => {
    this.setState({
      visible: !this.state.visible,
      completedExercices: this.state.completedExercices - 1
    });
  };

  toggleEditEmployeeModal = () => {
    this.setState({
      visible: !this.state.visible,
      completedExercices: this.state.completedExercices - 1
    });
  };

  render() {
    const popUpProps = {
      item: this.props.item,
      label: this.props.label,
      content: this.props.content,
      allpopups: this.props.allpopups,
      function: this.props.function
    };

    return (
      <View style={{ flex: 1 }} key={popUpProps.key}>
        <Modal
          visible={this.state.visible}
          onPress={this.toggleEditEmployeeModal}
          animationType="fade"
          transparent={false}
        >
          <View
            style={{
              padding: 30,
              backgroundColor: "#F4F1DE",
              height: Dimensions.get("window").height,
              justifyContent: "center"
            }}
          >
            <Text style={styles.text_modal}>
              {1}/{this.state.completedExercices}
            </Text>
            <Text style={styles.header_modal}>
              {popUpProps.label}: Challenge accomplished?
            </Text>
            <Text style={styles.text_modal}>
              {'"'}
              {popUpProps.content}
              {'"'}
            </Text>
            <PrimaryButton
              onPress={this.toggleEditEmployeeModal}
              label="OH YES"
              content={popUpProps.content}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            />
            <PrimaryButton
              onPress={this.toggleEditEmployeeModal}
              label="Not Yet"
              content={popUpProps.content}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            />
          </View>
        </Modal>
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
    paddingBottom: 50
  },
  text_modal: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    paddingBottom: 50
  }
});
