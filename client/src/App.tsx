import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Compenents/Home/Home"
import './scss/App.scss'
import Sign from "./Compenents/Sign/Sign"
import ModuleView from './Compenents/Test/ModuleView'
import TestQuiz from "./Compenents/Test/TestQuiz"

export default function App() {

  function handleLogoClick() {
    window.location.replace("home")
  }

  return (
    <Router>
      <span
        onClick={handleLogoClick} 
        className='logo'>
          LetBe<span>Leet</span>
      </span>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/moduleView" element={<ModuleView />} />
        <Route path="/TestQuiz" element={<TestQuiz />} />
      </Routes>
    </Router>
  );
}