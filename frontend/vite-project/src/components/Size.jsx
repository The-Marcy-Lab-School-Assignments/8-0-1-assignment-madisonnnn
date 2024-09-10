import { useState } from "react";


const Sizes = ({fontSize, setFontSize}) => {
 const increaseFontSize = () => {
  setFontSize(fontSize + 5)
 }
 const decreaseFontSize = () => {
  setFontSize(fontSize - 5 > 1 ? fontSize - 5 : 1)
 }
 return (
  <div> 
   <button id = 'plus' onClick={increaseFontSize}> + </button>
   <button id = 'minus' onClick={decreaseFontSize}> - </button>
  </div>
 )
}

export default Sizes 