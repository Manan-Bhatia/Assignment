import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './Nav'
import Background from './Background'
import Hero from './Hero'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background />
    <Nav />
    <Hero />
  </React.StrictMode>,
)
