import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Trending from '../components/Navbar/Trending'
import styles from '../styles/Home.module.css'
import { Text, Flex } from '@chakra-ui/react'
const Home: NextPage = () => {
  return (
    <Flex justifyContent='center'>
      <Flex width="100%" maxWidth="1200px" bgColor="gray.100" flexDirection='column'>
        <Trending />
      </Flex>
    </Flex>
  
  )
}

export default Home
