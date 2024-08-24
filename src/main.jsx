import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './style/global-style.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
