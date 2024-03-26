import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import DisplaySearchInputApp from './concepts/DisplaySearchInputApp.jsx'
import DrillingApp from './concepts/DrillingApp'
import ListApp from './concepts/ListApp.jsx'
import PropTypesApp from './concepts/propTypes/PropTypesApp.jsx'
import SimpleRoutingApp from './concepts/simplerouting/SimpleRoutingApp.jsx'
import ReactRouterRoutingApp from './concepts/reactrouterrouting/ReactRouterRoutingApp.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <DisplaySearchInputApp /> */}
    {/* <DrillingApp /> */}
    {/* <ListApp /> */}
    {/* <PropTypesApp /> */}
    {/* <SimpleRoutingApp /> */}
    <ReactRouterRoutingApp />
  </React.StrictMode>,
)
