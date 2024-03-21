import { AlertDialog, AlertDialogBody } from "@gluestack-ui/themed";

const DailogAlert=({dailogText, ...props})=>{
    const [showAlertDialog, setShowAlertDialog] = React.useState(false);
    return (
      <Center h={300}>
        <Button onPress={() => setShowAlertDialog(true)}>
          <ButtonText>Click me</ButtonText>
        </Button>
        <AlertDialog
          isOpen={showAlertDialog}
          onClose={() => {
          setShowAlertDialog(false);
          }}
        >
          <AlertDialogBackdrop />
          <AlertDialogContent>
            <AlertDialogHeader>
              <Heading size='lg'>Deactivate account</Heading>
              <AlertDialogCloseButton>
                <Icon as={CloseIcon} />
              </AlertDialogCloseButton>
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text size='sm'>
                {dailogText}
              </Text>
            </AlertDialogBody>
            <AlertDialogFooter>
             <ButtonGroup space="lg">
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setShowAlertDialog(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                bg='$error600'
                action="negative"
                onPress={() => {
                  setShowAlertDialog(false);
                }}
              >
                <ButtonText>Deactivate</ButtonText>
              </Button>
               </ButtonGroup>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Center>
    );
  }
  export default DailogAlert
