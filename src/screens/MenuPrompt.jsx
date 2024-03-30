import { Box, Card, Switch, Text,HStack,Pressable,ModalBackdrop,ModalContent,ModalHeader,Icon,ButtonText,CloseIcon,ModalBody,ModalFooter, Modal,Heading,ModalCloseButton, Button, ButtonIcon } from "@gluestack-ui/themed";
import React, { useEffect, useRef, useState } from "react";
import CustomSwitch from "../components/CustomSwitch";
import DateTimePicker from "react-native-ui-datepicker";
import { accentBg, dark, textColor } from "../constants/Stylesheet";
import Firestore from "@react-native-firebase/firestore"
import { CalendarCheck, EggFried, EggIcon, Leaf } from "lucide-react-native";
import CustomText from "../components/CustomText";
import CustomIcon from "../components/CustomIcons";
import CustomButton from "../components/CustomButton";
import auth from  '@react-native-firebase/auth'

const MenuPrompt=({navigation})=>{
  const user = auth().currentUser.uid
  const [isNonVeg, setIsNonVeg] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);
  useEffect(() => {
      const fetchUserData = async () => {
              const fetchUserSnapshot = await Firestore().collection('users').doc(user).get();
              console.log(fetchUserSnapshot.data());
      };

      fetchUserData();
  },[]);

  function updateData() {
   navigation.navigate('Dashboard')
  }
    return(
    <Box>
        <Box>
        
        <Card w={'95%'} alignSelf="center">
        <HStack justifyContent="flex-end">
          <HStack alignItems="center">
            <Box justifyContent="center" alignItems="center" style={{width:50,height:50,backgroundColor:'green',borderRadius:50,marginRight:10}}>
            <Icon size={'md'} colnpor={textColor} as={Leaf}/>
            </Box>
          <Switch size="lg" value={isNonVeg}/>
          <Box justifyContent="center" alignItems="center" style={{width:50,height:50,backgroundColor:'red',borderRadius:50}}>
           <Icon size={'md'} color={textColor} as={EggIcon}/>
           </Box>
          </HStack>
        </HStack>
        <HStack marginTop={50} justifyContent="space-between">
          <CustomButton key={1} borderRadius={50} style={{width:100,height:50}} title={'Both'} handlePressEvent={updateData}/>
          <CustomButton key={2} bgColor={textColor} borderRadius={50} style={{width:100,height:50}} title={'Lunch'}/>
          <CustomButton key={3} borderRadius={50} style={{width:100,height:50}} title={'Dinner'}/>
        </HStack>

      </Card>
       <Pressable onPress={() => setShowModal(true)} ref={ref}>
     <HStack style={{justifyContent:'center',alignSelf:'center',marginTop:20}}>
      <Card style={{width:60,height:60, borderRadius:50,backgroundColor:accentBg,justifyContent:'center',alignContent:'center'}}>
      <Icon color={textColor} size={'xl'} as={CalendarCheck} />
      </Card>
      </HStack>
     </Pressable>
     <Modal
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            finalFocusRef={ref}
          >
            <ModalBackdrop />
            <ModalContent>
              <ModalHeader>
                <Heading  size='lg'>Select date to start</Heading>
                <ModalCloseButton>
                  <Icon as={CloseIcon} />
                </ModalCloseButton>
              </ModalHeader>
              <ModalBody>
                 <DateTimePicker calendarTextStyle={{color:dark}}
        mode="single"
        date={date}
        onChange={(params) => setDate(params.date)}
        timePicker={true}
        
      />
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="outline"
                  size="sm"
                  action="secondary"
                  mr="$3"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <ButtonText>Cancel</ButtonText>
                </Button>
                <Button
                  size="sm"
                  action="positive"
                  borderWidth='$0'
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <ButtonText>Save</ButtonText>
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
     <CustomText color={dark} textAlign={'center'} text={'Select your Date'}/>

      </Box>

    </Box>
    )
}
export default MenuPrompt



