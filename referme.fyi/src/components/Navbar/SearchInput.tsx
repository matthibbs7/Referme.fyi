import React from 'react';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

type SearchInputProps = {
    //
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return (
        <Flex  mr={2} align="center" w={["45%", "380px", "380px", "380px"]} ml={[-5, 0, 0, 0]}>
            <InputGroup width="100%" _hover={{cursor: 'pointer'}}>
                <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.500' />}
                />
                <Input color='gray.600' bg="white" borderWidth={2} type='tel' _placeholder={{color: 'gray.500'}} placeholder='Search for a company or referee' />
            </InputGroup>
        </Flex>
    )
}
export default SearchInput;