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
import { Update_SitTrigger1_D5, Update_SitTrigger2_D5, Update_SitTrigger3_D5 } from "./../../../redux-persist/redux/user_values";

const data = [
  "In bed after waking up",
  "In bed before falling asleep",
  "In the kitchen while eating meal",
  "In the restaurant while eating a meal",
  "On public transport during the journey",
  "In the car while driving",
  "On the toilet",
  "When my friend goes to the bathroom",
  "During commercial breaks on TV",
  "During a meeting when you're bored"
];

class Exercice_5_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newSelect: "",
      SitTrigger1_D5: "",
      SitTrigger2_D5: "",
      SitTrigger3_D5: ""
    };
  }

  onSubmitEditing = () => {
    var NewValue = this.state.newSelect;
    data.push(NewValue);
    this.setState({ newSelect: undefined });
  };

  handleSubmit = () => {
    let SitTrigger = [];
    for (const prop in this.tag.itemsSelected) {
      SitTrigger.push(this.tag.itemsSelected[prop]);
    }

    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        SitTrigger1_D5: SitTrigger[0],
        SitTrigger2_D5: SitTrigger[1],
        SitTrigger3_D5: SitTrigger[2]
      });

    this.setState({ SitTrigger1_D5: SitTrigger[0] });
    console.log(SitTrigger[0])
    this.props.dispatch(Update_SitTrigger1_D5(this.state.SitTrigger1_D5));

    this.setState({ SitTrigger2_D5: SitTrigger[1] });
    this.props.dispatch(Update_SitTrigger2_D5(this.state.SitTrigger2_D5));

    this.setState({ SitTrigger3_D5: SitTrigger[2] });
    this.props.dispatch(Update_SitTrigger3_D5(this.state.SitTrigger3_D5));

    //this.props.navigation.navigate("Exercice_5_2");
  };

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/pink_shape.png")}
        style={styles.image_background}
      >
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
                    In which three situations do you usually use the smartphone
                    without thinking about it?
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
                          this.setState({ allSelected: true });
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
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_5_1);
