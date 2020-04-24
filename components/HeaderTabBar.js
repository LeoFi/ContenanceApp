import React, { PureComponent } from "react";
import HeaderTabItem from "./HeaderTabItem";
import { StyleSheet, View, Dimensions, Text } from "react-native";

class HeaderTabBar extends PureComponent {
  render() {
    const { navigation } = this.props;

    const { routes, index } = navigation.state;
    //console.log(routes);

    return (
      <View style={styles.tab_bar}>
      
        {routes.map((route, i) => (
          <HeaderTabItem
            navigation={navigation}
            key={route.routeName}
            {...route}
            isActive={index === i}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab_bar: {
    marginTop: 30,
    height: 70,
    //justifyContent: "flex-end",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    zIndex: 1,
  }
});

export default HeaderTabBar;
