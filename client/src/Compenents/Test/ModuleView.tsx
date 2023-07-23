import React, { useState } from 'react'
import { useEffect } from 'react'
import "../../scss/ModuleView.scss"
import YouTube from "react-youtube";
import YoutubeLogo from "../../assets/ytb.png"
import resources from "../../assets/ref.png"
import shape from "../../assets/shape.png"

export default function ModuleView() {
  const videoId = "HEiPxjVR8CU";

  function TestNowClick() {
    window.location.replace("/TestQuiz")
  }

  function handleClick() {
    window.open('https://medium.com/codex/the-difference-between-call-by-value-and-call-by-reference-25ed5950797e', '_blank');
  }

  return (
    <div className='modelView'>
      <div className='head'>
        <button onClick={TestNowClick} className='btn testNow'>Test Now</button>
      </div>
      <div className='cover'>
        <div className='resources'>
          
          <div className='resCard CardTitle recommendationTitle'>
            <img src={shape} alt='' />
            <span> Recommendations</span>
          </div>
          <div className='resCard CardTitle feedbackTitle'>
            <img src={shape} alt='' />
            <span>Feedback</span>
          </div>

          <div className='resCard recommendation'>
            <div className='ytb-frame' >
              <img src={YoutubeLogo} alt="" />
              <YouTube className="ytb" videoId={videoId} />
            </div>
            <img className="article" onClick={handleClick} src={resources} alt="" />
          </div>
          <div className='resCard feedback'>
            <p>it seems like you might need to work a bit more on understanding the concept of call by value and call by reference in C.
Don't worry; it can be a bit tricky at first, but with some practice and examples, you'll get the hang of it.
Keep learning and experimenting</p>
          </div>
        </div>
      </div>
    </div>
  )
}