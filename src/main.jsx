import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Header/>
    <Home />
    <Footer/> */}
  </StrictMode>,
)
