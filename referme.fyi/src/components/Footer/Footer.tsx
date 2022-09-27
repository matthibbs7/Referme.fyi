import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Footer:React.FC = () => {
    
    return (
        <Flex bg="white" justifyContent="center" height="200px">
            <Flex align="center" width="100%" maxWidth='1250px' minWidth="500px">
                <Text>Hi</Text>
            </Flex>
        </Flex>
    )
}
export default Footer;