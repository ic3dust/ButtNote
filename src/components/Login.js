import React from 'react'
import logo from "../img/logo.svg"
import "../style/Login.css"
import Button from '@mui/material/Button';
import "../style/App.css"
import { auth, provider } from '../firebase';


const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider)   
      .then(result => alert(result.user.displayName))
      .catch(error => alert(error.message));
    };

  return (
    <div className="Login">
        <div className="Login_info">
            <img src={logo} alt="logo"/>
              <div className="Login_inside">
                  <h2>Alrerady have an account?</h2>
                  <Button variant = "contained" type="submit"onClick={signIn}>Sign in</Button>
              </div>
        </div>
    </div>
  )
}

export default Login
