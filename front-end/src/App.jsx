import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/styles/videocomponent.module.css'
import LandingPage from '../src/pages/landing.jsx';
import Auth from '../src/pages/authentication.jsx';
import Home from '../src/pages/home.jsx'
import {AuthProvider} from '../src/contents/contents.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VideoMeet from '../src/pages/videomeet.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AuthProvider>
       
        <Routes>
          <Route path="/" element={<LandingPage /> }/>
          <Route path="/auth" element={<Auth/> }/>
          <Route path='/home' element ={<Home />}/>
          <Route path='/:url' element ={<VideoMeet/>}/>
        </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
