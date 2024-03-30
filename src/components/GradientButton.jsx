import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ title, onPress, isSelected }) => {
  const colorscheme = isSelected ? ['#FF5733', '#FFC300'] : ['#f7b733', '#f7b733'];

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={colorscheme} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius:30,
    width:100,
    height:50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    marginTop:15
  },
});

export default GradientButton;
