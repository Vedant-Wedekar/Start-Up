import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Buy from './Components/Buy.jsx'
import App from './App.jsx'
import CR from './Components/CR.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Buy /> */}
    <CR />
  </StrictMode>,
)
