import { useState } from 'react'
import './App.css'
import Particulae from './components/Particulae';
import About from './components/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Particulae />
      
      <h1>Vite + React</h1>

      <canvas id="canvas">Canvas not supported.</canvas>
      <About />
    </div>
  )
}

export default App
