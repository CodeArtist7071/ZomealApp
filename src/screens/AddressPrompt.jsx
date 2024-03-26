import { FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, Input, InputField, Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel, Button, ButtonText, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel, Textarea, TextareaInput, Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Switch, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, HStack, VStack, Heading, Text, Center, Icon, CircleIcon, CheckIcon, AlertCircleIcon, ChevronDownIcon } from '@gluestack-ui/themed';


import React, { useState, useEffect } from 'react';
import { ScrollView, KeyboardAvoidingView } from '@gluestack-ui/themed';
import CustomTextfield from '../components/CustomTextfield';
import CustomDropdownPicker from '../components/CustomDropdownPicker';
import CustomButton from '../components/CustomButton';
import { Box } from '@gluestack-ui/themed';
import { accentBg, dark } from '../constants/Stylesheet';
import firestore from '@react-native-firebase/firestore';
const AddAddress = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [alternateNumber, setAlternateNumber] = useState('');
    const [localities, setLocalities] = useState([]);
    const [selectedLocality, setSelectedLocality] = useState('');
    const [pincode, setPincode] = useState('');
    const [landmark, setLandmark] = useState('');
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
            await firestore().collection('users').add({
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
    };
    return <ScrollView px={'$2'} py={'$5'} mt={'$5'}>
        <KeyboardAvoidingView>
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'First Name'} labelText={'First Name'} handleChangeText={setFirstName} labelColor={dark} inputFieldColor={dark} keyboardType={'default'} isRequired={true} errorText={'Please provide your first name'} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Last Name'} labelText={'Last Name'} handleChangeText={setLastName} labelColor={dark} inputFieldColor={dark} keyboardType={'default'} isRequired={true} errorText={'Please provide your last name'} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Enter your Address'} labelText={'Address'} handleChangeText={setAddress} labelColor={dark} inputFieldColor={dark} isRequired={true} errorText={'Please provide your Address'} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Your Landmark'} labelText={'Landmark'} handleChangeText={setLandmark} labelColor={dark} inputFieldColor={dark} keyboardType={'default'} />
            <CustomDropdownPicker title={'Locality'} fontWeight={'light'} width={'95%'} color={dark} dropdownPlaceholder={'Select your Locality'} dropdownData={localities.map(locality => ({
                id: locality.id,
                value: locality.name
            }))} // Assuming each locality document has a 'name' field
                selectedValue={selectedLocality} handleClick={setSelectedLocality} />
            <CustomDropdownPicker title={'Enter your Pincode'} fontWeight={'light'} width={'95%'} color={dark} isRequired={true} dropdownPlaceholder={'Select your Locality'} dropdownData={localities.map(locality => ({
                id: locality.id,
                value: locality.pincode
            }))} // Assuming each locality document has a 'name' field
                selectedValue={selectedLocality} onValueChange={setSelectedLocality} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Phone Number'} labelText={'Phone Number'} handleChangeText={setPhoneNumber} labelColor={dark} inputFieldColor={dark} keyboardType={'numeric'} isDisabled={true} />
            <CustomTextfield variant={'outlined'} size={'xl'} placeholder={'Alternate Phone Number'} labelText={'Alternate Phone Number'} handleChangeText={setAlternateNumber} labelColor={dark} inputFieldColor={dark} keyboardType={'numeric'} countryCode={'+91'} padding={'$2'} fontSize={15.5} countryCodeColor={dark} />
            <Box marginRight={'$5'} flex={1} marginTop={50} marginBottom={70} justifyContent={'center'} alignItems="flex-end">
                <CustomButton width={'50%'} height={'$12'} bgColor={accentBg} title={'Next'} handlePressEvent={handleSaveButton} />
            </Box>
        </KeyboardAvoidingView>
    </ScrollView>;
};
export default AddAddress;