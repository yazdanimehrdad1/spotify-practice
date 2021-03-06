import {
    ButtonGroup,
    Box,
    IconButton,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderTrack,
    RangeSliderThumb,
    Center,
    Flex,
    Text,
} from '@chakra-ui/react'

import ReactHowler from 'react-howler'
import { useEffect, useRef, useState } from 'react'
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from 'react-icons/md'
import { useStoreActions } from 'easy-peasy'
import { formatTime } from '../lib/formatters'

const Player = ({songs, activeSong})=>{
    
    const [playing, setPlaying] = useState(false)
    const [index, setIndex] = useState(0)
    const [seek, setSeek] = useState(0.0)
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [duration, setDuration] = useState(0.0)
    
    
    const setPlayState = (value)=>{
        setPlaying(value)
    }
    const setShuffleState = ()=>{
        setShuffle( state =>!state)
    }
    const setRepeatState = ()=>{
        setRepeat( state =>!state)
    }


    return(
        <Box>
            <Box>
                {/* <ReactHowler playing={playing} src={activeSong?.url}  /> */}
            </Box>
            <Center color="gray.600">
                <ButtonGroup>
                    <IconButton 
                        outline="none" 
                        variant="link" 
                        aria-label="shuffle" 
                        fontSize="24px"  
                        icon={<MdShuffle />}  
                        color={shuffle ? 'white': 'gray.600'}
                        onClick={setShuffleState}

                    />
                    <IconButton outline="none" variant="link" aria-label="skip" fontSize="24px"  icon={<MdSkipPrevious />} />
                    {playing?
                        <IconButton 
                            outline="none" 
                            variant="link" 
                            aria-label="play" 
                            fontSize="40px" 
                            color="white"  
                            icon={<MdOutlinePlayCircleFilled />} 
                            onClick={()=>setPlayState(false)}
                        />
                        :
                        <IconButton 
                            outline="none" 
                            variant="link" 
                            aria-label="shuffle" 
                            fontSize="40px"  
                            color="white"  
                            icon={<MdOutlinePauseCircleFilled />} 
                            onClick={()=> setPlayState(true)}
                        />
                    }
                    <IconButton outline="none" variant="link" aria-label="next" fontSize="24px"  icon={<MdSkipNext />} />
                    <IconButton 
                        outline="none" 
                        variant="link" 
                        aria-label="repeat" 
                        fontSize="24px"  
                        icon={<MdOutlineRepeat />}
                        color={repeat ? 'white': 'gray.600'} 
                        onClick={setRepeatState}
                    />

                </ButtonGroup>
            </Center>
            <Box color="gray.600">
                <Flex justify="center" align="center">
                    <Box width="10%">
                        <Text fontSize="xs">1:21</Text>
                    </Box>
                    <Box width="80%">
                        <RangeSlider 
                            aria-label={['min', 'max']} 
                            step={0.1} min={0} 
                            max={22} 
                            id="player-range"
                        >
                            <RangeSliderTrack bg="gray.800">
                                <RangeSliderFilledTrack bg="gray.600" />
                            </RangeSliderTrack>
                            <RangeSliderThumb index={0} />
                        </RangeSlider>
                    </Box>
                    <Box width="10%" textAlign="right">
                        <Text fontSize="xs">duration</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Player