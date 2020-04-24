import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignItems: "flex-start",
    alignSelf: "stretch"
  },
  container_scrollview: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40
  },
  container_scrollview_content: {
    //height: Dimensions.get("window").height - 125,
    flexGrow: 1,
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexWrap: "wrap"
  },
  container_scrollview_content_intro: {
    paddingTop: 50,
    paddingBottom: 40,
    flexGrow: 1,
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexWrap: "wrap"
  },
  container_scrollview_image: {
    paddingTop: 60,
    paddingBottom: 40,
    flexGrow: 1,
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexWrap: "wrap"
  },
  container_scroll: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    //flex: 1,
    alignSelf: "stretch"
  },
  close: {
    position: "absolute",
    right: 30,
    top: 30,
    zIndex: 1
  },
  center: {
    //flex: 1,
    //justifyContent: 'flex-end',
    alignSelf: "stretch"
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  top_security_agreements: {
    //flex: 1,
    backgroundColor: "#FDFDF7",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    height: Dimensions.get("window").height
    //marginTop: -40,
  },
  middle: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch"
  },
  inline: {
    flexDirection: "row",
    //flexWrap: "wrap",
    textAlign: "left",
    paddingTop: 10,
    alignSelf: "stretch",
    width: Dimensions.get("window").width - 60,
    justifyContent: "center"
  },
  bottom: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    width: "100%",
    textAlign: "center",
    paddingTop: 20
    //paddingBottom: 40
  },
  bottom_fix: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    width: "100%",
    textAlign: "center"
    //paddingTop: 20,
    //paddingBottom: 40
  },
  keyboard_view: {
    flex: 1
  },
  keyboardavoiding_view: {
    //flex: 1
    justifyContent: "flex-end",
  },
  header: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 10,
    width: "100%"
  },
  header_modal: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    //paddingTop: 30,
    paddingBottom: 30,
    width: "100%"
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    //width: "100%"
  },
  text_account: {
    color: "#2C3B51",
    fontSize: 19,
    paddingTop: 10,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular"
  },
  text_small: {
    color: "#2C3B51",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
    fontFamily: "roboto-regular",
    paddingTop: 30
  },
  text_header: {
    color: "#2C3B51",
    fontSize: 22,
    lineHeight: 30,
    textAlign: "center",
    fontFamily: "roboto-regular",
    width: "100%"
  },
  text_header_bold: {
    color: "#2C3B51",
    fontSize: 22,
    lineHeight: 30,
    textAlign: "center",
    fontFamily: "roboto-bold",
    width: "100%"
  },
  text_subheader: {
    color: "#2C3B51",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: "roboto-regular",
    width: "100%"
  },
  text_scroll: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular"
  },
  text_modal: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    width: "100%"
  },
  codeInputLeft: {
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#E2DFD1",
    borderRadius: 7,
    textAlign: "left",
    height: 49,
    fontSize: 19,
    alignSelf: "stretch",
    paddingLeft: 20,
    width: "100%"
  },
  personalDataInput: {
    fontFamily: "roboto-regular",
    color: "#2C3B51",
    marginTop: 40,
    textAlign: "left",
    height: 49,
    fontSize: 30,
    alignSelf: "stretch",
    width: "100%"
  },
  personalDataInput_underline: {
    borderBottomWidth: 2,
    borderColor: "#2C3B51",
    fontFamily: "roboto-regular",
    color: "#2C3B51",
    marginTop: 40,
    textAlign: "left",
    height: 35,
    fontSize: 18,
    alignSelf: "stretch",
    width: "100%"
  },
  link_text: {
    color: "#2C3B51",
    fontSize: 13,
    lineHeight: 25,
    textAlign: "center",
    paddingTop: 15,
    fontFamily: "roboto-regular",
    width: "100%"
  },
  codeInput: {
    //marginTop: 40,
    backgroundColor: "#E2DFD1",
    borderRadius: 7,
    textAlign: "center",
    height: 49,
    fontSize: 19,
    alignSelf: "stretch"
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
  tap_text: {
    color: "rgba(44, 59, 81, 0.4)",
    fontSize: 13,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    letterSpacing: 1.15
  }
});

export { styles };
