import React, { useState, useEffect } from 'react'
import { useFetchData } from '../../../providers/FetchApiProvider/FetchDataContext'


/*const getStarIcons = (score) => {
  const stars = []

  for (let i = 0; i < score; i++) {
    stars.push(<span key={i}>&#9733;</span>)
  }
  return stars
}*/

const PreviewMovie = () => {
  const { fetchData } = useFetchData()
  const [moviePreview, setMoviePreview] = useState('')

  const changePreview = () => {
    const randomMovie =
      fetchData.data[Math.floor(Math.random() * fetchData.data.length)]

    setMoviePreview(randomMovie)
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

  const backgroundMovie = moviePreview.backdrop
  const genreMovie = moviePreview.genre_names
  const titleMovie = moviePreview.title
  const resumeMovie = moviePreview.plot_overview
  const platformesMovie = moviePreview.network_names
  const yearMovie = moviePreview.year

  return (
    <MoviePreviewContainer>
      <PreviewImageWrapper
        backgroundMovie={backgroundMovie}
      ></PreviewImageWrapper>
      <MovieInfoContainer>
        <GenderAndScoreWrapper>
          <p>{genreMovie}</p>
        </GenderAndScoreWrapper>
        <h3>{titleMovie}</h3>
        <h5>{resumeMovie}</h5>
        <h5>{platformesMovie}</h5>
        <p>
          {yearMovie} |
        </p>
      </MovieInfoContainer>
    </MoviePreviewContainer>
  )
}

export default PreviewMovie;