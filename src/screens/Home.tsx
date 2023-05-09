import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Products from '../../Products.json'
import { Product } from '../components/Product';

interface Props {
    navigateToDetails: (product: any) => void;
}

export const Home = ({ navigateToDetails } : Props) => {
  return  (
    <View style={styles.container}>
        <FlatList
            keyExtractor={(item) => String(item.ProductID)}
            data={Products}
            renderItem={({item}) => (<Product name={item.Name} price={item.Price} retailPrice={item['Retail Price']} navigateToDetails={() => navigateToDetails(item)}/>)}
            style={styles.productsList}
        />    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productsList: {
        height: '100%',
        width: '100%'
    }
})
