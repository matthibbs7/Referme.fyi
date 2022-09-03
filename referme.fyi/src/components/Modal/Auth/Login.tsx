import { Button, Divider, Input, Text, Image, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    const onSubmit = () => {}

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    return (
        <form onSubmit={onSubmit}>
            <Text color="gray.500" fontSize="10pt" mb={2}>Sign in to connect with referees or applicants</Text>
            <Text fontWeight={700}>Email</Text>
            <Input required name="email" placeholder="Email Address" type="email" mb={2} onChange={onChange} />
            <Text fontWeight={700}>Password</Text>
            <Input mb={2} required name="password" placeholder="Password" type="password" onChange={onChange} />
            <Button width='100%' height='36px' mt={2} mb={2} bg="brand.100" color="white" type='submit'>Log In</Button>
            <Flex justify="center">
                <Text textAlign="center" fontSize="9pt" mt={1}>Forgot your password?&nbsp;</Text>
                <Text textAlign="center" fontSize="9pt" mt={1} color="blue.500" fontWeight={700} _hover={{cursor: 'pointer'}}>Reset</Text>
            </Flex>
            <Flex justify="center">
                <Text textAlign="center" fontSize="9pt" mt={2} mb={3}>New here?&nbsp;</Text>
                <Text textAlign="center" mt={2} mb={2} fontSize="9pt" fontWeight={700} color="blue.600" _hover={{cursor: 'pointer'}}> SIGN UP</Text>
            </Flex>
            <Flex>
                <Divider borderColor="gray.500" mr={2} alignSelf="center" />
                <Text color="gray.500" mr={2}>OR</Text>
                <Divider borderColor="gray.500" alignSelf="center" />
            </Flex>
            <Flex justify="center" mt={3}>
                <Image _hover={{cursor: 'pointer'}} ml={4} alt="facebook" src="/images/facebook.png" height="20px" mr={4} />
                <Image _hover={{cursor: 'pointer'}} alt="google" src="/images/googlelogo.png" height="20px" mr={4} />
                <Image _hover={{cursor: 'pointer'}} alt="github" src="/images/githublogo.png" height="20px" mr={4} />
            </Flex>
        </form>
    )
}
export default Login;