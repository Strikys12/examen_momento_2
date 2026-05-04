import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Home } from './layouts/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
