import { useState } from "react"
import { useHistory } from "react-router-dom"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

function SignUp({ setUserData }){
    const [ newEmail, setNewEmail ] = useState('')
    const [ newPassword, setNewPassword ] = useState('')
    const [ error, setError ] = useState('')
    const history = useHistory()
    const handleEmail = e => setNewEmail(e.target.value)
    const handlePassword = e => setNewPassword(e.target.value)
    function handleSignUp(){
        
        fetch('/signup', {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({
                email: newEmail,
                password: newPassword
            })
        })
        .then(r => r.json())
        .then(data => {
            if(data.id){
                setUserData(data)
                history.push("/home")
            }else if(data.error){
console.log(data.error)
            }
        })
    }
    return(
        <div className="login-container">
        <div>
            <p>{error}</p>
            <br />
            <label for="username" style={{color:"#AFAFAF"}}>Username: </label>
            <input type="email" className="username" onChange={handleEmail} />
            <br />
            <label for="password" style={{color:"#AFAFAF"}}>Password: </label>
            <input type="password" className="password" onChange={handlePassword} />
            <div className="button-holder">
                <button className="login-btn" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
  </div>
    )
}
export default SignUp;