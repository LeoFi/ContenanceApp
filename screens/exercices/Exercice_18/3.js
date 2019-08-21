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
  Image
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
  Update_SPGoSit1_D18,
  Update_SPGoSit2_D18,
  Update_SPGoSit3_D18
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

class Exercice_18_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newSelect: "",
      SPGoSit1_D18: this.props.user_values.SPGoSit1_D18 || "",
      SPGoSit2_D18: this.props.user_values.SPGoSit2_D18 || "",
      SPGoSit3_D18: this.props.user_values.SPGoSit3_D18 || ""
    };
  }

  onSubmitEditing = () => {
    var NewValue = this.state.newSelect;
    data.push(NewValue);
    this.setState({ newSelect: undefined });
  };

  handleSubmit = () => {
    let SPGoSit = [];
    for (const prop in this.tag.itemsSelected) {
      SPGoSit.push(this.tag.itemsSelected[prop]);
    }

    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        SPGoSit1_D18: SPGoSit[0],
        SPGoSit2_D18: SPGoSit[1],
        SPGoSit3_D18: SPGoSit[2]
      });
    this.props.dispatch(Update_SPGoSit1_D18(this.state.SPGoSit1_D18));
    this.props.dispatch(Update_SPGoSit2_D18(this.state.SPGoSit2_D18));
    this.props.dispatch(Update_SPGoSit3_D18(this.state.SPGoSit3_D18));
    this.props.navigation.navigate("Exercice_18_4");
  };

  render() {
    return (
      <View style={{ backgroundColor: "#F4F1DE" }}>
        <StatusBar hidden />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ flex: 1 }}>
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset="15"
              style={styles.keyboard_view}
            >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                  <Text style={styles.sub_header}>
                  Step 2: Now, select three specific situations in which you’re happy to have your smartphone around.
                  </Text>
                  <Text style={styles.intro_text}>
                  {"\n"}Tip: you can also set times of the day when you want to have it around, e.g. between 8am-10pm, I am fine with having my smartphone with me.
                  </Text>

                  <View style={styles.middle}>
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
                          let SPGoSit = [];
                          for (const prop in this.tag.itemsSelected) {
                            SPGoSit.push(this.tag.itemsSelected[prop]);
                          }
                          this.setState({ allSelected: true });
                          this.setState({ SPGoSit1_D18: SPGoSit[0] });
                          this.setState({ SPGoSit2_D18: SPGoSit[1] });
                          this.setState({ SPGoSit3_D18: SPGoSit[2] });
                        } else {
                          this.setState({ allSelected: false });
                        }
                      }}
                      containerStyle={{ flexDirection: "column" }}
                      itemLabelStyle={styles.button_grey_input_text}
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
                  </View>

                  <View style={styles.tap_pos_relative}>
                    <PrimaryButton
                      label="Continue"
                      disabled={!this.state.allSelected}
                      onPress={this.handleSubmit}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_18_2);
