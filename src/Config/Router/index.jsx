import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import {Home,Searching} from "../../Pages/index"


function index() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
     
      <Route path={`/Searching`} element={<Searching />} /> 
    </Routes>
 </BrowserRouter>
  )
}

export default index
