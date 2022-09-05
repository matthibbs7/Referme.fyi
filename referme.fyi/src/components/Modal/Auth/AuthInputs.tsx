import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import Login from './Login';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

type AuthInputsProps = {
    
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const modalState = useRecoilValue(authModalState);
    return (
        <Flex direction='column' align='center' width='100%' mt={4}>
            {modalState.view === 'login' && <Login />}
            {modalState.view === 'signup' && <SignUp />}
            {modalState.view === 'resetPassword' && <ResetPassword />}
        </Flex>
    )
}
export default AuthInputs;