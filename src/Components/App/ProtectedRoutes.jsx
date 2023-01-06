import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet  } from 'react-router-dom'

const ProtectedRoutes = () => {
  const cart = useSelector(state => state.userInfo);

  return <>
    {
      !cart.token ? <Navigate to='/login'/> : <Outlet/>
    }
  </>


}

export default ProtectedRoutes