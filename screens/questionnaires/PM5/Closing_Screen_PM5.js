import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { PrimaryButton, SecondaryButton, GreyInputButton } from '../../../components/AppComponents';
import { styles } from "./style";
import { connect } from "react-redux";


class Closing_Screen_PM5 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_left}>You finished this module, {this.props.user.nickname}.</Text>

        <Text style={styles.text_left}>
          {"\n"}You’re done and ready for the next module, starting tomorrow.
        </Text>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Done"
            isBottom={true}
            onPress={() => {
                this.props.navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Closing_Screen_PM5);
