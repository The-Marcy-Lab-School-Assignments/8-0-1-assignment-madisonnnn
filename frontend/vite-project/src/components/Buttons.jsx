import { useState } from "react"

const Buttons = ({message, setMessage, setColor}) => {
 return (
  <div>
   <button id = 'eng' onClick={()=> setMessage( 'Good Morning')}>English</button>
   <button id = 'chi' onClick={()=> {setMessage('早上好')
    setColor('blue')}}>Chinese</button>
   <button id = 'spa' onClick={()=> {setMessage('Buenos Dias')
  setColor('purple')}}>Spanish</button>
   <button id = 'hai' onClick={()=> setMessage('Bonjou')}>Haitian</button>
   <button id = 'por' onClick={()=> setMessage('Bom Dia')}>Portuguese</button>
  </div>
 )
}

export default Buttons