import React from 'react';
import { Flex, Button } from '@chakra-ui/react'
import AuthButtons from './AuthButtons';
import AuthModal from '../../Modal/Auth/AuthModal';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/clientApp';
type RightContentProps = {
    // user any
    user: any;
};

const RightContent:React.FC<RightContentProps> = ({ user }) => {
    
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                {user ? 
                
                <Button 
                    borderRadius="4px" 
                    colorScheme="teal" 
                    color="white" 
                    fontSize={14} 
                    p={4}
                    onClick={() => signOut(auth)}
                >
                    Logout
                </Button> 

                : <AuthButtons />}
            </Flex>
        </>
    )
}
export default RightContent;