import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
function LogIn({userData, setUserData}){
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    function handleSignUp(){
        history.push('/signup')
    }
    function handleLogIn(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(r => r.json())
        .then(data => {
            if(data.id){
                setError('')
                setUserData(data)
                history.push('/storelist')
            }else if(data.error){
                setError(data.error)
            }
        })
    }
    return(
        <div className="main-holder">
            <div className="login-container">
                <div>
                    <p className="error">{error}</p>
                    <label for="email" style={{color:"#AFAFAF"}}>email: </label>
                    <br></br>
                    <input className="username" onChange={handleEmail} value={email}/>
                    <br></br>
                    <label for="password" style={{color:"#AFAFAF"}}>Password: </label>
                    <input className="password" type="password" onChange={handlePassword} value={password}/>
                    <div className="button-holder">
                        <button className="login-btn" onClick={handleLogIn}>Log In</button>
                        <br></br>
                        <button className="signup-btn" onClick={handleSignUp}>Sign Up Instead</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogIn