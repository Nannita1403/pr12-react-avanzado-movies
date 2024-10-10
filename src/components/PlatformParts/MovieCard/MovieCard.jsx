import React, { useState } from 'react'
import { MovieCategoryContainer, Card, Image } from './MovieCard.Styles'
import MovieDetails from '../Details/MovieDetails'

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
    <div style={{ display: 'flex' }}>
      <MovieCategoryContainer>
        {filteredMovies.map((movie) => (
          <Card key={movie._id} onClick={() => handleSelectMovie(movie)}>
            <Image src={movie.cover} alt={movie.name} />
          </Card>
        ))}
      </MovieCategoryContainer>
      {showMovieDetail && (
        <MovieDetails
          setShowMovieDetail={setShowMovieDetail}
          selectedMovie={selectedMovie}
          setShowNavbar={setShowNavbar}
        />
      )}
    </div>
  )
}

export default MovieCard