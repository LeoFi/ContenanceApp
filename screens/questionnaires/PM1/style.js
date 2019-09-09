import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch"
  },
  container_finish: {
    paddingTop: 0,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    marginTop: -10,
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch"
  },
  tap_text: {
    color: "rgba(44, 59, 81, 0.4)",
    fontSize: 13,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    letterSpacing: 1.15
  },
  container_left: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    //alignItems: "center",
    alignSelf: "stretch"
  },
  skip: {
    textAlign: "left",
    alignSelf: "stretch"
  },
  bottom_button: {
    alignSelf: "stretch",
    justifyContent: "flex-end"
  },
  skip_text: {
    color: "#2C3B51",
    fontSize: 13,
    textTransform: "uppercase",
    fontFamily: "roboto-bold",
    paddingBottom: 25,
    textAlign: "right"
  },
  image_background: {
    width: "100%",
    backgroundColor: "#F4F1DE",
    top: 0,
    left: 0,
    right: 0
  },
  container_scroll: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignSelf: "stretch"
  },
  center: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "stretch"
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  middle: {
    position: "relative",
    flexDirection: "row",
    //alignSelf: 'flex-start',
    alignSelf: "stretch",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30
  },
  inline: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20
  },
  bottom: {
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  keyboard_view: {
    flex: 1,
    alignSelf: "stretch"
  },
  header: {
    color: "#2C3B51",
    fontSize: 34,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 10
  },
  header_left: {
    color: "#2C3B51",
    fontSize: 34,
    lineHeight: 37,
    textAlign: "left",
    fontFamily: "roboto-black",
    paddingBottom: 10,
    alignSelf: "stretch"
  },
  header_left_padding: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "left",
    fontFamily: "roboto-black",
    paddingBottom: 30,
    alignSelf: "stretch"
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular"
  },
  text_left: {
    //flex: 1,
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch"
  },
  text_left_small: {
    flex: 1,
    color: "#2C3B51",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch"
  },

  text_left_small_center: {
    flex: 1,
    color: "#B8BAB4",
    fontSize: 15,
    lineHeight: 16,
    textAlign: "center",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    paddingTop: 10
  },
  text_scroll: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular"
  },
  codeInput: {
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#E2DFD1",
    borderRadius: 7,
    textAlign: "center",
    height: 49,
    fontSize: 19
  },
  codeInputSU: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#E2DFD1",
    flex: 1,
    borderRadius: 7,
    textAlign: "center",
    height: 49,
    fontSize: 19,
    marginRight: 5
  },
  codeInputLeft: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#E2DFD1",
    flex: 1,
    borderRadius: 7,
    textAlign: "center",
    height: 49,
    fontSize: 19,
    marginRight: 5
  },
  codeInputRight: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#E2DFD1",
    flex: 1,
    borderRadius: 7,
    textAlign: "center",
    height: 49,
    fontSize: 19,
    marginLeft: 5
  },
  usernameInput: {
    marginTop: 43,
    marginBottom: 43,
    alignSelf: "stretch",
    textAlign: "center",
    height: 40,
    fontSize: 19,
    borderBottomWidth: 2
  },
  question: {
    flex: 1,
    alignSelf: "stretch"
  },
  top_security_agreements: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    marginTop: -40,
    flexDirection: "row-reverse"
  },
  close: {
    justifyContent: "flex-start",
    alignSelf: "stretch",
    paddingTop: 20,
    zIndex: 1,
    left: 20
  },
  text_bold: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    fontFamily: "roboto-bold",
    alignSelf: "stretch",
    textAlign: "left"
  },
  link_text: {
    color: "#2C3B51",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    paddingBottom: 10
  }
});

export { styles };
