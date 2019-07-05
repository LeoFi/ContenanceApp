import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Header } from "react-navigation";
import { View, Platform } from "react-native";
import * as Progress from "react-native-progress";

const HeaderComponent = props => {
  return (
    <View style={{ flex: 1, width: "100%", position: "absolute", left: 0, right: 0, }}>
      <Progress.Bar progress={0.5} borderWidth={0} borderRadius={0} width={null} height={10} color={'rgba(44, 59, 81, 1)'} unfilledColor={'rgba(255, 255, 255, 1)'} animated={true}/>
      <Ionicons style={{ position: "absolute", left: 20, top: 20 }} name="md-arrow-back" size={32} color="#2C3B51" />
      <Ionicons style={{ position: "absolute", right: 30, top: 20 }}  name="ios-arrow-back" size={32} color="#2C3B51" />
    </View>
  );
};

export default HeaderComponent;
