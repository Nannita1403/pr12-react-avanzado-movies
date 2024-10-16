import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemePageProvider";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ImgDefault  from "/src/assets/img_default.jpg"
import { FetchDataProvider, useFetchData } from "./FetchDataContext";

const PeticionMoviesSeries = () => {
  //const {movies}= useContext (FetchDataProvider);
  const { light } = useContext(ThemeContext);
  //const [movies, setMovies] = useState([]);
  const { movies } = useFetchData();

  //const API_Key = 'qx04hHQnfPqBQ1XXh6Kt7U2BjfQAHEFQQMt0NCQn'
    // [] -> está cargando
    // [datos] -> ya ha cargado y están bien
    // undefined -> está rota la petición 

  /*const getMoviesSeries = async () => {
      const res = await fetch(`https://api.watchmode.com/v1/releases/?apiKey=${API_Key}`);
      console.log(res);
      
      const response = await res.json();
      console.log("Soy el resultado de la primera busqueda", response);
      
      setMovies(response.releases);

    };

    /*const getDetailMovies = async () => {
      const resMovies = await fetch(`https://api.watchmode.com/v1/title/${title.id}/details/?apiKey=${API_Key}&append_to_response=sources`
);
      console.log(resMovies);
      
      const finalResponse = await res.json();
      console.log("Soy el resultado del busqueda", finalResponse);
      
      setDetailsMovies(finalResponse.titles_id);

    };*/
    /*
    useEffect(() => {
      getMoviesSeries(); // sólo se ha ejecutado la primera vez que se ha montado el componente
    }, []);*/ // si el array de dependencias está vacío, sólo se ejecuta una vez lo de dentro
     return (
      <Flex wrap='wrap'
      justify="center"
      align="start"
      gap='20px'
      p='50px'
      pt='200px'>
      {movies.length &&
        movies.map((movie, index) => (
          <Box key={index}>
            <Image w="200px" h='300px'src={movie.poster_url || ImgDefault } cursor='pointer'
            //onClick={}
            filter={`drop-shadow(0px 0px 2px ${
              light ? "var(--light-mode-bg-negative)" : "var(--dark-mode-bg-negative)"
            })`} 
            transition="all 0.5s"
            _hover={{
              transform: "scale(1.1)",
              filter: `drop-shadow(0px 0px 8px)`,
            }} />
            <Box w='200px' wrap='wrap' justify='center' align='center'  >
            <Text justify='center' align='center' pt='10px' filter={`drop-shadow(0px 0px 2px ${
              light ? "var(--light-mode-bg-negative)" : "var(--dark-mode-bg-negative)"
            })`} >{movie.title}</Text>
            </Box>
          </Box>
        ))}
    </Flex>
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