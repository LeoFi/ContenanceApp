import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
    },
    center: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    keyboard_view: {
        flex: 1,
        alignSelf: "stretch",
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
    usernameInput: {
        marginTop: 43,

        textAlign: 'center',
        height: 40,
        fontSize: 19,
        borderBottomWidth: 2,
    },
})

export { styles } 