import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import UseStateButton from './pages/UseStateButton'
import UseStateText from './pages/UseStateText'

function App() {
  let Component;
  switch (window.location.pathname) {
    case '/':
      Component = <Home/>;
      break;
    case '/UseStateButton':
      Component = <UseStateButton/>;
      break;
    case '/UseStateText':
      Component = <UseStateText/>;
      break;
  }


  return (
    <div className="App">
      <Navbar/>
      <div>
        {Component}
      </div>
    </div>
  )
}

export default App
