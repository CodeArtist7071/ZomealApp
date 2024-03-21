import React, { useState, useEffect,useRef } from "react";
import { View, Text, TouchableOpacity, TextInput,Button,Keyboard } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import auth, { firebase } from '@react-native-firebase/auth';
import Verifycode from "../screens/Verifycode"
import Loginscreen from "../screens/Loginscreen";
import { Box, KeyboardAvoidingView, Spinner } from "@gluestack-ui/themed";
import { AnimatePresence, motion } from "framer-motion";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'; // Importing just to use the FirebaseRecaptchaVerifierModal, not the recaptcha itself
import CustomSpinner from "../components/CustomSpinner";
import { accentBg } from "../constants/Stylesheet";


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
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(()=>{
    if(inputRefs.current[0]){
      inputRefs.current[0].focus()
    }
    },[])

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user) {
      // Handle successful login here
    }else{
     
    }
  }



  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber,true);
    setConfirm(confirmation);
    console.log(confirmation);
  }

  async function confirmCode() {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      const verificationCode = code; // Store the current value of code
      await confirm.confirm(verificationCode); // Use the stored value

      console.log('Good job! Code confirmed successfully.');
     onAuthStateChanged;
    } catch (error) {
      console.log('Error confirming code:', error.message);
      // Handle the error here, such as displaying an error message to the user
      console.log('code',error.verificationCode)
    }
    setVerifying(true)
     setTimeout(() => {
                    setLogging(false);
                  },2000);
    setTimeout(()=>{
      setVerifying(false)
    },1000)              
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

