import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomTextfield from '../components/CustomTextfield'
import { textColor } from '../constants/Stylesheet'
import CustomButton from '../components/CustomButton'
import CustomModal from '../components/CustomModal'
import { KeyboardAvoidingView } from '@gluestack-ui/themed'

const PincodePrompt=()=>{

return(
    <KeyboardAvoidingView>
        <Box>
        <CustomTextfield errorText={'Please a enter pincode'} isRequired={true} labelText={'Please enter the pincode'} labelColor={textColor}/>
        <CustomButton  handlePressEvent={ confirm ? ()=>Navigation.navigate('Packages'):(<CustomModal/>)}/>
        </Box>
    </KeyboardAvoidingView>
)
}
export default PincodePrompt