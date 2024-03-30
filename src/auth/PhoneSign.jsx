import React, { useState, useEffect,useRef,useContext, createContext } from "react";
import { View, Text, TouchableOpacity, TextInput,Button,Keyboard } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import auth, { firebase } from '@react-native-firebase/auth';
import Verifycode from "../screens/Verifycode"
import Loginscreen from "../screens/Loginscreen";
import { Box, KeyboardAvoidingView, Spinner } from "@gluestack-ui/themed";
import { AnimatePresence, motion } from "framer-motion";
import CustomSpinner from "../components/CustomSpinner";
import { accentBg } from "../constants/Stylesheet";
import firestore from "@react-native-firebase/firestore"

const AnimatedKeyboard = motion(KeyboardAvoidingView)


const PhoneSignIn = ({navigation}) => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [number, setNumber] = useState('');
  const inputRefs = useRef([]);
  const [joinedCode, setJoinedCode] = useState('')
  const [verificationId, setVerificationId] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verifying, setVerifying] = useState(false)
  const [logging, setLogging] = useState(false)
  const [confirmation, setConfirmation] = useState(null);
  const [phone, setPhone] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(()=>{
    if(inputRefs.current[0]){
      inputRefs.current[0].focus()
    }
    },[])

  
    async function createUserDocument(userId) {
      const userRef = firestore().collection('users').doc(userId);
      
      try {
        const doc = await userRef.get();
        if (!doc.exists) {
          // The document does not exist, create a new one
          await userRef.set({
            phoneNumber, 
            createdAt: firestore.FieldValue.serverTimestamp(),
          });
          console.log('User document created successfully');
        } else {
          // The document already exists
          console.log('Document already exists. No need to create a new one.');
          navigation.navigate('Dashboard')
        }
      } catch (error) {
        console.error('Error accessing user document:', error);
      }
    }
    

  function onAuthStateChanged(user,phoneNumber) {
    // if (initializing) setInitializing(false);
    if (user) {
      // Handle successful login here
      console.log('User is logged in')
      setUser(user.uid)
      setNumber(user.number)
      createUserDocument(user.uid,phoneNumber)
      navigation.navigate('Dashboard')
    }else{
     console.log('User is not logged in')
    }
  }


async function signInWithPhoneNumber(phoneNumber) {
   const confirmation = await auth().signInWithPhoneNumber(phoneNumber,true);
    setConfirm(confirmation);
    console.log(confirmation);
  }
// Function to handle OTP resend
const resendOTP = async () => {
  try {
    const newConfirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirmation(newConfirmation);
    // OTP resent successfully
    console.log('OTP resent successfully');
    Alert.alert('Success', 'OTP resent successfully.');
  } catch (error) {
    // Handle OTP resend error
    console.error('Error resending OTP:', error);
    Alert.alert('Error', 'Failed to resend OTP. Please try again.');
  }
};

  async function confirmCode() {
    try {
      const verificationCode = code; // Store the current value of code
      await confirm.confirm(verificationCode); // Use the stored value
      const userdata = auth().currentUser.uid;
      const userdata2 = auth().currentUser.getIdToken(true)
      const userdata4 = auth().currentUser.getIdTokenResult(true)
      const numberData = auth().currentUser.phoneNumber //Retireve the phoneNumber
      setPhoneNumber(numberData)
      console.log(userdata,userdata2,phoneNumber);
      console.log('Good job! Code confirmed successfully.');
    } catch (error) {
      console.log('Error confirming code:', error.message);
      // Handle the error here, such as displaying an error message to the user
      console.log('code', error.verificationCode)
    }
    setLogging(true);
    setVerifying(true);
    setTimeout(() => {
      setLogging(false);
    }, 2000);
    setTimeout(() => {
      setVerifying(false)
    }, 2000)
    // Example delay of 2 seconds
  }

  
  function changeText(number) {
    setNumber(number);
  }
  function handleNumberChange(){
    const countryCode = '+91'
    signInWithPhoneNumber(countryCode + number)
    console.log(countryCode + number)
    
    setLogging(true);
  }

    return (
      <>
   {confirm ? (
  <>
  
    <Verifycode
            value={code}
            onChangeText={(text)=>setCode(text)}
            onFilled={(text)=>setCode(text)}
            confirmEvent={()=>confirmCode()}
            handleLinkEvent={()=>resendOTP}
            keyboardType={'numeric'}/>
      {verifying && <Box w={'100%'} h={'100%'} style={{position:"absolute"}}><CustomSpinner size={'xl'} color={accentBg}/></Box>}
       </>
      ):(
        <>
            <Loginscreen
          value={number}
          handleChangeText={changeText}
          handlePress={handleNumberChange}
        />
        {logging && <Box w={'100%'} h={'100%'} style={{position:"absolute"}}><CustomSpinner size={'xl'} color={accentBg}/></Box>}
        </>
     
      )}
      </>
  )
}

export default PhoneSignIn;

