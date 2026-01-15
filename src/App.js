import { Routes, Route, Navigate, useNavigate} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"

import { useStateValue } from "./StateProvider"
import { useEffect } from "react"
import {auth} from "./firebase"
import { actionTypes } from "./Reducer"

import ProtectedRoute from "./ProtectedRoute"

function App() {

    const [, dispatch] = useStateValue();
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
                            <Login />
                        }
                    />

                    <Route
                        path="/home"
                        element={
                         <ProtectedRoute><Home/></ProtectedRoute>   
                    }
                    />

                    <Route
                        path="/settings"
                        element={
                        <ProtectedRoute>
                        <Settings/>
                        </ProtectedRoute>
                    }
                    />
                    <Route 
                    
                        path="/profile"
                        element={<ProtectedRoute><Profile/></ProtectedRoute>}

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