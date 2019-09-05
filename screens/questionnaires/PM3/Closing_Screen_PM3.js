import React from "react";
import { View, Text, TextInput, ScrollView, Image, StatusBar } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";
import { connect } from "react-redux";
import { updateState_Ex13 } from "./../../../redux-persist/redux/exercices";


class Closing_Screen_PM3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname,
      exercice_state_13: "locked",
    };
  }

  handleSubmit = () => {
    if (this.props.exercices.exercice_state_13 === undefined) {
      const exercice_state_13 = this.state.exercice_state_13;
      this.setState({ exercice_state_13: exercice_state_13 });
      this.props.dispatch(updateState_Ex13(this.state.exercice_state_13));
    } else {
      //
    }
    this.props.navigation.push("Home");
  };

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden />
        <ScrollView>
        <Text style={styles.header_left}>You finished this module, {this.props.user.nickname}.</Text>

        <Text style={styles.text_left}>
          {"\n"}You’re done and ready for the next module, starting tomorrow.
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
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  exercices: state.exercices
});

export default connect(mapStateToProps)(Closing_Screen_PM3);
