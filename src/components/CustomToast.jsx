import React from 'react'; import { Button, ButtonText, Toast, ToastTitle, useToast } from '@gluestack-ui/themed';

const CustomToast = ({id,toastAction,toastTitle,toastPlacement,toastVariant})=>{
return(
<Toast nativeID={id} placement={toastPlacement} action={toastAction} variant={toastVariant}>
    <ToastTitle>
        {toastTitle}
    </ToastTitle>
</Toast>
)
}
export default CustomToast
