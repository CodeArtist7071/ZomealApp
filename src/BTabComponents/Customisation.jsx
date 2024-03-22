import React, { useState } from 'react'
import CustomText from '../components/CustomText'
import CustomToast from '../components/CustomToast';

const Customisation = ()=>{
const [selectedCard, setSelectedCard] = useState(null);

const handleCardEvent=(id)=>{
    setSelectedCard(id)
}
const handleSave = () =>{
    <CustomToast toastTitle={`${selectedCard} has successfully saved`}/>
}
return(
 <CustomText text={'Checking'}/>
)
}
export default Customisation