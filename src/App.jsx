import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Components/Navbar'
import Mycontainer from './Components/MyContainer'
import MyCard from './Components/MyCard';

function App() {

  return (
    <>
      <Navbar/>
      <Mycontainer/>
    </>
  )
}

export default App

