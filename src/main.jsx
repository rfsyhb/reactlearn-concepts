import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import DestructSearchApp from './concepts/DisplaySearchInputApp.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DestructSearchApp />
  </React.StrictMode>,
)
