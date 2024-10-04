import { Image } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { ThemeContext } from './providers/ThemePageProvider'

//cambio visual del theme=por un estado
const App = () => {
  //cambio visual del theme por provider/useContext
 const {light, setLight} = useContext(ThemeContext);

  return (
    <div>
      <Image src={light ? "/assets/claBN.png" : "/assets/claColor.png"} 
      alt= "cambiar tema" w= "40px" 
      position= "absolute" top="20px" right="20px" transition="all 0.5s"
      cursor= "pointer" _hover={{ transform: "scale(1.3)" }}
      onClick={()=> setLight(!light)}/>
    </div>
  )
}

export default App
