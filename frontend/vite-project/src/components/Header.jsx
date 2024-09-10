import {useState} from 'react'
import Buttons from './Buttons'

const Header = ({message, fontSize, color}) => {

  return <h1 style={{ fontSize: `${fontSize}px`, color: `${color}` } }>{message}</h1>
 
}




export default Header 