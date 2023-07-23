import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import "../../scss/TestQuiz.scss"
import QCM from "./QCM"
import Notification from '../Notification'

export default function TestQuiz() {

    const [NumberOfQuestion, setNumberOfQuestion] = useState(1)

    // function handleSubmit() {
    //     setNumberOfQuestion(prev => prev + 1)
    //     progress = NumberOfQuestion * 100 / 15
    // }

    const [Question, setQuestion] = useState("Amet facilisis porttitor malesuada ultrices dictumst viverra.")

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setNumberOfQuestion(prev => prev + 1)
        setProgress(NumberOfQuestion * 100 / 15)
        const getQuestion = async () => {
            try {
                const data = await axios.get(`/api/quiz`);
                setQuestion(data);
            } catch (error) {
                // <Notification message="HTTP 500 Internal Server Error" />
                console.log(error);
            }
            };
            getQuestion()
    }, [])

    const [Response, setResponse] = useState("")

    function handleChange(event: any) {
        setResponse(event.target.value)
    }

    const [ModeInput, setModeInput] = useState(true)

    const Input = <form><textarea
        rows="6" cols="50"
        placeholder="Enter your input here"
        className="input"
        onChange={handleChange}
        value={Response}
        ></textarea></form>

    const [Qcm, setQcm] = useState({
        Qcm1: "",
        Qcm2: "",
        Qcm3: "",
        Qcm4: ""
    })

    function sendResponse() {
        const send = async () => {
        try {
            await axios.post(`/api/quiz`, Response);
            window.location.replace("/TestQuiz")
        } catch (error) {
            // <Notification message={error} />
            console.log(error);
        }
        };
        send()
    }

  return (
    <div className='TestQuiz'>
        <div className="level">
            <div className="level-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className='question'>{Question}</div>
        {ModeInput ? Input : <QCM props={Qcm} />}
        <button className='btn'>
            {
                NumberOfQuestion === 14 ?
                (<span>Submit</span>) :
                (<span onClick={sendResponse} >Continue</span>)
            }</button>
    </div>
  )
}