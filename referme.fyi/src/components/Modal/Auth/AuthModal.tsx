import { Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import AuthInputs from './AuthInputs';
import ResetPassword from './ResetPassword';

const AuthModal:React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState)
  const [user, loading, error] = useAuthState(auth)

  const handleClose = () => {
    setModalState(prev => ({
        ...prev,
        open: false,
    }))
  }

  useEffect(() => {
    if (user) handleClose()
  }, [user])

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent w={["80%", null, null, null]}>
          <ModalHeader textAlign="center" pb={0}>
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'signup' && 'Sign Up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={0} pb={6} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Flex direction='column' align='center' justify='center' width={['100%',"70%", "70%", "70%"]}>
                {/* <OAuthButtons /> */}
                <AuthInputs />
            </Flex>
            
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AuthModal;