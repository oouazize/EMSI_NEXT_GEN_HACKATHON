import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Compenents/Home/Home"
import './scss/App.scss'
import ModuleView from './Compenents/Test/ModuleView'

export default function App() {

  return (
    <Router>
        <span className='logo'>LetBe<span>Leet</span></span>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moduleView" element={<ModuleView />} />
        </Routes>
    </Router>
  )
}