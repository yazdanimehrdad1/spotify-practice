import {Box, Flex, Text} from '@chakra-ui/layout'
import {useStoreState} from 'easy-peasy'
import Player from './player'

const PlayerBar = ()=>{
    return(
        <Box height="100px" width="100vw" bg="gray.900" padding="10px">
            <Flex align="center">
                <Box padding="20px" color="white" width="30%">
                    <Text fontSize="large">Active Song</Text>
                    <Text fontSize="sm">Active artist.name</Text>
                </Box>
                <Box width="40%">
                    <Player />
                </Box>
                
            </Flex>

        </Box>
    )
}

export default PlayerBar