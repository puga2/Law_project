
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
import TrainingPro from './assets/pages/TrainingPro'
import Footer from './assets/components/Footer'
import Membership from './assets/pages/Membership'
import OurService from './assets/pages/OurService'
import { Navigation } from './assets/components/Navigation'
import FloatingLegalChat from './assets/components/FloatingLegalChat'
import LegalPage from './assets/pages/LegalPage'
import TaxPage from './assets/pages/TaxPage'
import BachOne from './assets/pages/BachOne'

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
    <Route path="/training" element={<TrainingPro />} />
     <Route path="/bach-one" element={<BachOne />} />
    <Route path="/membership" element={<Membership />} />
      <Route path="/our-service" element={<OurService />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="/tax" element={<TaxPage />} />
    </Routes>
    <FloatingLegalChat/>
    <Footer />
  </div>
    </>
  )
}

export default App
