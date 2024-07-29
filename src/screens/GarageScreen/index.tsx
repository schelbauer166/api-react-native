import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import { styles } from './style';
import { CardView } from '../../components/CardView';


export function GarageScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.cameraBox}>
                <CardView />
            </View>

        </View>

    );
}