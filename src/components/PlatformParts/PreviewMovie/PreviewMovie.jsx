import React, { useState, useEffect } from 'react'
import { useFetchData } from '../../../providers/VariosFetch/FetchDataContext'
import rollo_bg_hor from '../../../assets/rollo_bg_hor.jpg'
import { Box, Flex, Text } from '@chakra-ui/react'


const PreviewMovie = () => {
  const { fetchData} = useFetchData()
  const [moviePreview, setMoviePreview] = useState('');
  //  const API_Key = 'cR2qHdWDwyP9PKajFjN1XpNlbAN0xAlVK6wEfbYq'
  // const [detailMovies, setDetailMovies] = useState('');

  const changePreview = () => {
    const randomMovie =
    fetchData[Math.floor(Math.random() * fetchData.length-1)]

    setMoviePreview(randomMovie)
    console.log(randomMovie);
    
  }
   /* const getDetailMovies = async () => {
      const resMovies = await fetch(`https://api.watchmode.com/v1/title/${moviePreview.id}/details/?apiKey=${API_Key}&append_to_response=sources`
);
      console.log(moviePreview);
      const finalResponse = await resMovies.json();
      console.log("Soy el resultado del busqueda", finalResponse);
      setDetailMovies(finalResponse);

}
   useEffect(()=> {
    moviePreview && getDetailMovies()
    console.log(fetchData);
    
    console.log(moviePreview);
    
   }, [moviePreview ]) */

  const startInterval = () => {
    changePreview()
    const intervalId = setInterval(() => {
      console.log("lo que sea");
      
      changePreview()
    }, 5000)

    return () => clearInterval(intervalId)
  }

  useEffect(() => {
    startInterval()
  }, [])

  return (
    
    <Flex w='100%' h='85vh'alignItems='center' justifyContent='center' zIndex='1'>
      <Box w='100vw' h='100%'overflow='hidden' position='relative' 
        backgroundImage ={moviePreview.poster_url}  bgPosition='center' backgroundSize='cover'>
      </Box>
      <Flex direction='column' gap='1vw' position='absolute' left='5vw' maxW='80vw'>
        <Box>
          <Text as='em' fontSize='1.2vw' color= 'var(--color-light)' letterSpacing='1.2px' paddingTop='2vw'>{moviePreview && moviePreview.genre_names}</Text>
        </Box>
        <Text as='b' fontSize='5vw' color= 'var(--color-light)'  letterSpacing='1.5px' lineHeight='3vw'>{moviePreview && moviePreview.title}</Text>
        <Text fontSize='1.5vw' color= 'var(--color-light)' letterSpacing='1.5px' lineHeight='3vw'>{ moviePreview && moviePreview.type}</Text>
        <Text fontSize='1.5vw' color= 'var(--color-light)' letterSpacing='1.5px' lineHeight='3vw'>{moviePreview && moviePreview.source_name}</Text>
        <Text as='em' fontSize='1.2vw' color= 'var(--color-light)' letterSpacing='1.2px' paddingTop='2vw'> {moviePreview && moviePreview.source_release_date} </Text>
      </Flex>  
    </Flex>
  )

}
export default PreviewMovie;