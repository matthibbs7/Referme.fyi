import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
const SelectorBar:React.FC = () => {
    
    return (
        <Flex height="34px" bg="gray.500">
            <Button ml={5} height="34px" borderRadius="0px" bg="gray.500" color="white">Referrals By Company</Button>
            <Button height="34px" borderRadius="0px" bg="gray.500" color="white">Internship Referrals</Button>
            <Button ml="auto" height="34px" borderRadius="0px" bg="gray.500" color="white">Become a Referee</Button>
        </Flex>
    )
}
export default SelectorBar;