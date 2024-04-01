import React from 'react'
import CustomButton from '../components/CustomButton'
const MenuPrompt =({navigation})=>{
return(
  <CustomButton title={'Next'} handlePressEvent={()=>navigation.navigate('AddressPrompt')}/>
)
}
export default MenuPrompt