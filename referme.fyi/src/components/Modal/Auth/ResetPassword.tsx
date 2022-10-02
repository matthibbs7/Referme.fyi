import { Button, Divider, Input, Text, Image, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../../firebase/errors';

type ResetPasswordProps = {
    
};

const ResetPassword:React.FC<ResetPasswordProps> = () => {

    const setAuthModalState = useSetRecoilState(authModalState)
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    
    const [
        sendPasswordResetEmail,
        sending,
        error,
    ] = useSendPasswordResetEmail(auth);

    // firebase logic
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await sendPasswordResetEmail(email)
        setSuccess(true)
    }

    return (
        <>
        {success ? (
            <>
                <Text mb={0} textAlign='center' color='blue.700' fontSize='12pt' fontWeight={700}>🎊 Reset password email sent 🎊</Text>
                <Text mb={2} textAlign='center' color='blue.700' fontSize='10pt' fontWeight={700}>Check your inbox</Text>
                <Divider borderColor='gray.500' mb={3} mt={2} />
                <Flex justifyContent='center' mt={1}>
                    <Text fontSize='10pt' onClick={() => setAuthModalState((prev) => ({
                        ...prev,
                        view: 'login',
                    }))} _hover={{cursor: 'pointer'}} ml={3} color='blue.500' fontWeight={700}>LOGIN</Text>
                    <Text fontSize='10pt' color='blue.500'>&nbsp;-&nbsp;</Text>
                    <Text fontSize='10pt' onClick={() => setAuthModalState((prev) => ({
                        ...prev,
                        view: 'signup',
                    }))} _hover={{cursor: 'pointer'}} color='blue.500' fontWeight={700}>SIGNUP</Text>
                </Flex>
            </>
        ) : (
        <form onSubmit={onSubmit}>
            <Text textAlign='center' color="black" fontSize="10pt" mb={2}>Enter the email associated with your account and we'll send you a reset link</Text>
            <Text fontWeight={700}>Email</Text>
            <Input required name="email" placeholder="Email Address" type="email" mb={2} onChange={(event) => setEmail(event.target.value)} />
            <Text textAlign='center' color='red' fontSize='10pt'>{FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}</Text>
            
            <Button _loading={{backgroundColor: 'teal.400'}} isLoading={sending} width='100%' height='36px' mt={2} mb={2} bg="brand.100" color="white" type='submit' _hover={{backgroundColor: 'teal.400'}}>Reset Password</Button>
            <Flex>
                <Divider borderColor="gray.500" mr={2} alignSelf="center" />
                <Text color="gray.500" mr={2}>OR</Text>
                <Divider borderColor="gray.500" alignSelf="center" />
            </Flex>
            
            <Flex justifyContent='center' mt={1}>
                <Text fontSize='10pt' onClick={() => setAuthModalState((prev) => ({
                    ...prev,
                    view: 'login',
                }))} _hover={{cursor: 'pointer'}} ml={3} color='blue.500' fontWeight={700}>LOGIN</Text>
                <Text fontSize='10pt' color='blue.500'>&nbsp;-&nbsp;</Text>
                <Text fontSize='10pt' onClick={() => setAuthModalState((prev) => ({
                    ...prev,
                    view: 'signup',
                }))} _hover={{cursor: 'pointer'}} color='blue.500' fontWeight={700}>SIGNUP</Text>
            </Flex>
        </form>)}
        </>
    )
}
export default ResetPassword;