import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

const AuthButtons:React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    return (
        <>
            <Button 
                borderRadius="4px" 
                mr={2} 
                fontSize={14} 
                p={4}
                onClick={() => setAuthModalState({open: true, view: 'signup'})}
            >
                Sign Up
            </Button>
            <Button 
                borderRadius="4px" 
                mr={2} 
                colorScheme="teal" 
                color="white" 
                fontSize={14} 
                p={4}
                onClick={() => setAuthModalState({open: true, view: 'login'})}
            >
                Log In
            </Button> 
        </>
    )
}
export default AuthButtons;