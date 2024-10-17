import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/PlatformParts/MovieCard/MovieCard";
import PeticionMoviesSeries from "../../providers/FetchApiProvider/Peticion";
import PreviewMovie from "../../components/PlatformParts/PreviewMovie/PreviewMovie"


const Home = () => {
  //const { light } = useContext(ThemeContext));
  
  
  return (
    <>
  {/*<Loader/>*/}
  <PreviewMovie/>
 { /*<PreviewMovie/>*/}



  </>
  )
};

export default Home;