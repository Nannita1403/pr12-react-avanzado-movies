import { createContext, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemePageProvider";

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
	  }, [])

	  useEffect(() => {
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
} catch (error) {
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
    