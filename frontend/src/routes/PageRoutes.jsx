import React from "react"
import { Routes, Route } from "react-router"
import Home from "../pages/home/Home"
import Udemy from "../pages/udemy/Udemy"

const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/udemy" element={<Udemy />} />
    </Routes>
  )
}

export default PageRoutes
