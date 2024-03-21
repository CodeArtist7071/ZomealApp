import { Modal } from '@gluestack-ui/themed'
import React from 'react-native'
const CustomModal=({modalText, setShowModalBtn1, setShowModalBtn2, ModalHeading, textModalBtn, setShowModalBtn, varaintBtn })=>{
    const [showModal, setShowModal] = useState(false);
        console.log(showModal);
        const ref = React.useRef(null);
return(
          <Center h={300}>
            <Button onPress={() => setShowModal(true)} ref={ref}>
              <ButtonText>{textModalBtn}</ButtonText>
            </Button>
            <Modal
              isOpen={showModal}
              onClose={() => {
                setShowModal({setShowModalBtn});
              }}
              finalFocusRef={ref}
            >
              <ModalBackdrop />
              <ModalContent>
                <ModalHeader>
                  <Heading size='lg'>{ModalHeading}</Heading>
                  <ModalCloseButton>
                    <Icon as={CloseIcon} />
                  </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                  <Text >
                    {modalText}
                  </Text>
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant={varaintBtn}
                    size={sizebtn1}
                    action={actionBtn1}
                    mr={marginRightBtn1}
                    onPress={() => {
                      setShowModal({setShowModalBtn1});
                    }}
                  >
                    <ButtonText>{btnText1}</ButtonText>
                  </Button>
                  <Button
                    size={sizeBtn2}
                    action={actionBtn2}
                    borderWidth={borderWidthBtn2}
                    onPress={() => {
                      setShowModal({setShowModalBtn2});
                    }}
                  >
                    <ButtonText>{btnText2}</ButtonText>
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Center>
        );
      }

export default CustomModal