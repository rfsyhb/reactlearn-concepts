import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import DisplaySearchInputApp from './concepts/DisplaySearchInputApp.jsx'
import DrillingApp from './concepts/DrillingApp'
import ListApp from './concepts/ListApp.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <DisplaySearchInputApp /> */}
    {/* <DrillingApp /> */}
    <ListApp />
  </React.StrictMode>,
)
