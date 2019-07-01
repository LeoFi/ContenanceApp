import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
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
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    keyboard_view: {
        flex: 1,
        alignSelf: "stretch",
    },
    intro_header: {
        color: '#2C3B51',
        fontSize: 34,
        lineHeight: 37,
        textAlign: 'left',
        fontFamily: 'roboto-black',
        paddingBottom: 10,
    },
    header: {
        color: '#2C3B51',
        fontSize: 34,
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
        paddingBottom: 24,
    },
    intro_text: {
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        textAlign: 'left',
        fontFamily: 'roboto-regular',
    },
    intro_text_background_color: {
        backgroundColor: 'rgba(155, 81, 224, 0.2)',
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        textAlign: 'left',
        fontFamily: 'roboto-regular',
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