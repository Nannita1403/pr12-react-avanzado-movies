import React, { useContext } from 'react'
import ChangeTheme from './components/ChangeTheme/ChangeTheme'
import { Box } from '@chakra-ui/react'
import { ThemeContext } from './providers/ThemePageProvider';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { useFetchData } from './providers/FetchApiProvider/FetchDataContext';
import Error from './components/AlertError/Error';

//cambio visual del theme=por un estado
const App = () => {
//traigo light para el tema y configurarlo en el Box 
  const {light}= useContext(ThemeContext);
  //const {error} = useFetchData()

  return (
    <Box 
      minH='100svh' 
      bg={`var(--${light ? "light" : "dark"}-mode-bg)`} 
      color={`var(--${light ? "light" : "dark"}-mode-text)`}
      transition="all 0.5s">
      <ChangeTheme/>
      <Routes>
       <Route path="/" element={<Home/>} />
      </Routes>
      
    </Box>
  )
}

export default App
