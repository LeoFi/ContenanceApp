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
    container_scroll: {
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        flex: 1,
        alignSelf: "stretch",
    },
    center: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: "stretch",
    },
    top: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: "stretch",
    },
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: "stretch",
    },
    inline: {
        flex: 1,
        flexDirection:'row-reverse', 
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        paddingTop: 20,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
    },
    keyboard_view: {
        flex: 1,
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
    text_scroll: {
        color: '#2C3B51',
        fontSize: 19,
        lineHeight: 25,
        textAlign: 'left',
        fontFamily: 'roboto-regular',
    },
    codeInput: {
        marginTop: 43,
        alignSelf: "stretch",
        textAlign: 'center',
        height: 40,
        fontSize: 19,
        borderBottomWidth: 2,
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