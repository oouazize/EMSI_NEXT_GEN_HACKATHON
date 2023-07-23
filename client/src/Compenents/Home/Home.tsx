import { useState } from 'react'
import Profile from "./Profile"
import ModuleList from "./ModuleList"
import '../../scss/Home.scss'

function Home() {
  const level = 86; 

  return (
    <>
        <Profile level={level}/>
        <ModuleList />

    </>
  )
}

export default Home
