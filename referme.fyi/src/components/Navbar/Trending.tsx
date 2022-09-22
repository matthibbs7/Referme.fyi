import React from 'react';
import { Divider, Flex, Text, Tooltip, Image, Button} from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import { IoReaderOutline } from 'react-icons/io5'
import { VscReferences } from 'react-icons/vsc'
type TrendingProps = {
    
};

const Trending:React.FC<TrendingProps> = () => {
    
    return (
        <Flex mt={5} flexDirection='row' flexWrap="wrap" display="flex" justifyContent="center">
            <Flex ml={2} flexDirection='column' mb={5} minWidth="60px" bgColor='gray.200' mr={6} borderRadius='15px' height="900px">
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
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/googlelogo.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Google</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} bgColor="#29CC98" color="white" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="orange.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/amazonlogo.jpg" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Amazon</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} bgColor="#29CC98" color="white" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="blue.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/facebook.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Facebook</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} bgColor="#29CC98" color="white" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="green.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/microsoft.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Microsoft</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} bgColor="#29CC98" color="white" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="gray.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/apple.svg" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Apple</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referra</Button>
                                    <Button mt={2} bgColor="#29CC98" color="white" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDirection='column' mb={5} minWidth="60px" bgColor='gray.200' mr={6} borderRadius='15px' height="900px">
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
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/datadog.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Datadog</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} bgColor="#29CC98" color="white" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="teal.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/figma.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Figma</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} bgColor="#29CC98" color="white" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="red.300" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/tesla.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Tesla</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} bgColor="#29CC98" color="white" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="blue.400" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/atlassian.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Atlassian</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} bgColor="#29CC98" color="white" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="#29CC98" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/apple.svg" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Apple</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} bgColor="#29CC98" color="white" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex> 
            <Flex flexDirection='column' minWidth="60px" bgColor='gray.200' mr={2} borderRadius='15px' height="900px">
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
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/airbnb.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Airbnb</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} colorScheme="teal" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="#29CC98" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/amazonlogo.jpg" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Amazon</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} colorScheme="teal" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="#29CC98" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/facebook.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Facebook</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} colorScheme="teal" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="#29CC98" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/microsoft.png" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Microsoft</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} colorScheme="teal" height="45px">Referrals</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex mt={4} height="140px" bgColor="#29CC98" width="100%" borderRadius="10px" p={2} flexDirection="row">
                            <Flex bgColor="white" flexDirection="row" width="100%" borderRadius="8px" p={2}>
                                <Flex flexDirection="column" width="50%" p={2} borderRight="1px solid gray">
                                    <Flex flexDirection="row" height="50%" justifyContent="center" mt={1}>
                                        <Image mt={1} mr={2} _hover={{cursor: 'pointer'}} alt="facebook" src="/images/company_logos/apple.svg" height="30px" />
                                        <Text mt={1} color="black" fontWeight={700} fontSize="16pt" height="50%">Apple</Text>
                                    </Flex>
                                    <Button height="43px" mt={0}><IoReaderOutline /> <Text ml={2}>Info</Text></Button>
                                </Flex>
                                <Flex flexDirection="column" width="50%"  p={2}>
                                    
                                    
                                    <Button height="45px" >Give a Referral</Button>
                                    <Button mt={2} colorScheme="teal" height="45px">Referrals</Button>
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