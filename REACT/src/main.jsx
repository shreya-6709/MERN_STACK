import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JSX from './App.jsx'
import Biryani from './Components.jsx'
import Birthday from './Fest.jsx'
import Count from './Count.jsx'
import Forms from './Forms.jsx'
import Events from './Events.jsx'
import Light from './Light.jsx'
import API from './API.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JSX/>
    <Biryani/>
    <Birthday/>
    <Count/>
    <Forms/>
    <Events/>
    <Light/>
    <API/>
  </StrictMode>,
)
