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
    setTimeout(() => {
      this.refs._scrollView.scrollToEnd();
    }, 50);
  };

  handleSubmit = () => {
    let SPGoSit = [];
    for (const prop in this.tag.itemsSelected) {
      SPGoSit.push(this.tag.itemsSelected[prop]);
    }

    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
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
      <View
        style={{
          flex: 1,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: "#F4F1DE",
          justifyContent: "flex-start"
        }}
      >
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="0">
            <ScrollView
              //style={styles.container_scrollview}
              contentContainerStyle={styles.container_scrollview_content}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              ref="_scrollView"
            >
              <View
                style={{
                  width: Dimensions.get("window").width - 60
                }}
              >
                <Text style={styles.sub_header}>
                  Step 2: Now, select three specific situations in which you’re
                  happy to have your smartphone around.
                </Text>
                <Text style={styles.intro_text}>
                  {"\n"}Tip: you can also set times of the day when you want to
                  have it around, e.g. between 8am-10pm, I am fine with having
                  my smartphone with me.
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
                    onFocus={() =>
                      setTimeout(() => {
                        this.refs._scrollView.scrollToEnd();
                      }, 50)
                    }
                    style={styles.text_input_button}
                    value={this.state.newSelect}
                    onChangeText={newSelect => this.setState({ newSelect })}
                    onSubmitEditing={this.onSubmitEditing}
                    blurOnSubmit={true}
                    //multiline={true}
                    numberOfLines={10}
                    //multiline={true}
                    placeholder="Write a new one"
                    autoCapitalize="none"
                    editable={!this.state.allSelected}
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    style={styles.inputIcon}
                    onPress={this.state.newSelect ? this.onSubmitEditing : null}
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
            </ScrollView>
          </KeyboardAvoidingView>
        {/* </TouchableWithoutFeedback> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values,
  user: state.user
});

export default connect(mapStateToProps)(Exercice_18_2);
