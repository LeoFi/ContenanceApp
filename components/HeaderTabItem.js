import React, { PureComponent } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions
} from "react-native";
//import { Box, Text } from 'react-native-design-utility';

import { JourneyHeaderIcons } from "../assets/images/TabBarIcons/images";

class HeaderTabItem extends PureComponent {
  handlePress = () => {
    this.props.navigation.navigate(this.props.routeName);
  };

  componentDidUpdate = () => {
    const header = {
      Observe: require("./../assets/images/phase_observe.png"),
      Reflect: require("./../assets/images/phase_observe.png"),
      Vision: require("./../assets/images/phase_observe.png"),
      Plan: require("./../assets/images/phase_observe.png"),
      Support: require("./../assets/images/phase_observe.png"),
    };
  };

  render() {
    const { routeName, isActive } = this.props;

    const icon =
      JourneyHeaderIcons[isActive ? "active" : "inactive"][routeName];
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
    paddingTop: 5
  },
  tab_bar_icon: {
    marginBottom: 3
  },
  center: {
    flex: 1,
    position: "relative",
    width: "100%"
  }
});

export default HeaderTabItem;
