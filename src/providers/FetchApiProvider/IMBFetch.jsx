import { createContext, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemePageProvider";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const IBMDataContext = createContext();

export const useFetchData = () => {
	return useContext(IBMDataContext)
  }
export const IBMPeticion = ({ children }) => {
  const { light } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState({ data: [] })
  const [series, setSeries] = useState({ data: [] })
  const [error, setError] = useState(null)

	
	useEffect(() => {
		fetchDataMovies()
		fetchDataSeries()
	  }, [])

  const fetchDataMovies = async () => {
	try {
		setLoading(true)
  
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
	const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4d75142618msh44a2f5c1b3e69efp158d02jsnc51097d9e4aa',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};


	const response = await fetch(url, options);
	console.log(response);
	
	const result = await response.json();
	console.log(result);
	setMovies(result);
} catch (error) {
	console.error('Error fetching data:', error)
	setError(error)
  } finally {
	setLoading(false)
  }
}

const fetchDataSeries = async () => {
	try {
		setLoading(true)
  
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/series/';
	const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4d75142618msh44a2f5c1b3e69efp158d02jsnc51097d9e4aa',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};


	const response = await fetch(url, options);
	console.log(response);
	
	const result = await response.json();
	console.log(result);
	setSeries(result);
	console.error('Error fetching data:', error)
	setError(error)
  } finally {
	setLoading(false)
  }
}
const contextValue = {
    movies,
    setMovies,
	series,
    setSeries,
    error
  }

  return (
    <IBMDataContext.Provider value={contextValue}>
      {children}
    </IBMDataContext.Provider>
  )
}
    
    /* useEffect(() => {
      getMoviesSeries(); // sólo se ha ejecutado la primera vez que se ha montado el componente
    }, []); // si el array de dependencias está vacío, sólo se ejecuta una vez lo de dentro
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
     
  }
   
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

  };  

export default IBMPeticion;


const url = 'https://imdb-top-100-movies.p.rapidapi.com/series/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4d75142618msh44a2f5c1b3e69efp158d02jsnc51097d9e4aa',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/