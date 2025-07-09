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
        <Route path="proj-art-investigator" element={<ArtInvestigator />} />
        <Route path="proj-hstream" element={<Hstream />} />
        <Route path="proj-canvas" element={<Canvas />} />
        <Route path="proj-dreamcube" element={<DreamCube />} />
      </Routes>
    </BrowserRouter>
  )
}
