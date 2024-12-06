import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import About from "./components/about/About";
import Benefits from "./components/benefit/Benefit.js";
import BenefitDetail from "./components/benefitDetail/BenefitDetail.js";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer.js";
import HomeSection from "./components/HomeSection.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Partners from "./components/partners/Partners";
import Register from "./components/register/Register.jsx";
import Experience from "./components/student-experience/Experience";
import Testimonials from "./components/testimonials/Testimonials.js";
import University from "./components/university/university";
import Login from "./components/login/Login.jsx";
import Features from "./components/features/features.js";
import Banner from "./components/Banner";
import Opportunities from "./components/oppotrunities/Opportunities"

function AppContent() {
  return (
    <Routes>
      {/* Default Route: Banner */}
      <Route path="/" element={<Banner />} />


      {/* Route for HomeSection and additional content */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <HomeSection />
            <University/>
            <Experience />
            <Opportunities />
            <Benefits />
            <Partners />
            <Testimonials />
            <Footer />
          </>
        }
      />
      {/* Other Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/benefit/:id" element={<BenefitDetail />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
       <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
