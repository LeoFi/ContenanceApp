import React from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import { connect } from "react-redux";
import { updateState_PM1 } from "./../../../redux-persist/redux/exercices";

class Closing_Screen_PM1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname,
      exercice_state_PM1: "completed"
    };
  }

  handleSubmit = () => {
    const exercice_state_PM1 = this.state.exercice_state_PM1;
    this.setState({ exercice_state_PM1: exercice_state_PM1 });
    this.props.dispatch(updateState_PM1(this.state.exercice_state_PM1));
    this.props.navigation.push("Home");
  };

  render() {
    return (
      <>
        <Image
          source={require("./../../../assets/images/SuccessPM1.png")}
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

export default connect(mapStateToProps)(Closing_Screen_PM1);
