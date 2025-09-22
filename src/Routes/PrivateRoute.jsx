import React, { use } from 'react'
import { AuthContext } from '../contexts/authContext/AuthContext'
import { Navigate, useLocation } from 'react-router'

const PrivateRoute = ({ children }) => {

  const location = useLocation();
  console.log(location);

  const { user, loading } = use(AuthContext)
  if (loading) {

    return (
      <div className='flex justify-center items-center min-h-screen'>
        <span className="loading loading-spinner bg-teal-500 loading-xl"></span>
      </div>
    )
  }

  if (!user) {
    return <Navigate to='/signin' state={location.pathname} replace></Navigate>
  }
  return children;
}

export default PrivateRoute