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
    
        const res = await fetch(
        `https://api.watchmode.com/v1/releases/?apiKey=qx04hHQnfPqBQ1XXh6Kt7U2BjfQAHEFQQMt0NCQn`
    )
        const result = await res.json()
        setFetchData(result.releases)
        console.log(result);
        
     } catch (error) {
        console.error('Error fetching data:', error)
        setError(error)
    } finally {
        setLoading(false)
    }};

    const postData = async (data) => {
      try {
        const formData = new FormData()
  
        for (const key in data) {
          formData.append(key, data[key])
        }
  
        const coverInput = document.querySelector('input[name="cover"]')
        if (coverInput && coverInput.files.length > 0) {
          formData.append('cover', coverInput.files[0])
        }
  
        const previewInput = document.querySelector('input[name="preview"]')
        if (previewInput && previewInput.files.length > 0) {
          formData.append('preview', previewInput.files[0])
        }
  
        const response = await fetch(
          'https://movie-app-backend-eight.vercel.app/api/movies',
          {
            method: 'POST',
            body: formData
          }
        )
  
        const result = await response.json()
        console.log('POST response:', result)
  
        fetchDataFromApi()
      } catch (error) {
        console.error('Error posting data:', error)
      }};
  

    const contextValue = {
        fetchData,
        setFetchData,
        postData,
        error
      }
    
      return (
        <FetchDataContext.Provider value={contextValue}>
          {children}
        </FetchDataContext.Provider>
      )
}