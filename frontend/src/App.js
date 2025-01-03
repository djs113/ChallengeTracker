import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ChallengeCreation from "./pages/ChallengeCreation";

function App() {
  return (
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
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

