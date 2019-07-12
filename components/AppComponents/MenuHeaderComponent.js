import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Header } from "react-navigation";
import { View, Platform, TouchableOpacity, Alert, Image } from "react-native";

import TabBar from './../TabBar';

export default class MenuHeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { goBack } = this.props.navigation;

    const menuHeaderProps = {
      disabledBack: this.props.disabledBack,
      headerTitle: this.props.headerTitle,
      color: this.props.color,
      imgSource: this.props.imgSource,
      imgStyle: this.props.imgStyle,
    };

    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          position: "absolute",
          left: 0,
          right: 0,
          zIndex: 100
        }}
      >
      <Image
            style={menuHeaderProps.imgStyle}
            source={menuHeaderProps.imgSource}
          />

        {menuHeaderProps.disabledBack ? null : (
          <TouchableOpacity
            onPress={() => goBack(null)}
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
            style={{ position: "absolute", left: 20, top: 20 }}
          >
            <Ionicons
              name="md-arrow-back"
              size={32}
              color="#2C3B51"
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
