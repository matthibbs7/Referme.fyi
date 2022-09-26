import { Button, Text, Menu, MenuButton, MenuItem, MenuList, Flex, Link, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { BiBook, BiChevronDown, BiChevronUp } from 'react-icons/bi'

const TechResources:React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen} >
                    <MenuButton display={{base: "none", md: 'unset'}} minWidth="180px" onMouseLeave={onClose} onMouseEnter={onOpen} zIndex="2" _hover={{bgColor: 'gray.600'}} height="34px" borderRadius="0px" bg="gray.500" color="white" pl={4} pr={3}>
                        <Flex align="center">
                            <BiBook /> 
                            <Text fontWeight="bold" ml={2}>Tech Resources</Text>
                            {isOpen ? <BiChevronUp /> : <BiChevronDown /> }
                        </Flex>
                    </MenuButton>
                    <MenuList onMouseLeave={onClose} onMouseEnter={onOpen} borderRadius="10px" mt={-4} zIndex="1" p={3}>
                        <Text mt={2} fontWeight={700}>Essential</Text>
                        <MenuItem onClick={()=>{}} borderRadius="5px"><Link fontWeight={700} textDecoration="none" _hover={{textDecoration: 'none'}} href="https://www.techinterviewhandbook.org/" target="_blank">📖 Tech Interview Handbook</Link></MenuItem>
                        <MenuItem onClick={()=>{}} borderRadius="5px"><Link fontWeight={700} textDecoration="none" _hover={{textDecoration: 'none'}} href="https://www.levels.fyi/" target="_blank">💸 Levels.fyi</Link></MenuItem>
                        <Text mt={2} fontWeight={700}>Networking</Text>
                        <MenuItem onClick={()=>{}} borderRadius="5px">Leetcode</MenuItem>
                        <Text mt={2} fontWeight={700}>Technical Problems</Text>
                        <MenuItem  onClick={()=>{}} borderRadius="5px">Leetcode</MenuItem>
                        <MenuItem onClick={() =>{}} borderRadius="5px">Create Account</MenuItem> 
                    </MenuList>
        </Menu>
        
    )
}
export default TechResources;