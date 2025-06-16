// import React from 'react'
import HomePage from './pages/HomePage'
import ArtInvestigator from './pages/ArtInvestigator';
import Hstream from './pages/Hstream';
import Canvas from './pages/Canvas';
import DreamCube from './pages/DreamCube';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="art-investigator" element={<ArtInvestigator />} />
        <Route path="hstream" element={<Hstream />} />
        <Route path="canvas" element={<Canvas />} />
        <Route path="dreamcube" element={<DreamCube />} />
      </Routes>
    </BrowserRouter>
  )
}
