import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ChallengeCreation from "./pages/ChallengeCreation";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";

// Import AuthProvider
import { AuthProvider } from "./context/AuthContext";  

function App() {
  return (
    <AuthProvider> 
      <Router>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-grow">
            <Sidebar />
            <main className="flex-grow p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-challenge" element={<ChallengeCreation />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<LogoutPage />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;