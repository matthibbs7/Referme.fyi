import { Button, Divider, Input, Text, Image, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../../firebase/errors';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {

    const setAuthModalState = useSetRecoilState(authModalState)

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const [
        signInWithGoogle, 
        googleUser, 
        googleLoading, 
        googleError
    ] = useSignInWithGoogle(auth);

    // firebase logic
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        signInWithEmailAndPassword(loginForm.email, loginForm.password)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    return (
        <form onSubmit={onSubmit}>
            <Text color="black" fontSize="10pt" mb={2}>Sign in to connect with referees or applicants</Text>
            <Text fontWeight={700}>Email</Text>
            <Input required name="email" placeholder="Email Address" type="email" mb={2} onChange={onChange} />
            <Text fontWeight={700}>Password</Text>
            <Input mb={2} required name="password" placeholder="Password" type="password" onChange={onChange} />
            <Text textAlign='center' color='red' fontSize='10pt'>{FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}</Text>
            <Button _loading={{backgroundColor: 'teal.400'}} isLoading={loading || googleLoading} width='100%' height='36px' mt={2} mb={2} bg="brand.100" color="white" type='submit' _hover={{backgroundColor: 'teal.400'}}>Sign In</Button>
            <Flex justify="center">
                <Text textAlign="center" fontSize="9pt" mt={1}>Forgot your password?&nbsp;</Text>
                <Text textAlign="center" fontSize="9pt" mt={1} color="blue.500" fontWeight={700} _hover={{cursor: 'pointer'}} onClick={() => setAuthModalState((prev) => ({
                    ...prev,
                    view: 'resetPassword',
                }))}>Reset</Text>
            </Flex>
            <Flex justify="center">
                <Text textAlign="center" fontSize="9pt" mt={2} mb={3}>New here?&nbsp;</Text>
                <Text textAlign="center" mt={2} mb={2} fontSize="9pt" fontWeight={700} color="blue.600" _hover={{cursor: 'pointer'}} onClick={() => setAuthModalState((prev) => ({
                    ...prev,
                    view: 'signup',
                }))}> SIGN UP</Text>
            </Flex>
            <Flex>
                <Divider borderColor="gray.500" mr={2} alignSelf="center" />
                <Text color="gray.500" mr={2}>OR</Text>
                <Divider borderColor="gray.500" alignSelf="center" />
            </Flex>
            <Flex justify="center" mt={3}>
                <Image _hover={{cursor: 'pointer'}} ml={4} alt="facebook" src="/images/company_logos/facebook.png" height="20px" mr={4} />
                <Image _hover={{cursor: 'pointer'}} alt="google" src="/images/company_logos/googlelogo.png" height="20px" mr={4} onClick={() => signInWithGoogle()} />
                <Image _hover={{cursor: 'pointer'}} alt="github" src="/images/githublogo.png" height="20px" mr={4} />
            </Flex>
            {googleError && <Text mt={2} color='red' fontSize='10pt'>{FIREBASE_ERRORS[googleError.message as keyof typeof FIREBASE_ERRORS]}</Text>}
        </form>
    )
}
export default Login;