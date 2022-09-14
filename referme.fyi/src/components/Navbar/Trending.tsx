import React from 'react';
import { Flex, Text} from '@chakra-ui/react'
type TrendingProps = {
    
};

const Trending:React.FC<TrendingProps> = () => {
    
    return (
        <Flex mt={5} flexDirection='row'>
            <Flex flexDirection='column' width="25%" bgColor='gray.200' mr={4} borderRadius='15px' height="150px">T</Flex>
            <Flex flexDirection='column' width="25%" bgColor='gray.200' mr={4} borderRadius='15px' height="150px">H</Flex>
            <Flex flexDirection='column' width="25%" bgColor='gray.200' mr={4} borderRadius='15px' height="150px">A</Flex>
            <Flex flexDirection='column' width="25%" bgColor='gray.200' borderRadius='15px' height="150px">D</Flex>
        </Flex>
    )
}
export default Trending;