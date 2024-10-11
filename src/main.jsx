import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ThemePageProvider from './providers/ThemePageProvider.jsx';
import { FetchDataProvider } from './providers/FetchApiProvider/FetchDataContext.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <ChakraProvider>
    <ThemePageProvider>
      <FetchDataProvider>
    <App/>
      </FetchDataProvider>
    </ThemePageProvider>
  </ChakraProvider>
</BrowserRouter>
);
