import React from 'react';
import { Alert, BackHandler, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    product: any;
    goBack: () => void;
}

export const Details = ({ product, goBack }: Props) => {

    function getBadges() {
        const badges = product["Badges"].split("|")
        return badges
    }

    function getColors() {
        const colors = product["Color"].split("|")
        return colors;
    }

    function handleProductAdd() {
        Alert.alert("Produto adicionado!")
    }

    BackHandler.addEventListener('hardwareBackPress', function () {
        goBack()
        return true;
    });

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {
                    getBadges().map((badge: string) => (
                        !!badge ?
                        <View style={styles.badgeBox} key={badge}>
                            <Text>{badge}</Text>
                        </View>
                        : null
                    ))
                }
            </View>
            <View>
                <Text>Brand: {product["Brand"]}</Text>
                <Text>Color: {getColors().map((color: string) => `${color} `)}</Text>
            </View>
            <View style={styles.mainInfoContainer}>
                <View>
                    <Text style={styles.productNameText} >{product["Name"]}</Text>
                </View>
                <View style={styles.productPriceContainer}>
                    <Text>${product["Price"]}</Text>
                    <Text style={styles.lastPriceText}>${product["Retail Price"]}</Text>
                </View>
            </View>
            <View style={styles.buttonAndTextWrapper}>
                {
                    !(product["Stock"] > 0) ?
                        <Text style={styles.outOfStockText}>Out of Stock</Text> : null
                }
                <TouchableOpacity style={styles.detailsButton} onPress={handleProductAdd}>
                    <Text style={styles.buttonText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
            <Text>
                {product["Description"]}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        gap: 8
    },
    imageContainer: {
        width: '100%',
        height: '35%',
        backgroundColor: 'blue',
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 8,
        padding: 20,
    },
    mainInfoContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    productNameText: {
        fontSize: 18,
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
        height: 50,
        width: '80%',
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
    },
    outOfStockText: {
        fontSize: 16,
        color: 'red',
    },
    buttonAndTextWrapper: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeBox: {
        height: 50,
        width: 100,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})