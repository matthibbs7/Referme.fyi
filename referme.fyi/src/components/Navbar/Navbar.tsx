import React from 'react';
import { Flex, Image, Text, Link } from '@chakra-ui/react';
import SearchInput from './SearchInput';
import RightContent from './RightContent/RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
const Navbar:React.FC = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <Flex bg="#29CC98" height="84px" padding="6px 12px" align="center">
            <Flex align="center" mr={5}>
                <Image src="/images/refermefyi2.png" height="64px" />
                <Link href='/' style={{ textDecoration: 'none' }}>
                    <Text color="white" fontWeight="800" fontSize="22pt" display={{base: "none", md: 'unset'}}>referme.fyi</Text>
                </Link>
            </Flex>
            {/* <Directory /> */}
            <SearchInput />
            <RightContent user={user} />
        </Flex>
    )
}
export default Navbar;