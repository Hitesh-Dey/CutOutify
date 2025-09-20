import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Result from './pages/Result';
import BuyCredits from './pages/BuyCredits';
import Navbar from './components/Navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fafcff] via-[#e6eaff] to-[#d8f1ff]">
      {/* gradient blur circles */}
      <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-purple-400 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-pink-300 opacity-20 blur-2xl animate-pulse delay-1500"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 rounded-full bg-blue-400 opacity-20 blur-[90px] animate-pulse"></div>

      <div className="relative z-10">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Result" element={<Result/>}></Route>
          <Route path="/Pricing" element={<BuyCredits/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
