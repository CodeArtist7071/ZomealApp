import { FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, Input, InputField, Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel, Button, ButtonText, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel, Textarea, TextareaInput, Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Switch, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, HStack, VStack, Heading, Text, Center, Icon, CircleIcon, CheckIcon, AlertCircleIcon, ChevronDownIcon, Pressable, Card } from '@gluestack-ui/themed';
import React, { useState, useEffect } from 'react';
import { ScrollView, KeyboardAvoidingView } from '@gluestack-ui/themed';
import CustomTextfield from '../components/CustomTextfield';
import CustomDropdownPicker from '../components/CustomDropdownPicker';
import CustomButton from '../components/CustomButton';
import { Box } from '@gluestack-ui/themed';
import { accentBg, dark, textColor } from '../constants/Stylesheet';
import firestore from '@react-native-firebase/firestore';
import { ArrowRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const AddAddress = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [alternateNumber, setAlternateNumber] = useState('');
    const [selectedLocality, setSelectedLocality] = useState('');
    const [pincode, setPincode] = useState('');
    const [landmark, setLandmark] = useState('');
    const [isFormValid, setIsFormValid] = useState(false)
    const navigation = useNavigation()
    useEffect(() => {
        const fetchLocalities = async () => {
            try {
                const localitySnapshot = await firestore().collection('Localities').get();
                const localitiesData = localitySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setLocalities(localitiesData);
                console.log('Localities data retrieved:', localitiesData);
            } catch (error) {
                console.error('Error fetching localities:', error);
            }
        };
        fetchLocalities();
    }, []);
    const handleSaveButton = async () => {
        try {
            await firestore().collection('users').set({
                firstName,
                lastName,
                address,
                phoneNumber,
                alternateNumber,
                locality: selectedLocality,
                pincode,
                landmark
            });
            console.log('User added!');
        } catch (error) {
            console.error('Error adding user: ', error);
        }
        navigation.navigate('OrderDetails')
    };
    useEffect(()=>{
        const checkFormValidity = ()=>{
            const requiredFields = [firstName,lastName,address,selectedLocality,pincode]
            const isEveryFieldFilled = requiredFields.every(field => field.trim() !== '')
            setIsFormValid(isEveryFieldFilled)
        }
        checkFormValidity()
    },[firstName,lastName,address,selectedLocality,pincode])

    function Toast(){
        return(
           <Toast>

           </Toast>
        )
    }
    return <ScrollView px={'$2'} py={'$5'} mt={'$5'}>
        <KeyboardAvoidingView>
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'First Name'} labelText={'First Name'} handleChangeText={setFirstName} labelColor={dark} inputFieldColor={dark} keyboardType={'name-phone-pad'} isRequired={true} errorText={'Please provide your first name'} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Last Name'} labelText={'Last Name'} handleChangeText={setLastName} labelColor={dark} inputFieldColor={dark} keyboardType={'default'} isRequired={true} errorText={'Please provide your last name'} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Enter your Address'} labelText={'Address'} handleChangeText={setAddress} labelColor={dark} inputFieldColor={dark} isRequired={true} errorText={'Please provide your Address'} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Your Locality'} labelText={'Locality'} handleChangeText={setSelectedLocality} labelColor={dark} inputFieldColor={dark} isRequired={true} errorText={'Please provide your Locality'} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Your Pincode'} keyboardType={'numeric'} labelText={'Pincode'} handleChangeText={setPincode} labelColor={dark} inputFieldColor={dark} isRequired={true} errorText={'Please provide your Pincode'} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Your Landmark'} labelText={'Landmark'} handleChangeText={setLandmark} labelColor={dark} inputFieldColor={dark} keyboardType={'default'} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Phone Number'}  labelText={'Phone Number'} handleChangeText={setPhoneNumber} labelColor={dark} inputFieldColor={dark} keyboardType={'numeric'} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Alternate Phone Number'} labelText={'Alternate Phone Number'} handleChangeText={setAlternateNumber} labelColor={dark} inputFieldColor={dark} keyboardType={'numeric'} countryCode={'+91'} padding={'$2'} fontSize={15.5} countryCodeColor={dark} />
            <Box marginRight={'$5'} flex={1} marginTop={50} marginBottom={70} justifyContent={'center'} alignItems="flex-end">
                 <Pressable onPress={isFormValid ? handleSaveButton:undefined}>
                 <HStack style={{justifyContent:'center',alignSelf:'center',marginTop:-30}}>
                 <Card style={{width:60,height:60, borderRadius:50,justifyContent:'center',alignContent:'center'}} backgroundColor={isFormValid ? accentBg : 'grey'}>
                 <Icon color={textColor} size={'xl'} as={ArrowRight} />
                </Card>
               </HStack>
                </Pressable>
            </Box>
        </KeyboardAvoidingView>
    </ScrollView>;
};
export default AddAddress;