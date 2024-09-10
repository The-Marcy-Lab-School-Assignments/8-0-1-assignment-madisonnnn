import { useState } from 'react'
import Header from './components/Header.jsx'
import Buttons from './components/Buttons.jsx'
import Sizes from './components/Size.jsx'
import './App.css'


function App() {
  const [message, setMessage] = useState('Good Morning')
  const [fontSize, setFontSize] = useState(50)
  const [color, setColor] = useState("green")
  return (
    <div>
      <div> 
        <Sizes fontSize = {fontSize} setFontSize={setFontSize}/>
      </div>
      <div> 
         <Header message = {message} fontSize = {fontSize} color = {color}/>
      </div>
      <div>
        <Buttons setMessage={setMessage} setColor={setColor}/>
      </div>
    </div>
    
  )
}

export default App
