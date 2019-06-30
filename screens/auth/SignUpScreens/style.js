import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop:80,
        paddingLeft:30,
        paddingRight:30,
        alignItems:"center",
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
    usernameInput: {
        marginTop: 43,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        textAlign: 'center',
        height: 40,
        fontSize: 19,
        borderBottomWidth: 2,
    },
})

export { styles } 