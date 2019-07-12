import React, { PureComponent } from "react";
import TabItem from "./TabItem";
import { StyleSheet, View, Dimensions } from "react-native";

class TabBar extends PureComponent {
  render() {
    const { navigation } = this.props;

    const { routes, index } = navigation.state;
    console.log(routes);

    return (
      <View style={styles.tab_bar}>
        {routes.map((route, i) => (
          <TabItem
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
    //bottom: Dimensions.get("window").height/2,
    height: 50,
    backgroundColor: "#F4F1DE",
    flexDirection: "row"
  }
});

export default TabBar;
