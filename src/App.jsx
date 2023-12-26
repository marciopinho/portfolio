import { useState } from 'react'
import './App.css'
import Particulae from './components/Particulae';
import About from './components/About';
import Contact from './components/Contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';

// check this stylesheet below, seems misplaced
import 'aos/dist/aos.css';
import Card from './components/Card';
import { aboutData, educationData, projectsData } from '../data/content';


library.add(fab, faCheckSquare, faArrowUpRightFromSquare)
AOS.init()



function App() {
console.log('aboutData', aboutData)
  return (
    <div className="App">

      <Particulae />

      <About {...{aboutData}} />

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
