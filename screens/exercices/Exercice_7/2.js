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
  Update_AppsRed1_D7,
  Update_AppsRed2_D7,
  Update_AppsRed3_D7
} from "../../../redux-persist/redux/user_values";

const data = [
  "Twitter",
  "Facebook",
  "Instagram",
  "Whatsapp",
  "Pinterest",
  "Safari",
  "Netflix",
  "Youtube",
  "Google Maps",
  "Spotify",
  "Soundcloud",
  "Audible",
  "Alarm Clock",
  "Calculator",
  "Headspace",
  "Calm"
];

class Exercice_7_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newSelect: "",
      AppsRed1_D7: this.props.user_values.AppsRed1_D7 || "",
      AppsRed2_D7: this.props.user_values.AppsRed2_D7 || "",
      AppsRed3_D7: this.props.user_values.AppsRed3_D7 || ""
    };
  }

  onSubmitEditing = () => {
    var NewValue = this.state.newSelect;
    data.push(NewValue);
    this.setState({ newSelect: undefined });
  };

  handleSubmit = () => {
    let AppsRed = [];
    for (const prop in this.tag.itemsSelected) {
      AppsRed.push(this.tag.itemsSelected[prop]);
    }

    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        AppsRed1_D7: AppsRed[0],
        AppsRed2_D7: AppsRed[1],
        AppsRed3_D7: AppsRed[2]
      });

    this.props.navigation.navigate("Exercice_7_3");
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
                  Which three apps do you give a red light? 
                  </Text>
                  <Text style={styles.text}>
                    {"\n"}The ones that you catch yourself spending more time on than you intend to.
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
                          let AppsRed = [];
                          for (const prop in this.tag.itemsSelected) {
                            AppsRed.push(this.tag.itemsSelected[prop]);
                          }
                          this.setState({ allSelected: true });
                          this.setState({ AppsRed1_D7: AppsRed[0] });
                          this.props.dispatch(
                            Update_AppsRed1_D7(this.state.AppsRed1_D7)
                          );

                          this.setState({ AppsRed2_D7: AppsRed[1] });
                          this.props.dispatch(
                            Update_AppsRed2_D7(this.state.AppsRed2_D7)
                          );

                          this.setState({ AppsRed3_D7: AppsRed[2] });
                          this.props.dispatch(
                            Update_AppsRed3_D7(this.state.AppsRed3_D7)
                          );
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

export default connect(mapStateToProps)(Exercice_7_2);
