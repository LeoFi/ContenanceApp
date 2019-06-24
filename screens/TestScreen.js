import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { TestComponent } from './../components/AppComponents';

export default function TestScreen() {
  return (
    <View style={{paddingTop:20}}>
      <Text>Hello</Text>
      <TestComponent />
    </View>
  );
}

TestScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  
});
