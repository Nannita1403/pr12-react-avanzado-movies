import './Movies.css';

const Movies = () => {

  const getRandomMovies = (movies, count = 3) =>{
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
  };

  return (
    <div className='movies'>
        <h1>Movies Component</h1>
    </div>
  );
};

export default Movies;