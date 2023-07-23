import React, { useState } from 'react'
import { useEffect } from 'react'
import "../../scss/ModuleView.scss"
import YouTube from "react-youtube";

export default function ModuleView() {
  const videoId = "HEiPxjVR8CU";

  return (
    <div className='modelView'>
      <div className='head'>
        <button className='btn testNow'>Test Now</button>
      </div>
      <div className='cover'>
        <div className='resources'>
          <div className='resCard recommendationTitle'></div>
          <div className='resCard feedbackTitle'></div>
          <div className='resCard recommendation'>
            <div className='ytb-frame' >
              <YouTube className="ytb" videoId={videoId} />
            </div>
          </div>
          <div className='resCard feedback'></div>
        </div>
      </div>
    </div>
  )
}