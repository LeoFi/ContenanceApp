import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        flex: 1,
        alignItems: "flex-start",
        alignSelf: "stretch",
    },
    container_scrollview: {
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
    },
    container_scrollview_content: {
        paddingTop: 80,
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
        alignSelf: "stretch",
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
        alignSelf: "stretch",
    },
    top: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: "stretch",
    },
    top_security_agreements: {
        //flex: 1,
        backgroundColor: "#F4F1DE",
        justifyContent: 'flex-start',
        alignSelf: "stretch",
        height: Dimensions.get("window").height,
        //marginTop: -40,
    },
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: "stretch",
    },
    inline: {
        flexDirection:'row', 
        //flexWrap: "wrap",
        textAlign: "left",
        paddingTop: 10,
        alignSelf: "stretch",
        width: Dimensions.get("window").width-60,
        justifyContent: "center"
    },
    bottom: {
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
    },
    keyboard_view: {
        flex: 1,
    },
    header: {
        color: '#2C3B51',
        fontSize: 30,
        lineHeight: 37,
        textAlign: 'center',
        fontFamily: 'roboto-black',
        paddingBottom: 10,
        width: '100%'
    },
    header_modal: {
        color: '#2C3B51',
        fontSize: 30,
        lineHeight: 37,
        textAlign: 'center',
        fontFamily: 'roboto-black',
        //paddingTop: 30,
        paddingBottom: 10,
        width: '100%'
    },
    text: {
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: 'roboto-regular',
        width: '100%'
    },
    text_scroll: {
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        textAlign: 'left',
        fontFamily: 'roboto-regular',
    },
    text_modal: {
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        textAlign: 'left',
        fontFamily: 'roboto-regular',
        width: '100%'
    },
    codeInputLeft: {
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: "#E2DFD1",
        borderRadius: 7,
        textAlign: 'left',
        height: 49,
        fontSize: 19,
        alignSelf: "stretch",
        paddingLeft: 20,
        width: '100%'
    },
    codeInput: {
        //marginTop: 40,
        backgroundColor: "#E2DFD1",
        borderRadius: 7,
        textAlign: 'center',
        height: 49,
        fontSize: 19,
        alignSelf: "stretch",
    },
    usernameInput: {
        marginTop: 43,
        marginBottom: 43,
        alignSelf: "stretch",
        textAlign: 'center',
        height: 40,
        fontSize: 19,
        borderBottomWidth: 2,
    },
})

export { styles } 