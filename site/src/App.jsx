import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Schedule from './Schedule';
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          we are so amazing
        </p>
      </div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
    </>
  )
}

export default App