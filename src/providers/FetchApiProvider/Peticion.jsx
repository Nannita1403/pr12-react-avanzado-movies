import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemePageProvider";
import { Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PeticionMoviesSeries = () => {
  const { light } = useContext(ThemeContext);
  const [movies, setMovies] = useState([]);
    // [] -> está cargando
    // [datos] -> ya ha cargado y están bien
    // undefined -> está rota la petición 
  const getMoviesSeries = async () => {
      const res = await fetch(`https://api.watchmode.com/v1/releases/?apiKey=qx04hHQnfPqBQ1XXh6Kt7U2BjfQAHEFQQMt0NCQn`);
      console.log(res);
      const response = await res.json();
      console.log(response);
      
      setMovies(response.releases);

      
    };
    console.log(setMovies);
    
    useEffect(() => {
    getMoviesSeries(); // sólo se ha ejecutado la primera vez que se ha montado el componente
    }, []); // si el array de dependencias está vacío, sólo se ejecuta una vez lo de dentro
     return (
      <div className="MoviesContainer">
      {movies.length &&
        movies.map((movie, index) => (
          <div key={index}>
            <h3>{movie.title}</h3>
            <img src={movie.poster_url} />
          </div>
        ))}
    </div>
  );
     

   
    /*return (
      <Flex
      wrap="wrap"
      justify="center"
      align="center"
      gap="20px"
      p="50px"
      pt="200px"
    >
      {movies.map((movie) => (
        <Link key={movie.id} to={`/Platform/${movie.id}`}>
          <Image
            w="100px"
            src={movie.poster_url}
            alt={movie.title}
            cursor="pointer"
            filter={`drop-shadow(0px 0px 2px ${
              light
                ? "var(--rtc-light-mode-bg-negative)"
                : "var(--rtc-dark-mode-bg-negative)"
            })`}
            transition="all 0.5s"
            _hover={{
              transform: "scale(1.1)",
              filter: `drop-shadow(0px 0px 8px)`,
            }}
          />
        </Link>
      ))}
    </Flex>
  );

  };  */
}
export default PeticionMoviesSeries;