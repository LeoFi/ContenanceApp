import React, { PureComponent } from "react";
import { Image, TouchableOpacity, StyleSheet, View } from "react-native";
//import { Box, Text } from 'react-native-design-utility';

import { JourneyHeaderIcons } from "../assets/images/TabBarIcons/images";

class JourneyHeaderTabItem extends PureComponent {
  handlePress = () => {
    this.props.navigation.navigate(this.props.routeName);
  };

  render() {
    const { routeName, isActive } = this.props;

    const icon = JourneyHeaderIcons[isActive ? "active" : "inactive"][routeName];
    return (
      <View style={styles.tab_bar_item}>
        <TouchableOpacity onPress={this.handlePress} style={styles.button}>
          <View style={styles.tab_bar_icon}>
            <Image source={icon} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab_bar_item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0
  },
  tab_bar_icon: {
    marginBottom: 3
  }
});

export default JourneyHeaderTabItem;
