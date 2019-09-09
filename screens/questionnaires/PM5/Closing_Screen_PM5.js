import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StatusBar
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import { connect } from "react-redux";
import { updateState_Ex21 } from "./../../../redux-persist/redux/exercices";

class Closing_Screen_PM5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname,
      exercice_state_21: "locked"
    };
  }

  handleSubmit = () => {
    if (this.props.exercices.exercice_state_5 === undefined) {
      const exercice_state_21 = this.state.exercice_state_21;
      this.setState({ exercice_state_21: exercice_state_21 });
      this.props.dispatch(updateState_Ex21(this.state.exercice_state_21));
    } else {
      //
    }
    this.props.navigation.push("Home");
  };

  render() {
    return (
      <>
        <Image
          source={require("./../../../assets/images/SuccessPM5.png")}
          style={styles.image_background}
        />
        <View style={styles.container_finish}>
          <StatusBar hidden />
          <ScrollView>
            <Text style={styles.header_left}>
              You finished this module, {this.props.user.nickname}.
            </Text>

            <Text style={styles.text_left}>
              {"\n"}You’re done and ready for the next module, starting
              tomorrow.
            </Text>
          </ScrollView>

          <View style={styles.bottom_button}>
            <PrimaryButton
              label="Done"
              isBottom={true}
              onPress={this.handleSubmit}
            />
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  exercices: state.exercices
});

export default connect(mapStateToProps)(Closing_Screen_PM5);
