import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Login from './pages/login/Login.jsx'
import Homepage from './pages/homepage/Homepage.jsx'
import Register from './pages/register/register.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Generalview from './pages/generalview/generalview.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/generalview' element={<Generalview />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
