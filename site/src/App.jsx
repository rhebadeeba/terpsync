import { useState } from 'react'
import './App.css'
import React from 'react';


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
      
    </>
  )
}

export default App