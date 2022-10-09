import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { Company } from '../../../atoms/companiesAtom';
import { firestore } from '../../../firebase/clientApp';
import safeJsonStringify from 'safe-json-stringify';
import { Box, Flex, Text, Image, Tabs, Tab, TabList, TabPanel, TabPanels, Divider, Button, Input, InputGroup, InputLeftElement, Badge, Stack, Checkbox } from '@chakra-ui/react';
import { FaGlobeAmericas, FaMoneyBillWave, FaPen } from 'react-icons/fa'
import { BiCommentDetail, BiDirections, BiChevronDown} from 'react-icons/bi'
import { HiBookmark } from 'react-icons/hi'

import router from 'next/router';
import { SearchIcon } from '@chakra-ui/icons';

type companyPageProps = {
    companyData: Company;
};

const CompanyPage:React.FC<companyPageProps> = ({ companyData }) => {
    console.log("data: ", companyData)
    
    if (!companyData) {
        return (
            <Flex height="540px" justifyContent="center" align="center" flexDirection="column">
                
                <Text fontWeight={700} fontSize="26pt" color="red.400">Company not found :(</Text>
                <Text color="gray.600" width="22%" textAlign="center">Please note that this website is new and is being actively updated with new companies weekly. Alternatively, you may speed up this process by submitting a request to add a specific new company here.</Text>
            </Flex>
        )
    }
    
    return (
        <Flex height="1000px" justifyContent="center">
            <Flex width="100%" maxWidth='1200px' minWidth="500px" flexDirection="row" style={{backgroundColor: `#${companyData.brandColor}`}} borderRadius="20px" mt={5} mb={5} p={3}>
                <Flex flexDirection="column" mr={3} width="23%">
                    <Flex height="335px" bg="white" flexDirection="column" borderRadius="15px">
                        <Image mt={8} ml="auto" mr="auto" src={companyData.imageURL} maxHeight="72px" maxWidth="72px" />
                        <Text mt={2} ml="auto" mr="auto" color="black" fontWeight={700} fontSize="24pt">{companyData.name[0].toUpperCase() + companyData.name.slice(1)}</Text>
                        <Text ml="auto" mr="auto" color="gray.700" fontSize="10pt">{companyData.numberOfSubscribers + " Page Subscribers"}</Text>
                        <Box mt={4} ml="auto" mr="auto" width="80%" height="1.5px" bg="lightgray"></Box>
                        <Flex mt={5} ml="auto" mr="auto" flexDirection="row" align="center">
                            <FaGlobeAmericas color="black" />
                            <Text _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => {router.push(`${companyData.companyLink}`)}} ml={2} fontWeight={700} fontSize="16pt" color="black">Website → </Text>
                        </Flex>
                        <Flex ml="auto" mr="auto" flexDirection="row" align="center">
                            <FaMoneyBillWave color="black" />
                            <Text _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => {router.push(`https://www.levels.fyi/companies/${companyData.name}/salaries`)}} ml={2} fontWeight={700} fontSize="16pt" color="black">Salaries → </Text>
                        </Flex>
                        <Flex ml="auto" mr="auto" flexDirection="row" align="center">
                            <FaPen color="black" />
                            <Text _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => {router.push(`https://www.glassdoor.com/Search/results.htm?keyword=${companyData.name}`)}} ml={2} fontWeight={700} fontSize="16pt" color="black">Reviews → </Text>
                        </Flex>
                        
                    </Flex>
                    <Flex mt={4} height="115px" bg="white" borderRadius="13px" justifyContent="center" align="center" flexDirection="column">
                        <Button width="90%" borderRadius="10px" colorScheme="twitter"><HiBookmark /> &nbsp;Subscribe</Button>
                        <Button mt={2} width="90%" borderRadius="10px" colorScheme="facebook"><BiDirections /> &nbsp;Company Directory</Button>
                    </Flex>
                    
                    
                </Flex>
                <Flex bg="white" width="100%" borderRadius="15px">
                    <Flex p={5} width="100%" flexDirection="column">
                        <Tabs variant='soft-rounded' colorScheme="twitter">
                        <TabList width="100%" border="2px solid lightgray" borderRadius="20px" p={2} color="black" fontWeight={700}>
                            <Tab width="50%" color="black" fontWeight={700}>Referrals ({companyData.numberOfReferrals}) </Tab>
                            <Tab width="50%" color="black" fontWeight={700}>Give a Referral</Tab>
                        </TabList>

                        <TabPanels width="100%">
                            <TabPanel width="100%">
                                <Flex ml={-4} width="104%">
                                    <Flex width="100%" flexDirection="row">
                                        <Flex p={4} flexDirection="column" width="70%" border="2px solid lightgray" borderRadius="15px">
                                            
                                            
                                            <Flex flexDirection="row" mt={1} flexWrap="wrap" justifyContent="center">
                                                <Flex width="55%" minWidth="270px" flexDirection="column">
                                                    <Flex mr={2} maxWidth="380px">
                                                        <InputGroup width="100%" _hover={{cursor: 'pointer'}}>
                                                            <InputLeftElement
                                                            pointerEvents='none'
                                                            children={<SearchIcon color='gray.500' />}
                                                            />
                                                            <Input color='gray.600' bg="white" borderWidth={2} type='tel' _placeholder={{color: 'gray.500'}} placeholder='Search referrals' />
                                                        </InputGroup>
                                                    </Flex>
                                                    <Stack ml={1} mt={2} spacing={5} direction='row'>
                                                        <Checkbox color="gray.600" fontWeight={700} colorScheme='facebook' defaultChecked>
                                                            Senior+
                                                        </Checkbox>
                                                        <Checkbox color="gray.600" fontWeight={700} colorScheme='facebook' defaultChecked>
                                                            New Grad
                                                        </Checkbox>
                                                        <Checkbox color="gray.600" fontWeight={700} colorScheme='facebook' defaultChecked>
                                                            Internship
                                                        </Checkbox>
                                                    </Stack>
                                                </Flex>
                                                <Flex borderLeft="1px solid lightgray" ml={2} width="40%" flexDirection="column">
                                                    <Flex ml={4} flexDirection="row" >
                                                    <Text mt={2} fontWeight={700}>Sort By:</Text>
                                                    <Button border="2px dashed lightgray" mt={1} ml={6} borderRadius="10px" height="30px" minWidth="135px" bg="gray.100" color="black"><Text mr="auto">New</Text><BiChevronDown /></Button>
                                                    </Flex>
                                                    <Flex ml={4} mt={3.5} flexDirection="row">
                                                    <Text fontWeight={700}>Order By:</Text>
                                                    <Button border="2px dashed lightgray" ml={3} mt={-0.5} borderRadius="10px" height="30px" minWidth="135px" bg="gray.100" color="black"><Text mr="auto">Ascending</Text><BiChevronDown /></Button>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                        <Flex display={{base: "none", lg: 'unset'}} flexDirection="column" p={3} ml={4} width="30%" border="2px solid lightgray" height="120px" borderRadius="15px">
                                            
                                            <Text mt={2.5} fontWeight={600} color="black">Use the parameters on the left to filter the list of referrals offered by employees at this company</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                
                                <Flex style={{overflowY: 'scroll', height: "670px", whiteSpace: 'nowrap'}} flexDirection="column" ml={-4} width="104%" borderTop="2px solid lightgray" mt={5}>
                                    <Flex _hover={{cursor: 'pointer'}} height="130px" flexDirection="column" p={4} mt={5} width="70%" bg="white" border="2px solid lightgray" borderRadius="15px">
                                        <Flex flexDirection="row">
                                            <Text fontWeight={700} fontSize="14pt" >Looking to refer 2 smart people</Text>
                                            <Text ml={2} fontWeight={700} color="gray.500">Seattle, WA</Text>
                                        </Flex>
                                        <Flex flexDirection="row" mt={2}>
                                            <Flex width="100%" flexDirection="row">
                                                <Text height="25px" bg="teal.200" color="teal.600" borderRadius="20px" fontWeight={700} width="75px" pl={2}>Senior+</Text>
                                                <Text height="25px" bg="cyan.200" color="cyan.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>New Grad</Text>
                                                <Text height="25px" bg="purple.200" color="purple.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>Internship</Text>
                                            </Flex>
                                            <Button color="gray" border="2px solid lightgray" bg="white" height="30px">0&nbsp;<BiCommentDetail color="gray" fontSize="16pt" /></Button>
                                        </Flex>
                                        
                                    </Flex>
                                    <Flex mt={4} height="130px" flexDirection="column" p={4} width="70%" bg="white" border="2px solid lightgray" borderRadius="15px">
                                        <Flex flexDirection="row">
                                            <Text fontWeight={700} fontSize="14pt" >Looking to refer 2 smart people</Text>
                                            <Text ml={2} fontWeight={700} color="gray.500">Seattle, WA</Text>
                                        </Flex>
                                        <Flex flexDirection="row" mt={2}>
                                            <Flex width="100%" flexDirection="row">
                                                <Text height="25px" bg="teal.200" color="teal.600" borderRadius="20px" fontWeight={700} width="75px" pl={2}>Senior+</Text>
                                                <Text height="25px" bg="cyan.200" color="cyan.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>New Grad</Text>
                                                <Text height="25px" bg="purple.200" color="purple.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>Internship</Text>
                                            </Flex>
                                            <Button color="gray" border="2px solid lightgray" bg="white" height="30px">0&nbsp;<BiCommentDetail color="gray" fontSize="16pt" /></Button>
                                        </Flex>
                                        
                                    </Flex>
                                    <Flex mt={4} height="130px" flexDirection="column" p={4} width="70%" bg="white" border="2px solid lightgray" borderRadius="15px">
                                        <Flex flexDirection="row">
                                            <Text fontWeight={700} fontSize="14pt" >Looking to refer 2 smart people</Text>
                                            <Text ml={2} fontWeight={700} color="gray.500">Seattle, WA</Text>
                                        </Flex>
                                        <Flex flexDirection="row" mt={2}>
                                            <Flex width="100%" flexDirection="row">
                                                <Text height="25px" bg="teal.200" color="teal.600" borderRadius="20px" fontWeight={700} width="75px" pl={2}>Senior+</Text>
                                                <Text height="25px" bg="cyan.200" color="cyan.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>New Grad</Text>
                                                <Text height="25px" bg="purple.200" color="purple.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>Internship</Text>
                                            </Flex>
                                            <Button color="gray" border="2px solid lightgray" bg="white" height="30px">0&nbsp;<BiCommentDetail color="gray" fontSize="16pt" /></Button>
                                        </Flex>
                                        
                                    </Flex>
                                    <Flex mt={4} height="130px" flexDirection="column" p={4} width="70%" bg="white" border="2px solid lightgray" borderRadius="15px">
                                        <Flex flexDirection="row">
                                            <Text fontWeight={700} fontSize="14pt" >Looking to refer 2 smart people</Text>
                                            <Text ml={2} fontWeight={700} color="gray.500">Seattle, WA</Text>
                                        </Flex>
                                        <Flex flexDirection="row" mt={2}>
                                            <Flex width="100%" flexDirection="row">
                                                <Text height="25px" bg="teal.200" color="teal.600" borderRadius="20px" fontWeight={700} width="75px" pl={2}>Senior+</Text>
                                                <Text height="25px" bg="cyan.200" color="cyan.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>New Grad</Text>
                                                <Text height="25px" bg="purple.200" color="purple.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>Internship</Text>
                                            </Flex>
                                            <Button color="gray" border="2px solid lightgray" bg="white" height="30px">0&nbsp;<BiCommentDetail color="gray" fontSize="16pt" /></Button>
                                        </Flex>
                                        
                                    </Flex>
                                    <Flex mt={4} height="130px" flexDirection="column" p={4} width="70%" bg="white" border="2px solid lightgray" borderRadius="15px">
                                        <Flex flexDirection="row">
                                            <Text fontWeight={700} fontSize="14pt" >Looking to refer 2 smart people</Text>
                                            <Text ml={2} fontWeight={700} color="gray.500">Seattle, WA</Text>
                                        </Flex>
                                        <Flex flexDirection="row" mt={2}>
                                            <Flex width="100%" flexDirection="row">
                                                <Text height="25px" bg="teal.200" color="teal.600" borderRadius="20px" fontWeight={700} width="75px" pl={2}>Senior+</Text>
                                                <Text height="25px" bg="cyan.200" color="cyan.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>New Grad</Text>
                                                <Text height="25px" bg="purple.200" color="purple.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>Internship</Text>
                                            </Flex>
                                            <Button color="gray" border="2px solid lightgray" bg="white" height="30px">0&nbsp;<BiCommentDetail color="gray" fontSize="16pt" /></Button>
                                        </Flex>
                                        
                                    </Flex>
                                    <Flex mt={4} height="130px" flexDirection="column" p={4} width="70%" bg="white" border="2px solid lightgray" borderRadius="15px">
                                        <Flex flexDirection="row">
                                            <Text fontWeight={700} fontSize="14pt" >Looking to refer 2 smart people</Text>
                                            <Text ml={2} fontWeight={700} color="gray.500">Seattle, WA</Text>
                                        </Flex>
                                        <Flex flexDirection="row" mt={2}>
                                            <Flex width="100%" flexDirection="row">
                                                <Text height="25px" bg="teal.200" color="teal.600" borderRadius="20px" fontWeight={700} width="75px" pl={2}>Senior+</Text>
                                                <Text height="25px" bg="cyan.200" color="cyan.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>New Grad</Text>
                                                <Text height="25px" bg="purple.200" color="purple.600" borderRadius="20px" fontWeight={700} ml={3} width="90px" pl={2}>Internship</Text>
                                            </Flex>
                                            <Button color="gray" border="2px solid lightgray" bg="white" height="30px">0&nbsp;<BiCommentDetail color="gray" fontSize="16pt" /></Button>
                                        </Flex>
                                        
                                    </Flex>
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                            <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                        </Tabs>
                        
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
    
   
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // get company data
    try {
        const companyDocRef = doc(firestore, 'companies', context.query.companyName as string)
        const companyDoc = await getDoc(companyDocRef);
   
        return {
            props: {
                companyData: companyDoc.exists() ? JSON.parse(safeJsonStringify({
                    name: companyDoc.id,
                    ...companyDoc.data()
                })) : "",
            },
        };

    } catch (error) {
        console.log('getServerSideProps error', error);
    }
}

export default CompanyPage;