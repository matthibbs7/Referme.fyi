import React from 'react';
import { Divider, Flex, Text, Tooltip, Image, Button} from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import { IoReaderOutline } from 'react-icons/io5'
import { VscReferences } from 'react-icons/vsc'
import { GrContactInfo } from 'react-icons/gr'
import { BiDonateHeart } from 'react-icons/bi'
import router from 'next/router';
type TrendingProps = {
    
};

const Trending:React.FC<TrendingProps> = () => {
    
    return (
        <Flex mt={5} flexDirection='row' flexWrap="wrap" display="flex" justifyContent="center">
            <Flex ml={2} flexDirection='column' mb={5} minWidth="60px" bgColor='gray.200' mr={6} borderRadius='15px' height="720px">
                <Flex height="120px" p={5} flexDirection="column">
                    <Flex flexDirection="row">
                        <Text fontWeight={700} fontSize="18pt">Popular</Text> 
                        <Tooltip placement='auto' hasArrow label='Companies with the most referee/referal interest appear here' bg='black' color='white' borderRadius="7px">
                            <InfoIcon ml={2} alignSelf="center" color="gray.600" mt={0.5} />
                        </Tooltip>
                    </Flex>
                    

                    <Divider borderColor="black" />

                    <Flex mt={8} flexDirection="column">
                        <Flex height="140px" bgColor="red.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/googlelogo.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Google</Text>
                                    </Flex>
                                    
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    <Button onClick={() => {router.push('/companies/google')}} height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="orange.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/amazonlogo.jpg" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Amazon</Text>
                                    </Flex>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button onClick={() => {router.push('/companies/amazon')}} height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="blue.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/facebook.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Facebook</Text>
                                    </Flex>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    <Button height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="green.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/microsoft.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Microsoft</Text>
                                    </Flex>
                                    
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref.</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDirection='column' mb={5} minWidth="60px" bgColor='gray.200' mr={6} borderRadius='15px' height="720px">
            <Flex height="120px" p={5} flexDirection="column">
                    <Flex flexDirection="row">
                        <Text fontWeight={700} fontSize="18pt">Trending</Text> 
                        <Tooltip placement='auto' hasArrow label='Companies with the most referee/referal interest appear here' bg='black' color='white' borderRadius="7px">
                            <InfoIcon ml={2} alignSelf="center" color="gray.600" mt={0.5} />
                        </Tooltip>
                    </Flex>
                    

                    <Divider borderColor="black" />

                    <Flex mt={8} flexDirection="column">
                        <Flex height="140px" bgColor="purple.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/datadog.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Datadog</Text>
                                    </Flex>
                        
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button onClick={() => {router.push('/companies/datadog')}} height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref.</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="teal.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/figma.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Figma</Text>
                                    </Flex>
                                    
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref.</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="red.500" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/tesla.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Tesla</Text>
                                    </Flex>
                                    
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref.</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="blue.400" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/atlassian.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Atlassian</Text>
                                    </Flex>
                                    
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref.</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex> 
            <Flex flexDirection='column' minWidth="60px" bgColor='gray.200' mr={2} borderRadius='15px' height="720px">
            <Flex height="120px" p={5} flexDirection="column">
                    <Flex flexDirection="row">
                        <Text fontWeight={700} fontSize="18pt">New</Text> 
                        <Tooltip placement='auto' hasArrow label='Companies with the most referee/referal interest appear here' bg='black' color='white' borderRadius="7px">
                            <InfoIcon ml={2} alignSelf="center" color="gray.600" mt={0.5} />
                        </Tooltip>
                    </Flex>
                    

                    <Divider borderColor="black" />

                    <Flex mt={8} flexDirection="column">
                        <Flex height="140px" bgColor="pink.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/airbnb.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Airbnb</Text>
                                    </Flex>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    <Button height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="red.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/databricks.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Databricks</Text>
                                    </Flex>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    <Button height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="blue.900" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/samsara.jpeg" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Samsara</Text>
                                    </Flex>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    <Button height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="cyan.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2} border="2px solid lightgray">
                                <Flex flexDirection="column" width="50%" p={2} borderRight="2px solid lightgray" mt={2} mb={2}>
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt="auto" mb="auto">
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/stripe.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Stripe</Text>
                                    </Flex>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    <Button height="45px"><GrContactInfo /><Text ml={2}>Referrals</Text></Button>
                                    <Button height="45px" mt={2}><BiDonateHeart /><Text ml={2}>Give a Ref</Text></Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    
                    </Flex>
                </Flex>
            </Flex>
            
        </Flex>
    )
}
export default Trending;