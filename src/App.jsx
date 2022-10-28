import { useState } from 'react'

import './App.css'

import Particulae from './components/Particulae';
import Rain from './components/Rain';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Rain /> */}
      <Particulae />
      
      <h1>Vite + React</h1>

      <div id="canvas">Canvas not supported.</div>

    </div>
  )
}

export default App
