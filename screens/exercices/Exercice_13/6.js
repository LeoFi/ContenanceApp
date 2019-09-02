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
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton,
  LinkText
} from "../../../components/AppComponents";
import { styles } from "./style";

import {
  Svg,
  Path,
  Circle,
  Ellipse,
  G,
  Defs,
  ClipPath,
  Rect
} from "react-native-svg";

import { TagSelect } from "react-native-tag-select";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { Update_NewHabitCommit_D13 } from "./../../../redux-persist/redux/user_values";

class Exercice_13_6 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      NewHabitCommit_D13: this.props.user_values.NewHabitCommit_D13 || ""
    };
  }
  handleSubmit = () => {
    let NewHabitCommit = [];
    for (const prop in this.tag.itemsSelected) {
      NewHabitCommit.push(this.tag.itemsSelected[prop]);
    }

    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({
        NewHabitCommit_D13: NewHabitCommit[0]
      });
    this.props.dispatch(
      Update_NewHabitCommit_D13(this.state.NewHabitCommit_D13)
    );
    this.props.navigation.navigate("Exercice_13_Aha_1");
  };

  render() {
    const data = [
      "If am " +
        this.props.user_values.NewHabitTrigger1_D13 +
        ", then I will " +
        this.props.user_values.NewHabitActivity1_D13 +
        "",
      "If am " +
        this.props.user_values.NewHabitTrigger2_D13 +
        ", then I will " +
        this.props.user_values.NewHabitActivity2_D13 +
        "",
      "If am " +
        this.props.user_values.NewHabitTrigger3_D13 +
        ", then I will " +
        this.props.user_values.NewHabitActivity3_D13 +
        ""
    ];
    return (
      <View style={{ backgroundColor: "#F4F1DE", flex: 1 }}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_top}>
            <Text style={styles.sub_header_left}>
              Step 3: Commit to a new habit
            </Text>
            <Text style={styles.intro_text}>
              {"\n"}These are your three freshly designed plans for meaningful
              smartphone habits.{"\n"}
              {"\n"}Let’s take it step by step. Pick one of the plans you want
              to establish first.
            </Text>

            <TagSelect
              data={data}
              max={1}
              ref={tag => {
                this.tag = tag;
              }}
              onMaxError={() => {
                //Alert.alert("Ops", "Max reached");
              }}
              onItemPress={() => {
                if (this.tag.totalSelected === 1) {
                  let NewHabitCommit = [];
                  for (const prop in this.tag.itemsSelected) {
                    NewHabitCommit.push(this.tag.itemsSelected[prop]);
                  }
                  this.setState({ allSelected: true });
                  this.setState({
                    NewHabitCommit_D13: NewHabitCommit[0]
                  });
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
                backgroundColor: "#4CBB92"
              }}
              itemLabelStyleSelected={{
                fontFamily: "roboto-bold"
              }}
            />
          </View>
        </ScrollView>
        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Continue"
            disabled={!this.state.allSelected}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user_values: state.user_values
});

export default connect(mapStateToProps)(Exercice_13_6);