import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  Image,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";

import { Svg, Circle, Path } from "react-native-svg";
import { TagSelect } from "react-native-tag-select";
import * as firebase from "firebase";

import { styles } from "./style";

import { connect } from "react-redux";
import {
  Update_SPNoGoSit1_D18,
  Update_SPNoGoSit2_D18,
  Update_SPNoGoSit3_D18
} from "./../../../redux-persist/redux/user_values";

const data = [
  "Before going to sleep",
  "After waking up",
  "Having lunch with friends or family",
  "Having dinner with friends or family",
  "Commuting (e.g in the bus or in the metro)",
  "Waiting for a friend",
  "After finishing a task at work",
  "When sitting on the toilet",
  "When sitting at my desk at work"
];

class Exercice_18_3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newSelect: "",
      SPNoGoSit1_D18: this.props.user_values.SPNoGoSit1_D18 || "",
      SPNoGoSit2_D18: this.props.user_values.SPNoGoSit2_D18 || "",
      SPNoGoSit3_D18: this.props.user_values.SPNoGoSit3_D18 || ""
    };
  }

  onSubmitEditing = () => {
    var NewValue = this.state.newSelect;
    data.push(NewValue);
    this.setState({ newSelect: undefined });
  };

  handleSubmit = () => {
    let SPNoGoSit = [];
    for (const prop in this.tag.itemsSelected) {
      SPNoGoSit.push(this.tag.itemsSelected[prop]);
    }

    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        SPNoGoSit1_D18: SPNoGoSit[0],
        SPNoGoSit2_D18: SPNoGoSit[1],
        SPNoGoSit3_D18: SPNoGoSit[2]
      });
    this.props.dispatch(Update_SPNoGoSit1_D18(this.state.SPNoGoSit1_D18));
    this.props.dispatch(Update_SPNoGoSit2_D18(this.state.SPNoGoSit2_D18));
    this.props.dispatch(Update_SPNoGoSit3_D18(this.state.SPNoGoSit3_D18));
    this.props.navigation.navigate("Exercice_18_3");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: "#F4F1DE"
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container_scrollview_content}
            keyboardShouldPersistTaps="handled"
          >
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset="100"
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-start",
                  width: Dimensions.get("window").width - 60
                }}
              ><Text style={styles.sub_header}>
              Step 1: Select three specific situations in which you don’t want
              to have your smartphone around.
            </Text>
            <Text style={styles.intro_text}>
              {"\n"}Tip: you can also set times of the day when you don’t want
              to have it around, e.g. after 10pm, I don’t want to have my
              smartphone with me.
            </Text>

            <TagSelect
              data={data}
              max={3}
              ref={tag => {
                this.tag = tag;
              }}
              onMaxError={() => {
                //Alert.alert("Ops", "Max reached");
              }}
              onItemPress={() => {
                if (this.tag.totalSelected === 3) {
                  let SPNoGoSit = [];
                  for (const prop in this.tag.itemsSelected) {
                    SPNoGoSit.push(this.tag.itemsSelected[prop]);
                  }
                  this.setState({ allSelected: true });
                  this.setState({ SPNoGoSit1_D18: SPNoGoSit[0] });
                  this.setState({ SPNoGoSit2_D18: SPNoGoSit[1] });
                  this.setState({ SPNoGoSit3_D18: SPNoGoSit[2] });
                } else {
                  this.setState({ allSelected: false });
                }
              }}
              containerStyle={{
                flexDirection: "column",
                alignItems: "stretch",
                paddingTop: 40,
                width: Dimensions.get("window").width - 50
              }}
              itemLabelStyle={styles.button_grey_input_text}
              itemStyle={{
                borderRadius: 99,
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#E2DFD1",
                borderWidth: 0,
                height: 50,
                width: "100%"
              }}
              itemStyleSelected={{
                backgroundColor: "#6A97D8"
              }}
              itemLabelStyleSelected={{
                fontFamily: "roboto-bold"
              }}
            />

            <View style={styles.searchSection}>
              <TextInput
                style={styles.text_input_button}
                value={this.state.newSelect}
                onChangeText={newSelect => this.setState({ newSelect })}
                onSubmitEditing={this.onSubmitEditing}
                blurOnSubmit={true}
                multiline={true}
                numberOfLines={1}
                placeholder="Write a new one"
                autoCapitalize="none"
                editable={!this.state.allSelected}
                autoCorrect={false}
              />
              <TouchableOpacity
                style={styles.inputIcon}
                onPress={this.onSubmitEditing}
              >
                <Svg height="32" width="32">
                  <Circle cx="16" cy="16" r="16" fill="#2C3B51" />
                  <Path
                    d="M10.946 14.332H14.51V10.614H17.084V14.332H20.67V16.796H17.084V20.558H14.51V16.796H10.946V14.332Z"
                    fill="#F4F1DE"
                  />
                </Svg>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 1, paddingBottom: 30 }} />
                <View style={styles.bottom}>
                  <PrimaryButton
                    label="Continue"
                    disabled={!this.state.allSelected}
                    onPress={this.handleSubmit}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_18_3);
