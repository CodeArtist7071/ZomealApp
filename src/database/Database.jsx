import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Card } from '@gluestack-ui/themed';

const Database = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(''); // Add an error state

  useEffect(() => {
    const subscriber = firestore()
      .collection('Users') // Replace 'YourCollectionName' with your collection name
      .onSnapshot(querySnapshot => {
        const items = [];
        querySnapshot.forEach(documentSnapshot => {
          items.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setItems(items);
        setLoading(false); // Data fetched, set loading to false
      }, err => {
        setError(err.toString()); // Handle potential errors
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }

  return (
    <Card style={styles.container}>
      {items.map(item => (
        <View key={item.key} style={styles.item}>
          <Text>{item.name}</Text> {/* Adjust field names based on your Firestore collection */}
        </View>
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 10,
  },
  error: {
    color: 'red',
  },
});

export default Database;
