import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  Image
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";
import * as firebase from "firebase";

import { connect } from "react-redux";
import { updateState_Ex1 } from "./../../../redux-persist/redux/exercices";
import { updateState_Ex2 } from "./../../../redux-persist/redux/exercices";
import {
  updateStartingDate,
  updateWelcomeTitle,
  updateWelcomeSubTitle
} from "./../../../redux-persist/redux/user";

class Exercice_1_Congratulations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercice_state_1: "completed",
      exercice_state_2: "locked",
      welcomeTitle: "Well done,",
      welcomeSubTitle: "Come back tomorrow to continue."
    };
  }

  render() {
    return (
      <View style={styles.container_background_inverted}>
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day1_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.header_light}>Congratulations!</Text>
              <Text style={styles.text_light}>
                {"\n"}You finished your first exercise. Now you know why this
                training is called Contenance!
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Done"
            style={{
              backgroundColor: "#F4F1DE",
              borderColor: "#F4F1DE",
              color: "#2C3B51"
            }}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var initialDate = new Date().toString();

    if (this.props.user.initialDate.length === 0) {
      this.setState({ initialDate: initialDate }, function() {
        this.props.dispatch(updateStartingDate(this.state.initialDate));
      });

      firebase
        .database()
        .ref()
        .child("accounts")
        .child(this.props.user.UID)
        .update({
          Day_1_Done: initialDate
        });
    } else {
      return;
    }
  };

  handleSubmit = () => {
    if (
      this.props.exercices.exercice_state_1 === "DONE" ||
      this.props.exercices.exercice_state_1 === "completed"
    ) {
    } else {
      const exercice_state_1 = this.state.exercice_state_1;
      this.setState({ exercice_state_1: exercice_state_1 });
      this.props.dispatch(updateState_Ex1(this.state.exercice_state_1));
    }

    if (this.props.exercices.exercice_state_2 === undefined) {
      const exercice_state_2 = this.state.exercice_state_2;
      this.setState({ exercice_state_2: exercice_state_2 });
      this.props.dispatch(updateState_Ex2(this.state.exercice_state_2));
    } else {
      //
    }
    const welcomeTitle = this.state.welcomeTitle;
    const welcomeSubTitle = this.state.welcomeSubTitle;
    this.setState({ welcomeTitle: welcomeTitle });
    this.setState({ welcomeSubTitle: welcomeSubTitle });
    this.props.dispatch(updateWelcomeTitle(this.state.welcomeTitle));
    this.props.dispatch(updateWelcomeSubTitle(this.state.welcomeSubTitle));
    this.props.navigation.push("Home");
  };
}

const mapStateToProps = state => ({
  user: state.user,
  exercices: state.exercices
});

export default connect(mapStateToProps)(Exercice_1_Congratulations);
