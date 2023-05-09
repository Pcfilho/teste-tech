import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    name: string;
    price: number;
    retailPrice: number,
    navigateToDetails: () => void
};

export const Product = ({ name, price, retailPrice, navigateToDetails }: Props) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.imageContainer} />
            <View style={styles.productDetailsContainer}>
                <Text>{name}</Text>
                <View style={styles.productPriceContainer}>
                    <Text>${price}</Text>
                    <Text style={styles.lastPriceText}>${retailPrice}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetails()}>
                <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 12,
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderRadius: 8,
        padding: 8
    },
    imageContainer: {
        width: '20%',
        height: '100%',
        backgroundColor: 'blue',
        borderWidth: 1,
    },
    productDetailsContainer: {
        flex: 1,
        paddingHorizontal: 8,
        gap: 8
    },
    productPriceContainer: {
        flexDirection: 'row',
        gap: 4
    },
    lastPriceText: {
        fontSize: 10,
        textDecorationLine: "line-through"
    },
    detailsButton: {
        height: '40%',
        width: '25%',
        backgroundColor: 'green',
        borderWidth: 1,
        borderRadius: 12,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 10,
        color: 'white'
    }
})
