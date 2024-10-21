import React, { useState, useEffect, useContext } from 'react'
import rollo_bg_hor from '../../../assets/rollo_bg_hor.jpg'
import { Box, Flex, Text } from '@chakra-ui/react'
import {  useFetchData } from '../../../providers/IMBFetch';


const PreviewMovie = () => {
  const { titles} = useFetchData()
  const [moviePreview, setMoviePreview] = useState('');

  const changePreview = () => {
    const randomMovie =
    titles[Math.floor(Math.random() * titles.lenght)]
    console.log(titles);
    setMoviePreview(randomMovie)

    console.log(moviePreview);
    
  }

  const startInterval = () => {
    changePreview()
    const intervalId = setInterval(() => {
      changePreview()
    }, 5000)

    return () => clearInterval(intervalId)
  }

  useEffect(() => {
    startInterval()
  }, [])

  return (
     <Flex w='100%' h='85vh'alignItems='center' justifyContent='center' zIndex='1'>
     {/* {randomMovie.map((moviePreview) => (
         <Box>
            <Box background ={rollo_bg_hor} w='100vw' h='100%'overflow='hidden' position='relative' 
                 backdropFilter='auto' backdropContrast='30%' bgPosition='center' backgroundSize='cover'>
            </Box>
            <Flex direction='column' gap='1vw' position='absolute' left='5vw' maxW='80vw'>
                <Text as='b' fontSize='5vw' color= 'var(--color-light)'  letterSpacing='1.5px' lineHeight='3vw'>{moviePreview.titleText.text}</Text>
                <Box>
                <Text fontSize='1.5vw' color= 'var(--color-light)' letterSpacing='1.5px' lineHeight='3vw'>{moviePreview.titleType.displayableProperty.text} </Text>
                <Text as='em' fontSize='1.2vw' color= 'var(--color-light)' letterSpacing='1.2px' paddingTop='2vw'>{moviePreview.releaseDate.day} {moviePreview.releaseDate.month}|{moviePreview.releaseDate.year}</Text>
                </Box>
             </Flex> 
         </Box>
       ))}  */}
    </Flex>
  )

}
export default PreviewMovie;