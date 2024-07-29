import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8,

    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%',
        resizeMode: 'contain',

    },
    imageLogo: {
        flex: 1,
        width: "65%",
        resizeMode: 'contain'
    },
    carBrand: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '400',
        fontStyle: 'italic',

    },
    carName: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',

    },
    carImage: {
        flex: 1,
        resizeMode: 'contain'
    },
    changeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        alignItems: 'center'

    },
    value: {
        color: '#fff',
        fontSize: 20
    }

});