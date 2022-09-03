import { Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import AuthInputs from './AuthInputs';

const AuthModal:React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState)
  const handleClose = () => {
    setModalState(prev => ({
        ...prev,
        open: false,
    }))
  }
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" pb={0}>
            {modalState.view === 'login' && 'Sign In'}
            {modalState.view === 'signup' && 'Sign Up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={0} pb={6} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Flex direction='column' align='center' justify='center' width='70%'>
                {/* <OAuthButtons /> */}
                <AuthInputs />
                {/* <ResetPassword /> */}
            </Flex>
            
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AuthModal;