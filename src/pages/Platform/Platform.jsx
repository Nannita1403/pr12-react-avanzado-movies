const MoviePlatform = () => {
    const [filter, setFilter] = useState('')
    const [showNavbar, setShowNavbar] = useState(true)
    const { fetchData } = useFetchData()
  
    const handleMovieSearch = (inputValue) => {
      setFilter(inputValue)
    }
  
    if (!fetchData.data.length) {
      return <Loader />
    }
}