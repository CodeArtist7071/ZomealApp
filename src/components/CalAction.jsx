import { Box } from '@gluestack-ui/themed'
import React from 'react'
import WalletBalance from './WalletBalance';
import { FirebaseAuthTypes, auth } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';



const Balance=()=>{
const userUID = firebase.auth().currentUser.uid
return(
     <WalletBalance userId={'aukjZJyznWWptyjl8d38dvnQ0Dh1'} />

)
}
const Calories=()=>{
    return(
  <Box>

  </Box>
    )
}
export {Balance, Calories}