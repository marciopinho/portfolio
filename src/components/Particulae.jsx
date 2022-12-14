import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particulae() {
    const particlesInit = async (main) => {

        console.log('loaded particlesInit');
    
        await loadFull(main);
      };
    
      const options = {
        fullScreen: false,
        background: {
          color: "#a40600"
        },

        particles: {
          color: {
            value: "fff",
          },
          links: {
            color: "#fff",
            distance: 140,
            enable: true,
            opacity: 0.6,
            width: 1.2
          },
          collisions: {
            enable: true
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: .3,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 900
            },
            value: 100
          },
          opacity: {
            value: 0.8
          },
          shape: {
            // type: { "star": {
            //     "sides": 5, // the number of sides of the star
            //     "inset": 2 // the inset length, 2 is the default and an acceptable value
            // } }
            // type: "edge" // "circle"
            type: "circle"

          },
          size: {
            random: true,
            value: { min: 0.5, max: 2.5 }
          }
        }
      }

      return (
        <div className="particulae-container">
            <Particles
            id="tsparticles"
            init={particlesInit}
            options={options} />
            <div id="particulae--header">
                <h1>Márcio Pinho</h1>
                <h2>Full-stack developer</h2>
            </div>
        </div>
      )
}