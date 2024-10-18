import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ThemePageProvider from './providers/ThemePageProvider.jsx';
import { FetchDataProvider } from './providers/VariosFetch/FetchDataContext.jsx';
import { IBMPeticion } from './providers/FetchApiProvider/IMBFetch.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <ChakraProvider>
    <ThemePageProvider>
      {/*<FetchDataProvider>*/}
      <IBMPeticion>
        <App/>
      </IBMPeticion>
      {/*</FetchDataProvider>*/}
    </ThemePageProvider>
  </ChakraProvider>
</BrowserRouter>
);
