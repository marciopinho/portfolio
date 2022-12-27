import { useState } from 'react'
import './App.css'
import Particulae from './components/Particulae';
import About from './components/About';
import Contact from './components/Contact';
import projectsData from "../public/projectsData"
import educationData from "../public/educationData"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

// tem[p test:
import ticket from './assets/ticket-fest-check-low-md.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
// import Maps from './components/Maps';
import Card from './components/Card';


library.add(fab, faCheckSquare, faArrowUpRightFromSquare)
AOS.init()



function App() {

  return (
    <div className="App">

      <Particulae />

      <About />

      <span>oooj</span><img src={ticket} alt="" />

      <div className="projects">
        <h1 className="section-header" data-aos="fade-up">.projects</h1>
        <div className="listings">
          {projectsData.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
      
      <div className="education">
        <h1 className="section-header" data-aos="fade-up">.education</h1>
        <div className="listings">
          {educationData.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>

      <Contact />

    </div>
  )
}

export default App
