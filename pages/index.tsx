import { Box, Flex, Text } from '@chakra-ui/layout'
import Head from 'next/head'
// import Image from 'next/image'
import { Image } from '@chakra-ui/react'

// import styles from '../styles/Home.module.css'
import GradientLayout from '../components/gradientLayout'
import prisma from '../lib/prisma'
const Home = ({artists}) => {
  return (
    <GradientLayout 
      roundImage
      color="red"
      subtitle="profile"
      title="Scott Moss"
      description="15 public playlists"
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
    >
      <Box color="white" paddingX="40px" >
        <Box marginBottom="40px">
          <text fontSize="2xl" fontWeight="bold">Top artist this month</text>
          <text fontSize="md">Only visible to youy</text>
        </Box>
        <Flex>
          {artists.map((artist)=>(
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  // borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () =>{
  const artists =  await prisma.artist.findMany({})
  return{
    props:{artists}
  }
}


export default Home
