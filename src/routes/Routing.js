import React from "react"
import { Route, Routes } from "react-router-dom"
import ClashOfChampions from "../pages/clashOfChampions/ClashOfChampions"
import KingsOfRngs from "../pages/kingsOfRings/KingsOfRngs"
import Rules from "../pages/Rules"
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Rules />} />
      <Route path="/kingsofrings" element={<KingsOfRngs />} />
      <Route path="/clashofchampions" element={<ClashOfChampions />} />
    </Routes>
  )
}

export default Routing
