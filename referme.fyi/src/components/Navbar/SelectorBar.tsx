import React from 'react';
import Router from 'next/router';
import { Button, Flex, Text } from '@chakra-ui/react';
import { IoMdSchool } from 'react-icons/io'
import { GrBook } from 'react-icons/gr'
import { BiBook } from 'react-icons/bi'
import TechResources from './SelectorButtons/TechResources';
const SelectorBar:React.FC = () => {
    
    const toAbout = () => {
        Router.push('/about')
    }

    return (
        <Flex justifyContent='center' bg='gray.500'>
            <Flex height="34px" bg="gray.500" width="100%" maxWidth="1250px">
                <Button _hover={{bgColor: 'gray.600'}} ml={5} height="34px" borderRadius="0px" bg="gray.500" color="white">Referrals By Company</Button>
                <Button _hover={{bgColor: 'gray.600'}} height="34px" borderRadius="0px" bg="gray.500" color="white"><IoMdSchool /> <Text ml={2}>Internship Referrals</Text></Button>
                <TechResources />
                <Button width="200px" zIndex="2" borderRadius="0px" height="34px" bg="gray.500" _hover={{cursor: 'default', bg: 'gray.500'}} _active={{bg: 'gray.500'}}></Button>
                <Button _hover={{bgColor: 'gray.600'}} ml="auto" height="34px" borderRadius="0px" bg="gray.500" color="white">Become a Referee</Button>
                <Button _hover={{bgColor: 'gray.600'}} onClick={toAbout} bg="gray.500" color='white' height="34px" borderRadius="0px" mr={5}>🙋 About</Button>
            </Flex>
        </Flex>
    )
}
export default SelectorBar;