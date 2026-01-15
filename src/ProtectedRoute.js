import React from 'react'
import { useStateValue } from './StateProvider'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const [{user}] = useStateValue();
    if(!user){
        <Navigate to="/login" replace/>
    }
  return children;
}

export default ProtectedRoute
