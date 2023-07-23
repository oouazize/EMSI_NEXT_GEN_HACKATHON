import React, {useState} from "react"
import {useEffect} from "react"
import axios from 'axios'
import Notification from "../Notification"
import Welcome from './SignWelcome'
import "../../scss/sign.scss"
import googleImg from "../../assets/google.png"
import Form from './SignForm'
import SignInImage from '../../assets/building.jpg'
import SignUpImage from "../../assets/building2.jpg"

export default function Sign() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const [formDataUp, setFormDataUp] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    const [notif, setNotif] = useState("")

    const [SignX, setSignX] = useState("up")

    function handleChange(event: any) {
        const {name, value} = event.target
        if (SignX === "in") {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }))
        } else {
            setFormDataUp(prevFormDataUp => ({
                ...prevFormDataUp,
                [name]: value
            }))
        }
    }



    function handleClick() {
        setSignX(prev => (prev === "in" ? "up" : "in"));
    }

    function handleSubmit() {
        window.location.replace("http://192.168.0.9:5173/home")
        // setNotif("")
        // const bodyResponse = SignX === "in" ? formData : formDataUp
        // const sendFormData = async () => {
        // try {
        //     const response = await axios.post(`/api/auth/sign${SignX}`, bodyResponse);
        //     SignX === "up" ? setNotif(response.data) : window.location.replace("http://localhost:5173/home")
        // } catch (error) {
        //     error.response.data.message === undefined ?
        //     setNotif(error.response.data) :
        //     setNotif(error.response.data.message)
        // }
        // };
        // sendFormData()
    }

    function handleAuth(props: string) {
        window.location.replace("http://192.168.0.9:5173/home")
        // window.location.replace(`http://localhost:3000/api/auth/${props}`)
    }

    const orContent = <div className="orContent">
                            <div className='bar'></div>
                            or
                            <div className='bar'></div>
                        </div>
    const ButtonsAuth = <div className='bttn'>
                            <button className='btn-google' onClick={() => handleAuth("google")}><img src={googleImg} alt="" /> Sign in with Google</button>
                        </div>


    return (
        <div className="main">
           {notif && <Notification message={notif} />}
            <div className='content'>
                <div className='container'>
                    <Welcome SignX={SignX} />
                    <main>
                        {ButtonsAuth}
                        {orContent}
                        <Form
                            SignX = {SignX}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            formData={formData}
                            setFormData={setFormData}
                            formDataUp={formDataUp}
                            setFormDataUp={setFormDataUp}
                        />
                    </main>
                    {SignX === "in" && <span className="forget"><p>Forget password?</p></span>}
                    <button className='submit' onClick={handleSubmit} >
                        {
                            SignX === "in" ?
                            <span>sign in</span> :
                            <span>sign up</span>
                        }
                    </button>
                    <div className="signUp" onClick={handleClick} >
                        {
                            SignX === "in" ?
                            <p>Don't you have an account? <span>sign up</span></p> :
                            <p>Already have an account? <span>sign in</span></p>
                        }
                    </div>
                </div>
            </div>
            <div
                className='background'
                style={SignX === "in" ?
                {backgroundImage: `url(${SignInImage})`} :
                {backgroundImage: `url(${SignUpImage})`}}
                >
            </div>
        </div>
    )
}