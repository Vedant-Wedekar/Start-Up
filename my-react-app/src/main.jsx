import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Buy from './Components/Buy.jsx'
import CR from './Components/CR.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/buy" element={<Buy />} /> */}
        <Route path="/buy" element={<CR />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
