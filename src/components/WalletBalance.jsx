import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const WalletBalance = ({ userId }) => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        // Retrieve the user document based on the provided userId
        const userDoc = await firestore().collection('Users').doc(userId).get();
        const userData = userDoc.data();
        console.log (userData.walletBalance)
        // Check if userData exists and has the walletBalance field
        if (userData && userData.walletBalance !== undefined) {
          setBalance(userData.walletBalance);
        } else {
          // If walletBalance field is not present or undefined, set balance to 0
          setBalance(0);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user wallet balance:', error);
        setLoading(false);
      }
    };

    fetchBalance();
  }, [userId]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Wallet Balance: {balance}</Text>
    </View>
  );
};

export default WalletBalance;
