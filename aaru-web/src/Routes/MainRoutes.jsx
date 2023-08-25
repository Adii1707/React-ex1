import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/signup'
import { Dashboard } from '../Pages/Dashboard'
import { Tracker } from '../Components/Tracker'
import { Analytics } from '../Components/Analytics'
import { History } from '../Components/History'
import PrivateRoute from './PrivateRoute'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/Tracker" element={<Tracker />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/History" element={<History />} />

    </Routes>
  )
}
