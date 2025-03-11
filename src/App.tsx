import { Routes, Route } from "react-router-dom"
import { TailwindIndicator } from "./components/tailwind-indicator"
import CookiePolicyPage from "./pages/cookie-policy"
import TermsOfService from "./pages/terms-of-service"
import SignupPage from "./pages/sign-up"
import PrivacyPolicyPage from "./pages/privacy-policy"
import OnboardingPage from "./pages/onboarding"
import LoginPage from "./pages/login"
import DoctorDashboardPage from "./pages/doc-dashboard"
import DashboardPage from "./pages/dashboard"
import LandingPage from "./pages/page"

function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/doc-dashboard" element={<DoctorDashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Routes>
      </div>
      <TailwindIndicator />
    </div>
  )
}

export default App