import { useState } from 'react'

import './App.css'

import Particulae from './components/Particulae';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Particulae />
      
      <h1>Vite + React</h1>

    </div>
  )
}

export default App
