import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/signup'
import { Dashboard } from '../Pages/Dashboard'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  )
}
