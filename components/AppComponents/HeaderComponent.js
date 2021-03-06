import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Header } from "react-navigation";
import { View, Platform, TouchableOpacity, Alert } from "react-native";
import * as Progress from "react-native-progress";

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  render() {
    const { goBack } = this.props.navigation;

    const headerProps = {
      progress: this.props.progress,
      disabledProgress: this.props.disabledProgress,
      disabledBack: this.props.disabledBack,
      disabledClose: this.props.disabledClose,
      colorIcons: this.props.colorIcons,
      colorProgress: this.props.colorProgress,
      goBackLink: this.props.goBackLink
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
        {headerProps.disabledProgress ? null : (
          <Progress.Bar
            progress={headerProps.progress}
            borderWidth={0}
            borderRadius={0}
            width={null}
            height={10}
            color={headerProps.colorProgress}
            unfilledColor={"rgba(255, 255, 255, 1)"}
            animated={true}
          />
        )}

        {headerProps.disabledBack ? null : (
          <TouchableOpacity
            onPress={() => goBack(null)}
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
            style={{ position: "absolute", left: 20, top: 20 }}
          >
            <Ionicons
              name="md-arrow-back"
              size={32}
              color={headerProps.colorIcons}
            />
          </TouchableOpacity>
        )}

        {headerProps.disabledClose ? null : (
          <TouchableOpacity
            onPress={headerProps.goBackLink}
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
            style={{ position: "absolute", right: 30, top: 20 }}
          >
            <Ionicons
              name="md-close"
              size={32}
              color={headerProps.colorIcons}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
