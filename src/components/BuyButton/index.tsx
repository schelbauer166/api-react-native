import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';

export function BuyButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log("Comprado")} style={styles.buttonContainer}>
                <AntDesign name="shoppingcart" size={24} color="#fff" />
                <Text style={styles.buttonText}>Buy This</Text>
            </TouchableOpacity>
        </View>
    );
}