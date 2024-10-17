import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import closeIcon from '../../../assets/close.png'
import playIcon from '../../../assets/play.png'
import addIcon from '../../../assets/add.png'
import likeIcon from '../../../assets/like.png'
import { Box, Flex } from '@chakra-ui/react'

const MovieDetails = ({ selectedMovie, setShowMovieDetail, setShowNavbar }) => {
  const backgroundImage = selectedMovie.preview
  const movieDetailsRef = useRef(null)

  useEffect(() => {
    if (movieDetailsRef.current) {
      movieDetailsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [movieDetailsRef])
  

  const handleCloseDetails = () => {
    setShowNavbar(true)
    setShowMovieDetail(false)
  }

  const keywords = selectedMovie.keywords
    .map(
      (keyword) =>
        keyword.charAt(0).toUpperCase() + keyword.slice(1).toLowerCase()
    )
    .join(' ● ')

  return createPortal(
    <Flex w='100%' h='100vh' justify-content= 'center' align-items= 'center'
    background-color= 'black'  position= 'relative'>
      <Box ref={movieDetailsRef}>
        <MovieInfoContainer backgroundImage={backgroundImage}>
          <h3>{selectedMovie.genre}</h3>
          <h3>{getStarIcons(selectedMovie.score)}</h3>
          <h2>{selectedMovie.name}</h2>
          {selectedMovie.oscar === true ? <h4>Oscar Winner 🏆</h4> : null}
          <h5>
            {selectedMovie.director} | {selectedMovie.actor}
          </h5>
          <h6>{selectedMovie.year}</h6>
        </MovieInfoContainer>
        <ActionsContainer>
          <IconWrapper>
            <img src={playIcon} alt='Play Icon' />
          </IconWrapper>
          <IconWrapper>
            <img src={addIcon} alt='Add to list Icon' />
          </IconWrapper>
          <IconWrapper>
            <img src={likeIcon} alt='Like Icon' />
          </IconWrapper>
        </ActionsContainer>
        <MovieResumeContainer>
          <p>{selectedMovie.resume}</p>
          <p>{keywords}</p>
        </MovieResumeContainer>
        <CloseIconWrapper onClick={handleCloseDetails}>
          <img src={closeIcon} alt='Close icon' />
        </CloseIconWrapper>
      </Box>
    </Flex>,
    document.body
  )
}

export default MovieDetails