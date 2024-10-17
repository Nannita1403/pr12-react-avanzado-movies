import React, { useState, useEffect } from 'react'
import { useFetchData } from '../../../providers/FetchApiProvider/FetchDataContext'
import rollo_bg_hor from '../../../assets/rollo_bg_hor.jpg'
import { Box, Flex, Text } from '@chakra-ui/react'


const PreviewMovie = () => {
  const { fetchData , movies} = useFetchData()
  const [moviePreview, setMoviePreview] = useState('');
  const API_Key = 'qx04hHQnfPqBQ1XXh6Kt7U2BjfQAHEFQQMt0NCQn'
  const [detailMovies, setDetailMovies] = useState('');

  const changePreview = () => {
    const randomMovie =
      movies[Math.floor(Math.random() * movies.length-1)]

    setMoviePreview(randomMovie)
  }
    const getDetailMovies = async () => {
      const resMovies = await fetch(`https://api.watchmode.com/v1/title/${moviePreview.id}/details/?apiKey=${API_Key}&append_to_response=sources`
);

      console.log(moviePreview);

      const finalResponse = await resMovies.json();
      console.log("Soy el resultado del busqueda", finalResponse);
      
      setDetailMovies(finalResponse);

}
   useEffect(()=> {
    moviePreview && getDetailMovies()
   }, [moviePreview ]) 

  const startInterval = () => {
    //changePreview()
    const intervalId = setInterval(() => {
      console.log("lo que sea");
      
      changePreview()
    }, 5000)

    return () => clearInterval(intervalId)
  }

  useEffect(() => {
    console.log(movies, "log en useEfect Movies");
    
    startInterval()
  }, [])

  return (
    
    <Flex w='100%' h='85vh'alignItems='center' justifyContent='center' zIndex='1'>
      <Box w='100vw' h='100%'overflow='hidden' position='relative' 
        backgroundImage ={ moviePreview && moviePreview.backdrop } backgroundSize='cover'>
      </Box>
      <Box>
        <Box>
          <Text>{moviePreview && moviePreview.genre_names}</Text>
        </Box>
        <Text>{moviePreview && moviePreview.title}</Text>
        <Text>{ moviePreview && moviePreview.plot_overview}</Text>
        <Text>{moviePreview && moviePreview.sources}</Text>
        <Text> {moviePreview && moviePreview.year} </Text>
      </Box>  
    </Flex>
  )

}
export default PreviewMovie;