import React, { PureComponent } from "react";
import { Text, View, Modal, Dimensions, StyleSheet, Alert } from "react-native";
import PrimaryButton from "./PrimaryButton";


export default class ModalContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <Modal
          visible={this.state.visible}
          onPress={this.toggleEditEmployeeModal}
          animationType="fade"
          transparent={false}
        >
          <View
            style={{
              padding: 30,
              backgroundColor: "#FDFDF7",
              height: Dimensions.get("window").height,
              justifyContent: "center"
            }}
          >
            <Text style={styles.text_modal}>
              {this.state.firstCompleted}/{this.state.lastCompleted}
            </Text>
            <Text style={styles.header_modal}>
              {popUpProps.label}: Challenge accomplished?
            </Text>
            <Text style={styles.text_modal}>
              {'"'}
              {popUpProps.content}
              {'"'}
            </Text>
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
                  // onPress={this.toggleEditEmployeeModalYes}
                  label="OH YES"
                  content={popUpProps.content}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                  }}
                />
              </View>
              <View style={{ width: "50%", marginLeft: 15 }}>
                <PrimaryButton
                  onPress={this.toggleEditEmployeeModal}
                  label="Not Yet"
                  content={popUpProps.content}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}