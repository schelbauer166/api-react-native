import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e20',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraBox: {
        position: 'relative',
        width: "90%",
        height: '90%',
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden'
    }

});