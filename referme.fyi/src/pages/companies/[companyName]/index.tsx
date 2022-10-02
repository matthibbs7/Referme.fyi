import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { Company } from '../../../atoms/companiesAtom';
import { firestore } from '../../../firebase/clientApp';
import safeJsonStringify from 'safe-json-stringify';
import { Flex, Text } from '@chakra-ui/react';

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
    
    return <div>Welcome to {companyData.imageURL}</div>
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