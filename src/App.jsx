import { useState } from 'react'
import './App.css'
import Particulae from './components/Particulae';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Education from './components/Education';
import Experience from './components/Experience';

import AOS from 'aos';
import 'aos/dist/aos.css';


library.add(fab, faCheckSquare)
AOS.init()



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Particulae />
      {/* <canvas id="canvas">Canvas not supported.</canvas> -------now this is unecessary*/}

      

      <About />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
