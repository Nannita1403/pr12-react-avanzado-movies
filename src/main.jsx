import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ThemePageProvider from './providers/ThemePageProvider.jsx';
import { IBMPeticion } from './providers/IMBFetch.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <ChakraProvider>
    <ThemePageProvider>
      <IBMPeticion>
        <App/>
      </IBMPeticion>
    </ThemePageProvider>
  </ChakraProvider>
</BrowserRouter>
);
