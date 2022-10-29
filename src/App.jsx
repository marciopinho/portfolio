import { useState } from 'react'
import './App.css'
import Particulae from './components/Particulae';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Particulae />
      {/* <canvas id="canvas">Canvas not supported.</canvas> -------now this is unecessary*/}
      <About />
      <Contact />
    </div>
  )
}

export default App
