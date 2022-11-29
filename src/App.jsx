import { useState } from 'react'
import './App.css'
import Particulae from './components/Particulae';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import projects_data from "../projects_data"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Education from './components/Education';
import Experience from './components/Experience';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Maps from './components/Maps';


library.add(fab, faCheckSquare, faArrowUpRightFromSquare)
AOS.init()



function App() {
  const [count, setCount] = useState(0)
  const projects = projects_data.map(item => {
    return (
      <div>
        
        <Projects
          key={item.id}
          {...item}
        />
      </div>
    )
  })

  return (
    <div className="App">

      <Particulae />

      <About />
      <section className='projects'>
        <h1 className="section-header" data-aos="fade-up">.projects</h1>
        {projects}
      </section>
      <Education />

      <Contact />

    </div>
  )
}

export default App
