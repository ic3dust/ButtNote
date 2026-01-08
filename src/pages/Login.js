import React from 'react'
import logo from "../img/logo.svg"
import GoogleIcon from '@mui/icons-material/Google';
import "../style/Login.css"
import Button from '@mui/material/Button';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from '../Reducer';
import { useStateValue } from '../StateProvider';


const Login = () => {

  const [state, dispatch] = useStateValue();

    const signIn = () => {
      signInWithPopup(auth,provider)   
      .then((result) => {
        console.log(result.user.photoURL)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch(error => alert(error.message));

    };

  return (
    <div className="Login">
        <div className="Login_info">
            <img src={logo} alt="logo"/>
              <div className="Login_inside">
                  <h2>Alrerady have an account?</h2>
                  <Button variant = "contained" type="submit"onClick={signIn}>Sign in with Google {<GoogleIcon style={{fontSize: "15px", marginBottom: "0.3vh"}}/>}</Button>
              </div>
        </div>
    </div>
  )
}

export default Login
