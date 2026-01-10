import { Routes, Route, Navigate, useNavigate} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"

import { useStateValue } from "./StateProvider"
import { useEffect } from "react"
import {auth} from "./firebase"
import { actionTypes } from "./Reducer"

function App() {

    const [{ user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((firebaseUser)=>{
            if(firebaseUser){
                dispatch({
                    type: actionTypes.SET_USER,
                    user:{
                        uid: firebaseUser.uid,
                        displayName: firebaseUser.displayName,
                        email: firebaseUser.email,
                        photoUrl: firebaseUser.photoURL,
                    },
                });
            }else{
                dispatch({type:actionTypes.SET_USER, user: null});
            }
        });
        return () => unsubscribe();
    }, [dispatch, navigate]);

    return (
        <div className="App">
            {/*some logic*/}
            <div className="App_body">
                {/*<h1>Optional universal element</h1>*/}
                <Routes>

                    <Route
                        path="/"
                        element={
                            !user?<Login />:<Navigate to ="/home"/>
                        }
                    />

                    <Route
                        path="/home"
                        element={!user? (<Navigate to = "/" replace/>):<Home />}
                    />

                    <Route
                        path="/settings"
                        element={<Settings/>}
                    />
                    <Route 
                    
                        path="/profile"
                        element={<Profile/>}

                    />

                    <Route
                        path="*"
                        element={<Navigate to="/"
                        replace />}
                    />

                </Routes>
            </div>
            
      </div>  
    );
}

export default App