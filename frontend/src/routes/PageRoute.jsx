import React from "react"
import { Routes, Route } from "react-router"
import Home from "../pages/home/Home"

const PageRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default PageRoute
