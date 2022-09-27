import React from 'react';
import { Flex, Text, Image, Link, Button } from '@chakra-ui/react';

const Footer:React.FC = () => {
    
    return (
        <Flex bg="white" justifyContent="center" height="270px">
            <Flex width="100%" maxWidth='1250px' minWidth="500px" flexDirection="row">
                <Flex flexDirection="column">
                    <Flex align="center" mr={5} mt={6}>
                        <Image src="/images/logowhite.png" height="64px" minWidth="64px" />
                        <Link href='/' style={{ textDecoration: 'none' }}>
                            <Text color="#29CC98" fontWeight="800" fontSize="22pt" display={{base: "none", md: 'unset'}}>referme.fyi</Text>
                        </Link>
                        
                    </Flex>
                    <Text ml={4} mt={-2} fontSize="11pt">Leverage the power of referrals today!</Text>
                    <Text ml={4} mt={2} fontSize="11pt" color="gray.500">© 2022 | All rights reserved</Text>
                    <Text ml={4} mt={4} fontWeight={700} fontSize="13pt">Contact</Text>
                    <Button ml={4} mb="auto" width="120px" mt={2}>Email Us</Button>
                </Flex>
                <Flex mt={10} mr="10%" ml="auto" flexDirection="column">
                    <Text fontWeight={700}>Referme.fyi</Text>
                    <Text mt={2} color="gray.600">About</Text>
                    <Text color="gray.600">Referrals by Company</Text>
                    <Text color="gray.600">Internship Referrals</Text>
                    <Text color="gray.600">Tech Resources</Text>
                </Flex>
                <Flex mt={10} mr="10%" flexDirection="column">
                    <Text fontWeight={700}>Contribute</Text>
                    <Text mt={2} color="gray.600">Become a referee</Text>
                    <Text color="gray.600">Submit a new Company</Text>
                    <Text color="gray.600">Want a new feature? Click here</Text>
                </Flex>
                <Flex mt={10} mr={5} flexDirection="column">
                    <Text fontWeight={700}>Account</Text>
                    <Text mt={2} color="gray.600">Login</Text>
                    <Text color="gray.600">Create Account</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default Footer;