import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import { tsParticles } from "tsparticles-engine";

export default function Particulae() {
    const particlesInit = async (main) => {
        console.log(main);
        console.log('reached particlesInit');
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const options = {
    
        background: {
          color: "#fff"
        },

        particles: {
          color: {
            value: "#000",

          },
          links: {
            color: "#000",
            distance: 200,
            enable: true,
            opacity: 0.3,
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
            speed: .2,
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
            type: { "star": {
                "sides": 5, // the number of sides of the star
                "inset": 2 // the inset length, 2 is the default and an acceptable value
            } }
            // type: "edge" // "circle"

          },
          size: {
            random: true,
            value: { min: 0.5, max: 4.5 }
          }
        }
      }

      return (
        <div className="container">
            <Particles
            id="tsparticles"
            init={particlesInit}
            options={options} />
        </div>
      )
}