import React, { useState, useEffect } from 'react'
import rollo_bg_hor from '../../../assets/rollo_bg_hor.jpg'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useFetchData } from '../../../providers/IMBFetch';


const PreviewMovie = () => {
  const { titles} = useFetchData();
  const [moviePreview, setMoviePreview] = useState('');
  //  const API_Key = 'cR2qHdWDwyP9PKajFjN1XpNlbAN0xAlVK6wEfbYq'
  // const [detailMovies, setDetailMovies] = useState('');

  const changePreview = () => {
    const randomMovie =
    titles[Math.floor(Math.random() * titles.lenght-1)]

    setMoviePreview(randomMovie)
    console.log(randomMovie);
    
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
      <Box background ='rollo_bg_hor ' w='100vw' h='100%'overflow='hidden' position='relative' 
           backdropFilter='auto' backdropContrast='30%' bgPosition='center' backgroundSize='cover'>
      </Box>
      <Flex direction='column' gap='1vw' position='absolute' left='5vw' maxW='80vw'>
        <Box>
          <Text as='em' fontSize='1.2vw' color= 'var(--color-light)' letterSpacing='1.2px' paddingTop='2vw'>{moviePreview.genre}</Text>
          <Text as='em' fontSize='1.2vw' color= 'var(--color-light)' letterSpacing='1.2px' paddingTop='2vw'>{moviePreview.year}</Text>
        </Box>
        <Text as='b' fontSize='5vw' color= 'var(--color-light)'  letterSpacing='1.5px' lineHeight='3vw'>{moviePreview.title}</Text>
        <Text fontSize='1.5vw' color= 'var(--color-light)' letterSpacing='1.5px' lineHeight='3vw'>{moviePreview.rank} | {moviePreview.rating} </Text>
      </Flex>  
    </Flex>
  )

}
export default PreviewMovie;