import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: '#01a6b3',
        width: '80%',
        height: 35,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',

    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
        paddingLeft: 15
    }
});