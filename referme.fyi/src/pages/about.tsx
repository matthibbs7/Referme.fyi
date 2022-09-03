import type { NextPage } from 'next'
import { Divider, Flex, Heading, Text } from '@chakra-ui/react'
const About: NextPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" mt={10} pl='20%' pr='20%' textAlign="center">
        <Heading fontFamily="Nunito" mb={3}>What is referme.fyi?</Heading>
        <Text mb={10} maxWidth="760px">Referme.fyi started as a side passion project of students at the University of Florida 🐊 who sought to build a website that easily connects ambitious job seekers with employees at popular companies that are looking to make additional income. This website was heavily inspired by levels.fyi, a salary-sharing website, and our mission is to make the application process easier than ever, especially for people from non-traditional backgrounds or underrepresented communities.</Text>
        <Flex alignContent="center" width="70%">
            <Divider borderColor="gray.600" mb={10} verticalAlign="center" width="50%" />
            <Text width="600px" fontSize="10pt" verticalAlign="center" mt={-3}>Frequently Asked Questions</Text>
            <Divider borderColor="gray.600" mb={10} verticalAlign="center" width="50%" />
        </Flex>
        <Heading fontFamily="Nunito" mb={5}>Why should I use a referral?</Heading>
        <Text mb={10} maxWidth="760px">According to HR Technologist, “employees hired via referrals come in 55% faster than those sourced through career sites and this could make a world of difference for competitive firms, tight schedules, and demanding product development pipelines”. Having a referral can help separate you from other job candidates and may increase your chances of getting an interview or job offer.</Text>
        <Heading fontFamily="Nunito" mb={5}>Why should I give a referral?</Heading>
        <Text mb={10} maxWidth="760px">At many big companies, employee referrals come with a cash referral bonus. Because tech talent is so hard to find, companies are willing to pay big bucks to get the inside scoop on potential candidates. It's worth noting that not every company has a paid referral program in place. Some organizations only want to evaluate candidates on the merit of their work. But as the tech hiring marketplace heats up and recruiters fight to attract quality employees, employee referrals are becoming even more valuable. Additionally, employees want to work with people they've worked with before! It makes onboarding easier and can boost company culture all around to have familiar faces around the office.</Text>
    </Flex>
  )
}

export default About