import { StyleSheet } from 'react-native'

const defaultStyle = StyleSheet.create({
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        marginBottom: 56,
        alignSelf: 'stretch',
    },
    button_primary: {
        backgroundColor: '#2C3B51',
        borderWidth: 2,
        borderColor: '#2C3B51',
        borderRadius: 99,
        overflow: 'hidden',
        padding: 20,
        justifyContent: 'center',
    },
    button_exercice: {
        backgroundColor: '#2C3B51',
        borderWidth: 2,
        borderColor: '#2C3B51',
        borderRadius: 99,
        overflow: 'hidden',
        padding: 20,
        justifyContent: 'center',
    },
    button_text_primary: {
        color: '#FDFDF7',
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'roboto-black',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    button_text_exercice: {
        color: '#FDFDF7',
        fontSize: 17,
        textAlign: 'left',
        fontFamily: 'roboto-black',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    button_secondary: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 99,
        overflow: 'hidden',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginBottom: 15,
    },
    button_text_secondary: {
        color: '#2C3B51',
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'roboto-black',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
})

export { defaultStyle } 