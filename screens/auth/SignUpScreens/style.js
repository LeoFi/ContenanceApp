import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        alignItems: "flex-start",
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
    close: {
        justifyContent: 'flex-start',
        alignSelf: "stretch",
        paddingTop: 10,
        zIndex: 1,
        right: 0,
    },
    center: {
        flex: 1,
        //justifyContent: 'flex-end',
        alignSelf: "stretch",
    },
    top: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: "stretch",
    },
    top_security_agreements: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: "stretch",
        marginTop: -40,
        flexDirection: 'row-reverse',
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
        marginTop: 40,
        marginBottom: 20,
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