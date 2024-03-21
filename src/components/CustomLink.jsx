import { Link, LinkText } from '@gluestack-ui/themed'
import React from 'react'
const CustomLink=({text, paddingAxisY,linkColor,linkFontWeight,fontSize,onPress,href})=>{
return(
    <Link ml={'$5'} w={'$100'} onPress={onPress} href={href}  py={paddingAxisY}>
        <LinkText color={linkColor} fontSize={fontSize} fontWeight={linkFontWeight} style={{textDecorationLine:'none'}}>{text}</LinkText>
    </Link>
)
}
export default CustomLink