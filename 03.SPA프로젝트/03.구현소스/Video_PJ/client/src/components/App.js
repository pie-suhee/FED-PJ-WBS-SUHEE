import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from '../hoc/auth'

import NavBar from "./views/NavBar/NavBar"
import Footer from "./views/Footer/Footer"
import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import VideoUploadPage from './views/VideoUploadPage/VideoUploadPage'

function App() {
  const AuthLandingPage = Auth(LandingPage, null)
  const AuthLoginPage = Auth(LoginPage, false)
  const AuthRegisterPage = Auth(RegisterPage, false)
  const AuthVideoUploadPage = Auth(VideoUploadPage, true)

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<AuthLandingPage />} />
            <Route exact path="/login" element={<AuthLoginPage />} />
            <Route exact path="/register" element={<AuthRegisterPage />} />
            <Route exact path="/video/upload" element={<AuthVideoUploadPage />} />
          </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App
