import { useState } from 'react'
import './App.css'
import Particulae from './components/Particulae';
import About from './components/About';
import Contact from './components/Contact';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Education from './components/Education';
import Experience from './components/Experience';



library.add(fab, faCheckSquare, faCoffee)




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Particulae />
      {/* <canvas id="canvas">Canvas not supported.</canvas> -------now this is unecessary*/}

      

      <About />
      <Education />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
