import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { Details } from './src/screens/Details';
import { useEffect, useState } from 'react';

export default function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [product, setProduct] = useState({});

  function handleNavigate(newProduct: any) {
    setShowDetails(true);
    setProduct(newProduct)
  }

  return (
    <View style={styles.container}>
      {
        showDetails ?
        <Details product={product} goBack={() => setShowDetails(false)}/>
        :
        <Home navigateToDetails={handleNavigate} />
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
