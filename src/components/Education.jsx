import Uemg from '../assets/uemg.png'
import Polito from '../assets/polito.png'
import Ufmg from '../assets/logo_ufmg_m_only.png'
import Wagon from '../assets/wagon_black.png'
// import Lewagon from '../assets/lewagon.png'

export default function Education() {
    return (
        <div className="listings">
            <h1 data-aos="fade-up">education.</h1>

            <div>
                <div className="listing-card" data-aos="fade-up">
                    <img src={Wagon} alt="Le Wagon logo" />
                    <h2>Le Wagon</h2>
                    <h3>Full-stack Web Development</h3>
                    <h3>2022</h3>
                </div>

                <div className="listing-card" data-aos='fade-up'>
                    <img src={Polito} alt="" />
                    <h2>Politecnico di Torino</h2>
                    <h3>Systemic Design, MSc</h3>
                    <h3>2011 - 2013</h3>
                </div>

                <div className="listing-card" data-aos='fade-up'>
                    <img src={Uemg} alt="" />
                    <h2>UEMG</h2>
                    <h3>Graphic Design, BSc</h3>
                    <h3>2006 - 2011</h3>
                </div>

                <div className="listing-card" data-aos='fade-up'>
                    <img src={Ufmg} alt="" />
                    <h2>UFMG</h2>
                    <h3>Business Administration, BSc</h3>
                    <h3>2006 - 2011</h3>
                </div>
            </div>
            

        </div>
    )
}