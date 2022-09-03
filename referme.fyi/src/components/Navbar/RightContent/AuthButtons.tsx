import { Button } from '@chakra-ui/react';
import React from 'react';

const AuthButtons:React.FC = () => {
    
    return (
        <>
            <Button borderRadius="4px" mr={2} fontSize={14} p={4}>Sign Up</Button>
            <Button borderRadius="4px" mr={2} colorScheme="teal" color="white" fontSize={14} p={4}>Log In</Button> 
        </>
    )
}
export default AuthButtons;