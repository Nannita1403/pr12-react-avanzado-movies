import { createContext, useContext, useState } from "react";

 const FetchDataContext = createContext();

export const useFetchData = ()=> {
    return useContext(FetchDataContext)
}

export const FetchDataProvider = ({children}) => {
    const [fetchData, setFetchData] = useState({ data: [] })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchDataFromApi()
      }, [])

    const fetchDataFromApi = async () => {
     try {
         setLoading(true)
    
        const response = await fetch(
        `https://api.watchmode.com/v1/releases/?apiKey=qx04hHQnfPqBQ1XXh6Kt7U2BjfQAHEFQQMt0NCQn`
    )
        const result = await response.json()
        setFetchData(result)
        console.log(result);
        
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