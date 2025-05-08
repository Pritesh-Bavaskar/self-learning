import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // Correct casing to match the file name
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import AuthRoute from "./components/AuthRoute";
import CatDashboardPage from "./pages/CatDashboardPage";
import ScrollToTop from './components/ScrollToTop';
import QAPage from "./pages/QAPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route
              path="/courses/cat"
              element={
                <AuthRoute>
                  <CatDashboardPage />
                </AuthRoute>
              }
            />
            <Route
              path="/courses/cat/problem-solving"
              element={
                <AuthRoute>
                  <QAPage />
                </AuthRoute>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
