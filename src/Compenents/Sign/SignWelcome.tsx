import React from "react"

export default function Welcome({ SignX }) {
    return (
        <div className="welcome">
        {
            SignX === "in" ?
            <p className="hd" style={{fontSize: "clamp(4.3rem, 5.8vw, 7rem)"}}>Hi there!</p> :
            <p className="hd" style={{fontSize: "clamp(3.2rem, 4.3vw, 5.1rem)"}}>Get Started</p>
        }
        {
            SignX === "in" ?
            <p className='pr' style={{fontSize: "clamp(0.6rem, 0.9vw, 1.1rem)"}}>Welcome to the New Generation of Education</p> :
            <p className='pr' style={{fontSize: "clamp(0.6rem, 0.9vw, 1.1rem)"}}>Let’s start learn new things and make our world awesome</p>            
        }
        </div>
    )
}