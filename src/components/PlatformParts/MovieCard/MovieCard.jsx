import React, { useState } from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Box, Flex, Image } from '@chakra-ui/react'


const MovieCard = ({ movies, filter, setShowNavbar }) => {
  const [showMovieDetail, setShowMovieDetail] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie)
    setShowMovieDetail(true)
    setShowNavbar(false)
  }

  const filteredMovies = filter
    ? movies.filter((movie) =>
        movie.name.toLowerCase().trim().includes(filter.toLowerCase())
      )
    : movies

  return (
    <Flex style={{ display: 'flex' }}>
      <Box display='flex' gap='0.5vw'>
        {filteredMovies.map((movie) => (
          <Box key={movie._id} onClick={() => handleSelectMovie(movie)}>
            <Image src={movie.cover} alt={movie.name} />
          </Box>
        ))}
      </Box>
      {showMovieDetail && (
        <MovieDetails
          setShowMovieDetail={setShowMovieDetail}
          selectedMovie={selectedMovie}
          setShowNavbar={setShowNavbar}
        />
      )}
    </Flex>
  )
}

export default MovieCard