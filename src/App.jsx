import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <h1 className="text-purple-700 text-7xl">hello tailwind</h1>
        
      </div>
      
    </>
  )
}

export default App
