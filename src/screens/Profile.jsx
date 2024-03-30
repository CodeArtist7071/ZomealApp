import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useUser } from '../context/UserContext';


const Profile = () => {
  const [userData, setUserData] = useState({});
  const [editableFields, setEditableFields] = useState({}); // Keep track of editable fields

  useEffect(() => {
    // Fetch user profile data from Firestore
    const fetchUserData = async () => {
      try {
        const userDoc = await firestore().collection('users').doc('user_id').get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = (fieldName) => {
    setEditableFields({ ...editableFields, [fieldName]: true });
  };

  const handleSave = async (fieldName, newValue) => {
    try {
      await firestore().collection('users').doc('user_id').update({
        [fieldName]: newValue,
      });
      setEditableFields({ ...editableFields, [fieldName]: false });
      // Update local state with new value
      setUserData({ ...userData, [fieldName]: newValue });
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <View>
      <TextInput
        value={userData.name || ''}
        onChangeText={(value) => handleSave('name', value)}
        editable={editableFields.name || false}
      />
      {!editableFields.name && (
        <TouchableOpacity onPress={() => handleEdit('name')}>
          <Text>Edit</Text>
        </TouchableOpacity>
      )}

      <TextInput
        value={userData.email || ''}
        onChangeText={(value) => handleSave('email', value)}
        editable={editableFields.email || false}
      />
      {!editableFields.email && (
        <TouchableOpacity onPress={() => handleEdit('email')}>
          <Text>Edit</Text>
        </TouchableOpacity>
      )}

      {/* Add more input fields for other user profile data */}
    </View>
  );
};

export default Profile;
