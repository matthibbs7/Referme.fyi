import { Flex, Box, Text, Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input } from '@chakra-ui/react';
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import React, { useRef, useState } from 'react';
import { firestore, storage } from '../../../firebase/clientApp';
import useSelectFile from '../../../hooks/useSelectFile';
import ImageUpload from './ImageUpload';

type SubmitCompanyProps = {
    isOpen: boolean;
    handleClose: () => void;
};

const SubmitCompany:React.FC<SubmitCompanyProps> = ({ isOpen, handleClose }) => {
    const [companyName, setCompanyName] = useState("");
    const [charsRemaining, setCharsRemaining] = useState(21);
    const selectFileRef = useRef<HTMLInputElement>(null);
    const [brandColor, setBrandColor] = useState('444444');
    const [brandRemaining, setBrandRemaining] = useState(6);
    
    const [companyLink, setCompanyLink] = useState('');
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { selectedFile, setSelectedFile, onSelectImage } = useSelectFile();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 21) return;
        setCompanyName(event.target.value);
        setCharsRemaining(21 - event.target.value.length);
    }

    const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 6) return;
        setBrandColor(event.target.value);
        setBrandRemaining(6 - event.target.value.length);
    }

    const handleCreateCommunity = async () => {
        const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    
        if (format.test(companyName) || companyName.length < 3) {
          return setError(
            "Company names must be between 3–21 characters, and can only contain letters, numbers, or underscores."
          );
        }
    
        setLoading(true);
        try {
          // Create community document and communitySnippet subcollection document on user
          const companyDocRef = doc(firestore, "companies", companyName);
          const companyDoc = await getDoc(companyDocRef);
          
          if (companyDoc.exists()) {
            throw new Error(`Sorry, companies/${companyName} already exists.`);
          }

          await setDoc(companyDocRef, {
            createdAt: serverTimestamp(),
            numberOfSubscribers: 1,
            numberOfReferrals: 0,
            brandColor: brandColor,
            companyLink: companyLink,
          })

        } catch (error: any) {
          console.log("Transaction error", error);
          setError(error.message);
        }
        console.log("ATTEMPTING FILE")
        console.log(selectedFile)
        if (!selectedFile) {
            setLoading(false);
            return;
        }
        try {
            const imageRef = ref(storage, `companies/${companyName}/image`);
            await uploadString(imageRef, selectedFile, "data_url");
            new Promise(resolve => setTimeout(resolve, 10000));
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(firestore, "companies", companyName), {
                imageURL: downloadURL,
            });
        } catch {
            console.log("FAILED TO UPLOAD IMAGE")
        }
        

        setLoading(false);
      };
    



    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader display="flex" flexDirection='column' fontSize={15} p={3}>Create company page</ModalHeader>
                    <Box pl={3} pr={3}> 
                        <Divider />
                        <ModalCloseButton />
                        <ModalBody display="flex" flexDirection="column" p="10px 0px">
                            <Text fontWeight={700} fontSize={15}>Name</Text>
                            <Text mb={-5} fontSize={11} color="gray.500">Company names cannot be changed</Text>
                            <Text color='gray.400' position='relative' top='28px' left='10px' width='20px'>c/</Text>
                            <Input borderRadius="5px" onChange={handleChange} position='relative' value={companyName} size='sm' pl='22px'  />
                            <Text fontSize='9pt' color={charsRemaining === 0 ? 'red' : 'gray.500'}>{charsRemaining} Characters remaining</Text>
                            
                            <Flex flexDirection="row" align="center">
                                <Text fontWeight={700} fontSize={15} mt={4}>Brand Color</Text>
                                <Flex ml={2} mt={4} height="20px" width="20px" style={{backgroundColor: `#${brandColor}`}}></Flex>
                            </Flex>
                            <Text mb={-5} fontSize={11} color="gray.500">Enter hex code</Text>
                            <Text color='gray.400' position='relative' top='28px' left='10px' width='10px'>#</Text>
                            <Input position="relative" borderRadius="5px" onChange={handleBrandChange} value={brandColor} size='sm' pl='20px'  />
                            
                            <Text mt={4} fontWeight={700} fontSize={15}>Company Website</Text>
                            <Text fontSize={11} color="gray.500">Informational link (optional)</Text>
                            <Input mt={1} placeholder="https://www.facebook.com/" borderRadius="5px" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setCompanyLink(event.target.value)}} value={companyLink} size='sm' pl='10px'  />
                            

                            <Text mt={4} fontWeight={700} fontSize={15}>Logo</Text>
                            <Text mb={2} fontSize={11} color="gray.500">Upload a square-like company logo image</Text>
                            <ImageUpload selectFileRef={selectFileRef} selectedFile={selectedFile} onSelectImage={onSelectImage} setSelectedFile={setSelectedFile} />

                            <input
                                id='file-upload'
                                type='file'
                                accept='image/x-png,image/gif,image/jpeg'
                                hidden
                                ref={selectFileRef}
                                onChange={onSelectImage}
                            />
                            
                            <Text fontSize='9pt' color='red' pt={1}>{error}</Text>
                        </ModalBody>
                    </Box>
                    <ModalFooter borderBottomRadius="5px" bg='gray.100'>
                        <Button isLoading={loading} onClick={handleCreateCommunity} colorScheme="facebook">Request Company</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default SubmitCompany;