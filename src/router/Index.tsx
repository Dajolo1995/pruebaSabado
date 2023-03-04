import React from 'react'
import Login from '../views/login/Login'
import { Route, Routes } from "react-router-dom";


const Index: React.FC =() =>  {
  return (
    <Routes>
    <Route path="/" element={<Login />}></Route>
  </Routes>
  )
}

export default Index