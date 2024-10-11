import { createContext, useContext, useEffect, useState } from "react";
import { RELEASES_MOVIES_URL } from "../Api_reQ";

 const FetchDataContext = createContext();

export const useFetchData = ()=> {
    return useContext(FetchDataContext)
}

export const FetchDataProvider = ({children}) => {
    const [fetchData, setFetchData] = useState({ data: [] })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const API_Key = 'qx04hHQnfPqBQ1XXh6Kt7U2BjfQAHEFQQMt0NCQn'

    useEffect(() => {
        fetchDataFromApi()
      }, [])

    const fetchDataFromApi = async () => {
     try {
         setLoading(true)
    
        const res = await fetch(`https://api.watchmode.com/v1/releases/?apiKey=${API_Key}`)
        console.log("Soy el res del fetch", res);
        const result = await res.json()
        setFetchData(result.releases)
        console.log("Soy el resultado de la primera busqueda", result);
        
     } catch (error) {
        console.error('Error fetching data:', error)
        setError(error)
    } finally {
        setLoading(false)
    }};
    const contextValue = {
        fetchData,
        setFetchData,
        error
    } 
    
      return (
        <FetchDataContext.Provider value={contextValue}>
          {children}
        </FetchDataContext.Provider>
      )
}