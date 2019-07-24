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

import { Svg } from "expo";
const { Circle, Path } = Svg;

import { TagSelect } from "react-native-tag-select";

import { styles } from "./style";
import * as Progress from "react-native-progress";

const data = [
  { id: 1, label: "In bed after waking up" },
  { id: 2, label: "In bed before falling asleep" },
  { id: 3, label: "In the kitchen while eating meal" },
  { id: 4, label: "In the restaurant while eating a meal" },
  { id: 5, label: "On public transport during the journey" },
  { id: 6, label: "In the car while driving" },
  { id: 7, label: "On the toilet" },
  { id: 8, label: "When my friend goes to the bathroom" },
  { id: 9, label: "During commercial breaks on TV" },
  { id: 10, label: "During a meeting when you're bored" }
];

export default class Exercice_5_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newSelect: ""
    };
  }

  onSubmitEditing = () => {
    for (let possibleAnswers = 0; possibleAnswers < 2; possibleAnswers++) {
      var nextAnswer = data.length;
      var NewValue = {
        id: nextAnswer + possibleAnswers,
        label: this.state.newSelect
      };
    }
    data.push(NewValue);
    this.setState({ newSelect: undefined });
  };

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/pink_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView
         contentContainerStyle={{flexGrow: 1}}
         keyboardShouldPersistTaps='handled'>
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
                      onPress={() => {
                        this.props.navigation.navigate("Exercice_5_2");
                      }}
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
