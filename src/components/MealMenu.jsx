import { Card, Spinner, Text } from '@gluestack-ui/themed';
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Switch, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { dark, textColor } from '../constants/Stylesheet';
import firestore from '@react-native-firebase/firestore'
import CustomText from './CustomText';

const ToggleBackgroundCard = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [todaysMenu, setTodaysMenu] = useState({});
  const [loading, setLoading] = useState(true);
  const WeeklyMenuCollection = firestore().collection('weeklyMenu');


  useEffect(() => {
    const fetchTodaysMenu = async () => {
      try {
        const currentDate = new Date();
        const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDate.getDay()];
        const snapshot = await WeeklyMenuCollection.doc(currentDay).get();
        if (snapshot.exists) {
          setTodaysMenu(snapshot.data());
        } else {
          console.log('No menu found for', currentDay);
        }
      } catch (error) {
        console.error('Error fetching today\'s menu:', error); // Log error here
      } finally {
        setLoading(false);
      }
    };

    fetchTodaysMenu();
  }, []);

  const toggleBackground = () => {
    Animated.timing(animatedValue, {
      toValue: isEnabled ? 0 : 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const gradientColorsInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: isEnabled ? ['#f7971e', '#ffd200'] : ['#0f0c29', '#302b63'],
  });

  return (
    <View style={styles.container}>
      <CustomText fontSize={18.5} paddingAxisY={20} color={dark} text={"Today's Menu"}/>
      <Animated.View style={[styles.card, { backgroundColor: gradientColorsInterpolate }]}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            toggleSwitch();
            toggleBackground();
          }}
          value={isEnabled}
          style={styles.switch}
        />
        {(isEnabled)?(
          <>
            <Text style={{color:dark,fontSize:15.5,fontWeight:'500'}}>Lunch</Text>
            {/* <Image source={{uri:""}} /> */}
            {loading ? (
              <Spinner/>
            ) : (
                 todaysMenu.Lunch.map((item, index) => (
                <Text style={{color:dark}} key={index}>{item}</Text>
              ))
            )}
            <Card style={{position:'absolute',top:10,left:20,overflow:'hidden',width:40,height:40,backgroundColor:'yellow',borderRadius:50}}/>
            
          </>
          
        ):(
          <>
             <Text style={{color:textColor,fontSize:15.5, fontWeight:'500'}}>Dinner</Text>
          {/* <Image source={{uri:""}}/> */}
          {loading ? (
            <Spinner/>
          ) : (
             todaysMenu.Dinner.map((item,index) => (
              <Text style={{color:textColor}} key={index}>{item}</Text>
            ))
          )}
          </>
       
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width:'95%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  switch: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ToggleBackgroundCard;
