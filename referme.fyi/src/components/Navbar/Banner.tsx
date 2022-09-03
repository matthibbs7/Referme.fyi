import React from 'react';
import { Flex, Text } from '@chakra-ui/react'
const Banner:React.FC = () => {
    
    return (
        <Flex bg="blue.300" height="36px" align="center">
            <Text color="white" margin="auto" fontWeight={700}>🎉&nbsp;&nbsp;&nbsp;Welcome to referme.fyi! Interested in contributing? Click here&nbsp;&nbsp;&nbsp;🎉</Text>
        </Flex>
    )
}
export default Banner;