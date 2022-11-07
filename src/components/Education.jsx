import Uemg from '../assets/uemg.png'
import Polito from '../assets/polito.png'
import Ufmg from '../assets/logo_ufmg_m_only.png'
import Wagon from '../assets/wagon_black.png'

export default function Education() {
    return (
        <>
            <h1 className="section-header" data-aos="fade-up">.education</h1>
            
            <div className="listings">

                    <div className="listing-card" data-aos="fade-up">
                        <a href="https://www.lewagon.com/about-us" target="_blank"><img src={Wagon} alt="Le Wagon logo" /></a>
                        <h2>Le Wagon</h2>
                        <h3>Full-stack Web Development</h3>
                        <h3>2022</h3>
                    </div>

                    <div className="listing-card" data-aos='fade-up'>
                        <a href="https://www.polito.it/index.php?lang=en" target="_blank"><img src={Polito} alt="" /></a>
                        <h2>Politecnico di Torino</h2>
                        <h3>Systemic Design, MSc</h3>
                        <h3>2011 - 2013</h3>
                    </div>

                    <div className="listing-card" data-aos='fade-up'>
                        <a href="https://uemg.br/internacional" target="_blank"><img src={Uemg} alt="" /></a>
                        <h2>UEMG</h2>
                        <h3>Graphic Design, BSc</h3>
                        <h3>2006 - 2011</h3>
                    </div>

                    <div className="listing-card" data-aos='fade-up'>
                        <a href="https://ufmg.br/international-visitors" target="_blank"><img src={Ufmg} alt="" /></a>
                        <h2>UFMG</h2>
                        <h3>Business Administration, BSc</h3>
                        <h3>2006 - 2011</h3>
                    </div>

            </div>
        </>
    )
}