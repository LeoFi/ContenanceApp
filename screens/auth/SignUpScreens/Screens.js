import React from 'react'

export default function Screens() {
    return (
        <View style={styles.container}>

                <Text style={styles.header}>Create an Account</Text>
                <Text style={styles.text}>Create an account to start your journey. </Text>

                <TextInput style={styles.usernameInput}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({ email: text }) }}
                    placeholder="Username"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <View style={{ paddingTop: 10 }} />

                <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                    placeholder="Enter Code"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <View style={{ paddingTop: 10 }} />

                <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={this.state.passwordConfirm}
                    onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                    placeholder="Password (confirm)"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <PrimaryButton label='Sign Up' onPress={() => {
                    this.props.navigation.navigate('Signup_Second');
                }} />

            </View>
    )
}
