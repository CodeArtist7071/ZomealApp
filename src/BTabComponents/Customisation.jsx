import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Customisation = () => {
  const [riceQuantity, setRiceQuantity] = useState(0);
  const [chickenQuantity, setChickenQuantity] = useState(0);

  const ricePrice = 10;
  const chickenPrice = 70;

  const incrementRice = () => {
    setRiceQuantity(riceQuantity + 1);
  };

  const decrementRice = () => {
    if (riceQuantity > 0) {
      setRiceQuantity(riceQuantity - 1);
    }
  };

  const incrementChicken = () => {
    setChickenQuantity(chickenQuantity + 1);
  };

  const decrementChicken = () => {
    if (chickenQuantity > 0) {
      setChickenQuantity(chickenQuantity - 1);
    }
  };

  const totalPrice = (ricePrice * riceQuantity) + (chickenPrice * chickenQuantity);

  return (
    
    <View style={styles.card}>
      <View style={styles.productRow}>
        <Text>Rice - Rs. {ricePrice}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={decrementRice} style={styles.button}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{riceQuantity}</Text>
          <TouchableOpacity onPress={incrementRice} style={styles.button}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productRow}>
        <Text>Chicken - Rs. {chickenPrice}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={decrementChicken} style={styles.button}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{chickenQuantity}</Text>
          <TouchableOpacity onPress={incrementChicken} style={styles.button}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.totalPrice}>Total Price: Rs. {totalPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    marginTop:200,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginHorizontal: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Customisation;
