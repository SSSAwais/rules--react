import React from "react"
import { Route, Routes } from "react-router-dom"
import KingsOfRngs from "../pages/kingsOfRings/KingsOfRngs"
import Rules from "../pages/Rules"
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Rules />} />
      <Route path="/kingsofrings" element={<KingsOfRngs />} />
    </Routes>
  )
}

export default Routing
