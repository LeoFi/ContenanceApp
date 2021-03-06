import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    paddingTop: 80,
    paddingBottom: 40
  },
  container_scroll: {
    flex: 1,
    flexGrow: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 100
  },
  container_scroll_img_absolute: {
    //width: Dimensions.get("window").width,
    //height: Dimensions.get("window").height,
    //flex: 1,
    alignItems: "center",
    alignSelf: "flex-start"
  },
  scrollview_height: {
    flex: 1,
    height: Dimensions.get("window").height
  },
  container_tap: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    //paddingBottom: 200,
    height: Dimensions.get("window").height
  },
  container_background: {
    flex: 1,
    backgroundColor: "#F4F1DE"
  },
  container_background_color: {
    backgroundColor: "#A878CE"
  },
  container_background_inverted: {
    flex: 1,
    backgroundColor: "#A28AD4"
  },
  scroll: {
    flex: 1,
    alignSelf: "stretch"
  },
  nextscreen: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch"
  },
  image: {
    flex: 1,
    alignItems: "center"
  },
  image_height: {
    //position: "absolute",
    width: Dimensions.get("window").width,
    top: 0
  },
  image_absolute: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: Dimensions.get("window").width
  },
  image_background: {
    width: "100%",
    backgroundColor: "#F4F1DE",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background_intro: {
    backgroundColor: "#F6B563",
    height: Dimensions.get("window").height
  },
  full_background: {
    width: "100%",
    backgroundColor: "#F4F1DE",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  top_security_agreements: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 0
  },
  middle: {
    position: "relative",
    flexDirection: "column",
    //alignSelf: 'flex-start',
    alignSelf: "stretch",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30
  },
  bottom: {
    position: "relative",
    alignSelf: "stretch",
    //paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    bottom: 30
  },
  keyboard_view: {
    flex: 1,
    alignSelf: "stretch"
  },
  intro_header: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: "roboto-black",
    paddingBottom: 10
  },
  intro_header_light: {
    color: "#F4F1DE",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: "roboto-black",
    paddingBottom: 10
  },
  intro_header_day_light: {
    color: "#F4F1DE",
    fontSize: 23,
    lineHeight: 23,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: "roboto-regular"
  },
  intro_header_day: {
    color: "#2C3B51",
    fontSize: 23,
    lineHeight: 23,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: "roboto-regular"
  },
  header: {
    color: "#2C3B51",
    fontSize: 34,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 10
  },
  sub_header: {
    color: "#2C3B51",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 10
  },
  sub_header_left: {
    color: "#2C3B51",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: "roboto-black",
    paddingBottom: 10
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular"
  },
  tap_text: {
    color: "rgba(44, 59, 81, 0.4)",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular"
  },
  tap_pos_relative: {
    alignSelf: "stretch",
    paddingTop: 50,
    paddingBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  intro_text_light: {
    color: "#F4F1DE",
    fontSize: 19,
    lineHeight: 25,
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    textAlign: "left"
  },
  intro_text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    textAlign: "left"
  },
  intro_text_bold: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    fontFamily: "roboto-bold",
    alignSelf: "stretch",
    textAlign: "left"
  },
  usernameInput: {
    marginTop: 43,
    textAlign: "center",
    height: 40,
    fontSize: 19,
    borderBottomWidth: 2
  },
  button_grey_input_text: {
    color: "#2C3B51",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    fontWeight: "normal"
  },
  text_input_button: {
    flex: 1,
    color: "#2C3B51",
    backgroundColor: "#E2DFD1",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 99,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    fontWeight: "normal"
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputIcon: {
    padding: 10,
    position: "absolute",
    right: 5,
    zIndex: 1,
    overflow: "visible",
  }
});

export { styles };
