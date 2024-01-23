import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/Pricelist/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <h1 className="text-purple-700 text-7xl p-12 text-center">hello tailwind</h1>
        <PriceList />
        
      </div>
      
    </>
  )
}

export default App
