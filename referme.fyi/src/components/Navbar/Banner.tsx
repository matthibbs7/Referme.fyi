import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react'
import SubmitCompany from '../Modal/CreateCompany/SubmitCompany';

const Banner:React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <Flex bg="blue.300" height="36px" align="center" justifyContent="center">
            <SubmitCompany isOpen={open} handleClose={() => setOpen(false)} />
            <Text color="white" fontWeight={700}>🎉&nbsp;&nbsp;&nbsp;Welcome to referme.fyi!</Text> 
            <Text display={{base: "none", md: 'unset'}} color="white" fontWeight={700}>&nbsp;Don't see a company listed? Submit a request&nbsp;</Text>
            <Text onClick={() => setOpen(true)} _hover={{cursor: 'pointer'}} display={{base: "none", md: 'unset'}} color="white" fontWeight={700}><u>here</u></Text>
            <Text>&nbsp;&nbsp;&nbsp;🎉</Text>
        </Flex>
    )
}
export default Banner;