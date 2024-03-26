import React from 'react'
import CustomIcon from '../components/CustomIcons'
import { Image } from '@gluestack-ui/themed'
import source from '../assets/Images/zomeal.png'
const Logo = ()=>{
return(
 <Image alt='logo' style={{width:100,height:40,objectFit:'contain',marginLeft:100}}  source={source}/>
)
}
export default Logo