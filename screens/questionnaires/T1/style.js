import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    width: Dimensions.get("window").width
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
  container_scrollview: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40
  },
  container_intro: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40
  },
  container_scrollview_content: {
    paddingTop: 50,
    paddingBottom: 40,
    flexGrow: 1,
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexWrap: "wrap"
  },
  skip: {
    textAlign: "left",
    alignSelf: "stretch"
  },
  skip_text: {
    color: "#2C3B51",
    fontSize: 13,
    textTransform: "uppercase",
    fontFamily: "roboto-bold",
    paddingBottom: 25,
    textAlign: "right"
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
    justifyContent: "flex-end",
    alignSelf: "stretch",
    width: "100%",
    textAlign: "center"
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
  header_modal: {
    color: "#2C3B51",
    fontSize: 34,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 30
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
  tap_text: {
    color: "rgba(44, 59, 81, 0.4)",
    fontSize: 13,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    letterSpacing: 1.15
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    alignSelf: "stretch"
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
    color: "#B8BAB4",
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
  codeInputBig: {
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#E2DFD1",
    borderRadius: 7,
    textAlign: "center",
    height: 100,
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
    alignSelf: "stretch",
    width: "100%"
  },
  question_center: {
    flex: 1,
    alignSelf: "stretch",
    width: "100%",
    justifyContent: "center"
  },
  top_security_agreements: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    marginTop: -40,
    flexDirection: "row-reverse",
    backgroundColor: "#F4F1DE"
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
  text_bold_center: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    fontFamily: "roboto-bold",
    alignSelf: "stretch",
    textAlign: "center",
    paddingBottom: 20
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
