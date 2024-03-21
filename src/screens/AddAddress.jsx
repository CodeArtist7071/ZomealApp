import React, { useState} from 'react';
import { ScrollView, KeyboardAvoidingView } from '@gluestack-ui/themed';
import CustomTextfield from '../components/CustomTextfield';
import CustomDropdownPicker from '../components/CustomDropdownPicker';
import CustomButton from '../components/CustomButton';
import { Box } from '@gluestack-ui/themed';
import { accentBg, dark } from '../constants/Stylesheet';

const AddAddress = () => {
    const [check,setCheck] = useState(' ')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [alternateNumber, setAlternateNumber] = useState('');
    const [locality, setLocality] = useState('');
    const [pincode, setPincode] = useState('');
    const [landmark, setLandmark] = useState('');


    const handleSaveButton = () => {
      return(
       console.log(firstName,lastName,address,pincode,phoneNumber,locality)
    )
 }

    return (
        <ScrollView px={'$2'} py={'$5'} mt={'$5'}>
            <KeyboardAvoidingView>
                <CustomTextfield
                    variant={'outlined'}
                    size={'xl'}
                    placeholder={'First Name'}
                    labelText={'First Name'}
                    handleChangeText={setFirstName}
                    labelColor={dark}
                    inputFieldColor={dark}
                    keyboardType={'default'}
                    isRequired={true}
                    errorText={'Please provide your first name'}
                />
                <CustomTextfield
                    variant={'outlined'}
                    size={'xl'}
                    placeholder={'Last Name'}
                    labelText={'Last Name'}
                    handleChangeText={setLastName}
                    labelColor={dark}
                    inputFieldColor={dark}
                    keyboardType={'default'}
                    isRequired={true}
                    errorText={'Please provide your last name'}
                />
                <CustomTextfield
                    variant={'outlined'}
                    size={'xl'}
                    placeholder={'Enter your Address'}
                    labelText={'Address'}
                    handleChangeText={setAddress}
                    labelColor={dark}
                    inputFieldColor={dark}
                    isRequired={true}
                    errorText={'Please provide your Address'}
                />
                <CustomTextfield
                    variant={'outlined'}
                    size={'xl'}
                    placeholder={'Your Landmark'}
                    labelText={'Landmark'}
                    handleChangeText={setLandmark}
                    labelColor={dark}
                    inputFieldColor={dark}
                    keyboardType={'default'}
                />
                <CustomDropdownPicker
                    title={'Locality'}
                    fontWeight={'light'}
                    width={'95%'}
                    color={dark}
                    dropdownPlaceholder={'Select your Locality'}
                    dropdownData={[
                        { id: 0, value: 'Soubhagaya Nagar' },
                        { id: 1, value: 'Bermunda Colony' },
                        { id: 2, value: 'Jagamara' },
                        { id: 3, value: 'OUAT Colony' },
                        { id: 4, value: 'Saheed Nagar' },
                        { id: 5, value: 'ITER' },
                        { id: 6, value: 'Pokhariput' },
                    ]}
                    handleClick={setLocality}
                />
                <CustomTextfield
                    variant={'outlined'}
                    size={'xl'}
                    isRequired={true}
                    placeholder={'Enter your Pincode'}
                    labelText={'Pincode'}
                    handleChangeText={setPincode}
                    labelColor={dark}
                    inputFieldColor={dark}
                    keyboardType={'number-pad'}
                    errorText={'Please enter your Pincode'}
                />
                <CustomTextfield
                    variant={'outlined'}
                    size={'xl'}
                    placeholder={'Phone Number'}
                    labelText={'Phone Number'}
                    handleChangeText={setPhoneNumber}
                    labelColor={dark}
                    inputFieldColor={dark}
                    keyboardType={'numeric'}
                    isDisabled={true}
                />
                <CustomTextfield
                    variant={'outlined'}
                    size={'xl'}
                    placeholder={'Alternate Phone Number'}
                    labelText={'Alternate Phone Number'}
                    handleChangeText={setAlternateNumber}
                    labelColor={dark}
                    inputFieldColor={dark}
                    keyboardType={'numeric'}
                    countryCode={'+91'}
                    padding={'$2'}
                    fontSize={15.5}
                    countryCodeColor={dark}
                />
                <Box marginRight={'$5'} flex={1} marginTop={50} marginBottom={70} justifyContent={'center'} alignItems="flex-end">
                    <CustomButton
                        width={'50%'}
                        height={'$12'}
                        bgColor={accentBg}
                        title={'Next'}
                        handlePressEvent={handleSaveButton}
                    />
                </Box>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default AddAddress;
