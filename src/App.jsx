import { useState } from 'react'

import './App.css'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const [count, setCount] = useState(0)
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const options = {

    background: {
      color: "#0d47a1"
    },
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 6,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        random: true,
        value: 5
      }
    }
  }
  return (
    <div className="App">
      
      <h1>Vite + React</h1>
      <Particles
            id="tsparticles"
            init={particlesInit}
            options={options} />

    </div>
  )
}

export default App
