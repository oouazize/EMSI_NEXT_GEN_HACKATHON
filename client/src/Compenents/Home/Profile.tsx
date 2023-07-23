import React, { useState } from 'react'
import { useEffect } from 'react'
// import { profileLogo } from "../../assets/profile.jpeg"

export default function Profile({level}) {
//   const [count, setCount] = useState(0)


    // useEffect(() => {

    // }, [])

    const username = "OUSSAMA OUAZIZE"
  return (
    <header>
      <div className='profileLogo settings'></div>
        <div className="cards">
          <div className="item profileCard">
            <div className='profileLogo'></div>
            <div className='userData'>
              <div className='data username'>{username}</div>
              <div className='data streaks'>🔥 Streaks</div>
              <div className='data grade'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                <path d="M8 0.512695C8.15333 0.512695 8.30667 0.546031 8.44666 0.609369L14.7233 3.2729C15.4567 3.58293 16.0033 4.30632 16 5.17972C15.9833 8.48663 14.6233 14.5371 8.88 17.2873C8.32333 17.554 7.67667 17.554 7.12 17.2873C1.37668 14.5371 0.0166818 8.48663 1.51616e-05 5.17972C-0.00331817 4.30632 0.543347 3.58293 1.27668 3.2729L7.55667 0.609369C7.69333 0.546031 7.84667 0.512695 8 0.512695Z" fill="#FFD910"/>
                </svg>
                 Grade
              </div>
              <div className='data streaksNB'>12</div>
              <div className='data gradeNB'>Explorer</div>
            </div>
          </div>
          <div className="item messageCard"><span>Keep going! you're almost there</span></div>
          <div className="item level">
            <div className="level-bar-fill" style={{ width: `${level}%` }}></div>
            <span>level 5 - {level}%</span>
          </div>
        </div>
    </header>
  )
}