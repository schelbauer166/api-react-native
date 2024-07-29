import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';

import { styles } from './style';
import logo from './../../../assets/logo.png'
import { Divider } from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import { BuyButton } from '../BuyButton';
import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';

export function CardView() {
    const [carData, setCarData] = useState<CarModel | null>(null)

    useEffect(() => {
        async () => await loadCarData(1, setCarData)
        console.log(carData)
    }, [])

    const renderLogoBox = () => (

        <View style={styles.logoContainer}>
            <Image source={logo} style={styles.imageLogo}></Image>
        </View>
    )

    const renderCarDetails = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.carBrand}>Lamborguini</Text>
            <Text style={styles.carName}>MODEL</Text>
        </View>
    )

    const renderCarImage = () => (
        <Image style={styles.carImage}
            source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }}
        ></Image>
    )

    const renderCarChange = () => (
        <View style={styles.changeContainer}>
            <Button onPress={() => handlePreviousItem(carData, setCarData)} color={'#01a6b3'} title='<' ></Button>
            <Text style={styles.value}>$500,000</Text>
            <Button onPress={() => handleNextItem(carData, setCarData)} color={'#01a6b3'} title='>'></Button>
        </View>
    )

    return (
        <View style={styles.imageContainer}>
            {renderLogoBox()}
            <Divider />
            {renderCarDetails()}
            {renderCarImage()}
            <Divider />
            <BuyButton />
            {renderCarChange()}
        </View>
    );
}