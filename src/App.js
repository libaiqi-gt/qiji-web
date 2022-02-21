import Login from 'page/Login'
import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import LayoutPage from './Layout'

export default function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('Authorization');
    if (!token) navigate('/login');
  }, [])

  return (
    <Routes>
      <Route path='/*' element={<LayoutPage />}>
        <Route index element={<Navigate to='main' replace />} />
      </Route>
      <Route path='login' element={<Login />} />
    </Routes>
  )
}
