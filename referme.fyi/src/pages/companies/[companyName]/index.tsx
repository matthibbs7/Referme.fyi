import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { Company } from '../../../atoms/companiesAtom';
import { firestore } from '../../../firebase/clientApp';
import safeJsonStringify from 'safe-json-stringify';
import { Box, Flex, Text, Image, Tabs, Tab, TabList, TabPanel, TabPanels, Divider, Button } from '@chakra-ui/react';
import { FaGlobeAmericas, FaMoneyBillWave, FaPen } from 'react-icons/fa'
import { GrContactInfo } from 'react-icons/gr'
import { BiDonateHeart, BiDirections} from 'react-icons/bi'
import { HiBookmark } from 'react-icons/hi'

import router from 'next/router';

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
                        <Image mt={8} ml="auto" mr="auto" src={companyData.imageURL} height="72px" width="72px" />
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

                        <TabPanels>
                            <TabPanel>
                            <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                            <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                            <p>three!</p>
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