import React from 'react';
import Banner from '../Navbar/Banner';
import Navbar from '../Navbar/Navbar';
import SelectorBar from '../Navbar/SelectorBar'
import { Flex } from '@chakra-ui/react'
import Footer from '../Footer/Footer';
type Props = {
    children?: React.ReactNode
};

const Layout:React.FC<Props> = ({ children }) => {
    
    return (
        <>  
            <Banner />
            <Navbar />
            <SelectorBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout;