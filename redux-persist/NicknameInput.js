import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateNickname } from './redux/user';

class NicknameInput extends React.Component {
  state = {
    nickname: this.props.user.nickname || '',
  };

  handleChange = nickname => {
    this.setState({ nickname });
  };

  handleSubmit = () => {
    this.props.dispatch(updateNickname(this.state.nickname));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Choose a Nickname"
          onChangeText={this.handleChange}
          value={this.state.nickname}
        />

        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(NicknameInput);