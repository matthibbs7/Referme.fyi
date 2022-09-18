import React from 'react';
import { Divider, Flex, Text, Tooltip, Image, Button} from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import { IoReaderOutline } from 'react-icons/io5'
import { VscReferences } from 'react-icons/vsc'
type TrendingProps = {
    
};

const Trending:React.FC<TrendingProps> = () => {
    
    return (
        <Flex mt={5} flexDirection='row'>
            <Flex ml={2} flexDirection='column' width="33%" bgColor='gray.200' mr={6} borderRadius='15px' height="1500px">
                <Flex height="120px" p={5} flexDirection="column">
                    <Flex flexDirection="row">
                        <Text fontWeight={700} fontSize="18pt">Popular</Text> 
                        <Tooltip placement='auto' hasArrow label='Companies with the most referee/referal interest appear here' bg='black' color='white' borderRadius="7px">
                            <InfoIcon ml={2} alignSelf="center" color="gray.600" mt={0.5} />
                        </Tooltip>
                    </Flex>
                    

                    <Divider borderColor="black" />

                    <Flex mt={8} flexDirection="column">
                        <Flex height="140px" bgColor="red.300" width="100%" borderRadius="10px" p={5} flexDirection="row">
                            <Flex flexDirection="column" width="50%" p={2} bgColor="white" borderRadius="8px">
                                <Flex flexDirection="row" height="50%" justifyContent="center">
                                    <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/googlelogo.png" height="30px" />
                                    <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Google</Text>
                                </Flex>
                                <Button mt={2} bgColor="gray.200"><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                            </Flex>
                            <Flex flexDirection="column" width="50%" p={2}>
                                
                                <Button>Referrals</Button>
                                <Button colorScheme="blackAlpha" mt={2}>Give a Referral</Button>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="orange.300" width="100%" borderRadius="10px" p={5}>
                            <Flex flexDirection="column" width="50%" p={2} bgColor="white" borderRadius="8px">
                                <Flex flexDirection="row" height="50%" justifyContent="center">
                                    <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/amazonlogo.jpg" height="30px" />
                                    <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Amazon</Text>
                                </Flex>
                                <Button mt={2} bgColor="gray.200"><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                            </Flex>
                            <Flex flexDirection="column" width="50%" p={2}>
                                
                                <Button>Referrals</Button>
                                <Button colorScheme="blackAlpha" mt={2}>Give a Referral</Button>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="blue.300" width="100%" borderRadius="10px" p={5}>
                            <Flex flexDirection="column" width="50%" p={2} bgColor="white" borderRadius="8px">
                                <Flex flexDirection="row" height="50%" justifyContent="center">
                                    <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/facebook.png" height="30px" />
                                    <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Facebook</Text>
                                </Flex>
                                <Button mt={2} bgColor="gray.200"><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                            </Flex>
                            <Flex flexDirection="column" width="50%" p={2}>
                                
                                <Button>Referrals</Button>
                                <Button colorScheme="blackAlpha" mt={2}>Give a Referral</Button>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="green.300" width="100%" borderRadius="10px" p={5}>
                            <Flex flexDirection="column" width="50%" p={2} bgColor="white" borderRadius="8px">
                                <Flex flexDirection="row" height="50%" justifyContent="center">
                                    <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/microsoft.png" height="30px" />
                                    <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Microsoft</Text>
                                </Flex>
                                <Button mt={2} bgColor="gray.200"><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                            </Flex>
                            <Flex flexDirection="column" width="50%" p={2}>
                                
                                <Button>Referrals</Button>
                                <Button colorScheme="blackAlpha" mt={2}>Give a Referral</Button>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="gray.300" width="100%" borderRadius="20px" p={5}>
                            <Text color="white" fontWeight={700} fontSize="16pt">Apple</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDirection='column' width="33%" bgColor='gray.200' mr={6} borderRadius='15px' height="1500px">
                <Flex height="120px" p={5} flexDirection="column">
                    <Flex flexDirection="row">
                        <Text fontWeight={700} fontSize="18pt">Trending</Text> 
                        <Tooltip placement='auto' hasArrow label='Companies with the most referee/referal interest appear here' bg='black' color='white' borderRadius="7px">
                            <InfoIcon ml={2} alignSelf="center" color="gray.600" mt={0.5} />
                        </Tooltip>
                    </Flex>
                    <Divider borderColor="black" />

                    <Flex mt={8} flexDirection="column">
                        <Flex height="140px" bgColor="purple.300" width="100%" borderRadius="10px" p={5} flexDirection="row">
                            <Flex flexDirection="column" width="50%" p={2} bgColor="white" borderRadius="8px">
                                <Flex flexDirection="row" height="50%" justifyContent="center">
                                    <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/datadog.png" height="30px" />
                                    <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Datadog</Text>
                                </Flex>
                                <Button mt={2} bgColor="gray.200"><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                            </Flex>
                            <Flex flexDirection="column" width="50%" p={2}>
                                
                                <Button>Referrals</Button>
                                <Button colorScheme="blackAlpha" mt={2}>Give a Referral</Button>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="teal.300" width="100%" borderRadius="10px" p={5} flexDirection="row">
                            <Flex flexDirection="column" width="50%" p={2} bgColor="white" borderRadius="8px">
                                <Flex flexDirection="row" height="50%" justifyContent="center">
                                    <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/figma.png" height="30px" />
                                    <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Figma</Text>
                                </Flex>
                                <Button mt={2} bgColor="gray.200"><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                            </Flex>
                            <Flex flexDirection="column" width="50%" p={2}>
                                
                                <Button>Referrals</Button>
                                <Button colorScheme="blackAlpha" mt={2}>Give a Referral</Button>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="red.300" width="100%" borderRadius="10px" p={5} flexDirection="row">
                            <Flex flexDirection="column" width="50%" p={2} bgColor="white" borderRadius="8px">
                                <Flex flexDirection="row" height="50%" justifyContent="center">
                                    <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/tesla.png" height="30px" />
                                    <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Tesla</Text>
                                </Flex>
                                <Button mt={2} bgColor="gray.200"><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                            </Flex>
                            <Flex flexDirection="column" width="50%" p={2}>
                                
                                <Button>Referrals</Button>
                                <Button colorScheme="blackAlpha" mt={2}>Give a Referral</Button>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="cyan.300" width="100%" borderRadius="20px" p={5}>
                            <Text color="white" fontWeight={700} fontSize="16pt">LinkedIn</Text>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="gray.300" width="100%" borderRadius="20px" p={5}>
                            <Text color="white" fontWeight={700} fontSize="16pt">Apple</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDirection='column' width="33%" bgColor='gray.200' mr={2} borderRadius='15px' height="150px">
                <Flex height="120px" p={5} flexDirection="column">
                    <Flex flexDirection="row">
                        <Text fontWeight={700} fontSize="18pt">New</Text> 
                        <Tooltip placement='auto' hasArrow label='Companies with the most referee/referal interest appear here' bg='black' color='white' borderRadius="7px">
                            <InfoIcon ml={2} alignSelf="center" color="gray.600" mt={0.5} />
                        </Tooltip>
                    </Flex>
                    <Divider borderColor="black" />
                </Flex>
            </Flex>
            
        </Flex>
    )
}
export default Trending;