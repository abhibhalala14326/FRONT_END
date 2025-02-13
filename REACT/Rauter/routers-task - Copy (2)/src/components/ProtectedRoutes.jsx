import React from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({childern}) => {

    const {IsAuth} = Auth()

  return <div>{IsAuth ? childern : <Navigate to="/login"></Navigate>}</div>;
}

export default ProtectedRoutes
