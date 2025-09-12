
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './assets/pages/HomePage'
import ContactPage from './assets/pages/ContactPage'
import InsightPage from './assets/pages/InsightPage'
import JoinUsPage from './assets/pages/JoinUsPage'
import OurFirm from './assets/pages/OurFirm'
import OurTeam from './assets/pages/OurTeam'
import PracticePage from './assets/pages/PracticePage'
import RegisterForm from './assets/pages/Action/RegisterForm'
import AppointmenPage from './assets/pages/Action/AppointmenPage'
import Footer from './assets/components/Footer'
import { Navigation } from './assets/components/Navigation'
import FloatingLegalChat from './assets/components/FloatingLegalChat'

function App() {

  return (
    <>
  <div className="div">
    <Navigation/>
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/insight" element={<InsightPage />} />
    <Route path="/join-us" element={<JoinUsPage />} />
    <Route path="/our-firm" element={<OurFirm />} />
    <Route path="/our-team" element={<OurTeam />} />
    <Route path="/practice" element={<PracticePage />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/appointment" element={<AppointmenPage />} />
    </Routes>
    <FloatingLegalChat/>
    <Footer />
  </div>
    </>
  )
}

export default App
