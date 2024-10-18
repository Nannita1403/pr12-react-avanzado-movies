import MovieCard from "../../components/PlatformParts/MovieCard/MovieCard";
import PeticionMoviesSeries from "../../providers/VariosFetch/Peticion";
import PreviewMovie from "../../components/PlatformParts/PreviewMovie/PreviewMovie"
import { useFetchData } from "../../providers/FetchApiProvider/IMBFetch";
import Loader from "../../components/Loader/Loader";


const Home = () => {
  //const { light } = useContext(ThemeContext));
  const { movies, series } = useFetchData()
  const handleMovieSearch = (inputValue) => {
    setFilter(inputValue)
  }

  if (!movies.length || !series.length) {
    return <Loader/>
  }
  
  return (
    <>
  {/*<Loader/>*/}
 { /*<PreviewMovie/>*/}



  </>
  )
};

export default Home;