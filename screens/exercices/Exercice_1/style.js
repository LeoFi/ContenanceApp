import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
    },
    container_background: {
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        backgroundColor: "#F4F1DE",
    },
    container_background_color: {
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        backgroundColor: "#A878CE",
    },
    scroll: {
        flex: 1,
        alignSelf: "stretch",
    },
    nextscreen: {
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
    },
    image: {
        flex: 1,
        alignItems: "center",
    },
    image_absolute: {
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
    top_security_agreements: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 0,
    },
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: "stretch",
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    keyboard_view: {
        flex: 1,
        alignSelf: "stretch",
    },
    intro_header: {
        flex: 1,
        color: '#2C3B51',
        fontSize: 30,
        lineHeight: 37,
        textAlign: 'left',
        fontFamily: 'roboto-black',
        paddingBottom: 10,
    },
    header: {
        color: '#2C3B51',
        fontSize: 30,
        lineHeight: 37,
        textAlign: 'center',
        fontFamily: 'roboto-black',
        paddingBottom: 10,
    },
    text: {
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: 'roboto-regular',
    },
    tap_text: {
        color: 'rgba(44, 59, 81, 0.4)',
        fontSize: 19,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: 'roboto-regular',
        paddingTop: 50,
    },
    intro_text: {
        flex: 1,
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        fontFamily: 'roboto-regular',
        alignSelf: "stretch",
        textAlign: 'left',
    },
    intro_text_bold: {
        flex: 1,
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        fontFamily: 'roboto-medium',
        alignSelf: "stretch",
        textAlign: 'left',
    },
    usernameInput: {
        marginTop: 43,

        textAlign: 'center',
        height: 40,
        fontSize: 19,
        borderBottomWidth: 2,
    },
})

export { styles } 